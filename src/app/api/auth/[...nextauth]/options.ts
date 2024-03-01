import type { NextAuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"

export const options: NextAuthOptions = {
    providers:[
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        CredentialsProvider({
            name: "github",
            credentials:{
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "your useraname"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your password"
                }
                
            },
            async authorize(credentials) {
                const user = {id: "42", name: "Dave", password: "nextauth"}

                if(credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            } 
        })
        
    ]
}