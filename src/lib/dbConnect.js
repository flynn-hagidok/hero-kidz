import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);
const dbName = process.env.DB_NAME;

export const collection = {
    PRODUCTS: "products"
}

export const dbConnect = (cname) => {
    return client.db(dbName).collection(cname);
}