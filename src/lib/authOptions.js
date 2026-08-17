import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import { loginUser } from "@/action/server/auth"
import { collection, dbConnect } from "./dbConnect";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',

            credentials: {
                // email: { label: "Email", type: "email", placeholder: "email" },
                // password: { label: "Password", type: "password" }
            },

            async authorize(credentials, req) {
                // console.log(credentials);
                const user = await loginUser(credentials);
                return user;
            }
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ],

    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {

            const isExit = await dbConnect(collection.USER).findOne({
                email: user.email,
                provider: account?.provider
            });

            if (isExit) {
                return true;
            };

            const newUser = {
                provider: account?.provider,
                name: user.name,
                email: user.email,
                image: user?.image,
                role: "user",
                createdAt: new Date().toISOString()
            };

            const result = await dbConnect(collection.USER).insertOne(newUser);
            return result.acknowledged;

            // console.log({ user, account, profile, email, credentials });
            // return true;
        },
    }
}