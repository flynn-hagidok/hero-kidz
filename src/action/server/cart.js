"use server"

import { collection, dbConnect } from "@/lib/dbConnect"
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

const cartCollection = dbConnect(collection.CART);

export const handleCart = async ({ product, inc = true }) => {

    const user = await getServerSession(authOptions) || {};
    if (!user) {
        return { success: false }
    }

    // get product 
    const query = {
        email: user.email,
        productId: product._id
    }
    const isAdded = await cartCollection.findOne(query);

    if (isAdded) {
        //update product
        const updateData = {
            $inc: {
                quantity: inc ? 1 : -1
            }
        };

        const result = await cartCollection.updateOne(query, updateData);
        return { success: Boolean(result.modifiedCount) };
    } else {
        const newProduct = {
            productId: product._id,
            title: product.title,
            email: user.email,
            product_image: product.image,
            quantity: 1,
            price: product.price - (product.price * product.discount) / 100
        }

        const reuslt = await cartCollection.insertOne(newProduct);
        return { success: reuslt.acknowledged};
    }
};