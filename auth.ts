import NextAuth, { User } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { getUser } from "./lib/actions/clients"
import axios from "axios"
import { cache } from "react"

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: "email", name: "email" },
        password: { label: "password", type: "password", name: "password" }
      },
      authorize: async (credentials) => {
        let user = null
        // const res = await fetch(`${process.env.DOMAIN}/api/getuser`, {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(credentials),
        // });
        user = await getUser(credentials.email as string)
        if (!user) {
          throw new Error("Email or password wrong")
        }
        // user = await res.json()
        return user
      }
    }
    )
  ],
  callbacks: {
    jwt({ token, user }) {
      return token
    },

    session({ session, token }) {
      session.user.id = token.sub as string
      return session
    }
  },

})
