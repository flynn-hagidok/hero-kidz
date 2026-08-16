"use server"

import { collection, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {

    const { name, email, password } = payload;
    //check email and password
    if (!name || !email || !password) {
        return null;
    };

    //check exiting user
    const exitingUser = await dbConnect(collection.USER).findOne({ email });

    if (exitingUser) {
        return null
    };

    //create new user
    const newUser = {
        provider: "credentials",
        name,
        email,
        password: await bcrypt.hash(password, 14),
        role: "user",
        createdAt: new Date().toISOString()
    };

    //insert to db
    const result = await dbConnect(collection.USER).insertOne(newUser);
    if (result.acknowledged) {
        return {
            ...result, insertedId: result.insertedId.toString()
        }
    };
};