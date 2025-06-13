import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: "2.0",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("Provider:", account.provider); // 👉 "google" or "twitter"
      return true;
    },
    async session({ session, token, user }) {
      // If you store it in the token below, you get it here too:
      session.provider = token.provider;
      return session;
    },
    async jwt({ token, account, user, profile, isNewUser }) {
      // When signing in, attach provider to the JWT
      if (account) {
        token.provider = account.provider;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;
