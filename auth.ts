import NextAuth, { User } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { getUser } from "./lib/actions/clients"
 
export const { handlers , signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    Credentials({
      credentials: {
        email: {label: "email", name : "email" },
        password : {label: "password", type: "password", name: "password"}
      },
      authorize: async (credentials) => {
          let user = null
          const  res = await fetch('http://localhost:3000/api/auth/getuser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
          });
          user = await res.json()
           
          return user 
      }
    }
  )
  ],
  callbacks: {
    jwt({token, user }) {
      return token
    },

    session({session, token}) {
      session.user.id = token.sub
      return session
    }
  },

})