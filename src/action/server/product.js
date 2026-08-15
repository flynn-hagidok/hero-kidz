"use server"

import { collection, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb"

export const getProduct = async () => {
    const products = await dbConnect(collection.PRODUCTS).find().toArray();
    return products;
};

export const singleProduct = async (id) => {
    const query = {
        _id: new ObjectId(id)
    };

    const product = await dbConnect(collection.PRODUCTS).findOne(query);
    return product || {};
};