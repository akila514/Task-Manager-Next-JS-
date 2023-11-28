import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import bcrypt from "bcrypt";
import { signIn } from "next-auth/react";

export const options: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
        },
        password: { label: "Password", type: "password" },
        email: { label: "Email", type: "email" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error("No credentials");
        }
        const user = await db.user.findUnique({
          where: {
            email: credentials!.email,
          },
        });

        if (!user || !user.password) {
          throw new Error("No user");
        }

        const isValid = await bcrypt.compare(
          user.password,
          credentials.password
        );

        if (!isValid) {
          throw new Error("Incorrect password");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  debug: process.env.NODE_ENV === "development",
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
};


