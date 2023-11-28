"use client";

import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    signIn("credentials", { email, password, redirect: false }).then(
      (callback) => {
        if (callback?.ok) {
          router.refresh();
        }

        if (callback?.error) {
          console.log(callback.error);
        }
      }
    );

    router.push("/");
    router.refresh();
  };

  return (
    <div className="flex mx-auto">
      <form onSubmit={submitHandler} className="flex flex-col space-y-4">
        <label htmlFor="email">Email</label>
        <input
          className="text-white bg-transparent border rounded-md p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          className="text-white bg-transparent border rounded-md p-2"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
