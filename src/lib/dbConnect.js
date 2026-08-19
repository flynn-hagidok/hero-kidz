import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);
const dbName = process.env.DB_NAME;

export const collection = {
    PRODUCTS: "products",
    USER: "users",
    CART: "cart",
};

export const dbConnect = (cname) => {
    return client.db(dbName).collection(cname);
};