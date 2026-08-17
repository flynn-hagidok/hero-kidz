import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import { loginUser } from "@/action/server/auth"

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
}