import { loginUser } from "@/action/server/auth"
import CredentialsProvider from "next-auth/providers/credentials"

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
        })
    ],
}