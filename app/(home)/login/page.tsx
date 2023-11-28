"use client";

import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    signIn("credentials", { username, password, redirect: false }).then(
      (callback) => {
        if (callback?.error) {
          console.log(callback.error);
        } else {
          router.refresh();
          router.push("/");
        }
      }
    );
  };

  return (
    <div className="flex mx-auto">
      <form onSubmit={submitHandler} className="flex flex-col space-y-4">
        <label htmlFor="name">Username</label>
        <input
          className="text-white bg-transparent border rounded-md p-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="name"
          id="name"
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default LoginPage;
