    "use server"

    import { collection, dbConnect } from "@/lib/dbConnect"
    import { authOptions } from "@/lib/authOptions";
    import { getServerSession } from "next-auth";
    import { ObjectId } from "mongodb";
    import { cache } from "react";
    import { revalidatePath } from "next/cache";

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
            return { success: reuslt.acknowledged };
        }
    };

    export const getProducts = cache(async () => {
        const user = await getServerSession(authOptions);
        if (!user) {
            return []
        };

        const query = {
            email: user.email
        }

        const result = await cartCollection.find(query).toArray();
        return result.map(item => ({ ...item, _id: item._id.toString() }));
    });

    export const deleteItem = async (id) => {
        const user = await getServerSession();
        if (!user) {
            return false;
        };

        const query = {
            _id: new ObjectId(id)
        };

        const result = await cartCollection.deleteOne(query);

        // if (Boolean(result.deletedCount)) {
        //     revalidatePath("/cart");
        // };

        return { success: Boolean(result.deletedCount) };
    };

    export const increaseItems = async (id, quantity) => {
        const user = await getServerSession(authOptions) || {};
        if (!user) {
            return { success: false }
        };

        if (quantity > 10) {
            return { success: false, message: "you can by above 10 products at a time" }
        };

        const query = {
            _id: new ObjectId(id)
        };

        const updataItem = {
            $inc: {
                quantity: 1
            }
        };

        const result = await cartCollection.updateOne(query, updataItem);
        return { success: Boolean(result.modifiedCount) };
    };

    export const decreaseItems = async (id, quantity) => {
        const user = await getServerSession(authOptions) || {};
        if (!user) {
            return { success: false }
        };

        if (quantity > 10) {
            return { success: false, message: "you can by above 10 products at a time" }
        };

        const query = {
            _id: new ObjectId(id)
        };

        const updataItem = {
            $inc: {
                quantity: -1
            }
        };

        const result = await cartCollection.updateOne(query, updataItem);
        return { success: Boolean(result.modifiedCount) };
    };