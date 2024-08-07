import NextAuth, { User } from "next-auth"
import Credentials from "next-auth/providers/credentials"

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
        const res = await fetch(`{process.env.DOMAIN}/api/auth/getuser`, {
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
    jwt({ token, user }) {
      return token
    },

    session({ session, token }) {
      session.user.id = token.sub as string
      return session
    }
  },

})
