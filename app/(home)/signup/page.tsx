"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = await axios.post("/api/register", {
      name: username,
      email,
      password,
    });
    if (user) {
      router.push("/");
    } else {
      setEmail("");
      setUsername("");
      setPassword("");
    }
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
        <label htmlFor="email">Email</label>
        <input
          value={email}
          className="text-white bg-transparent border rounded-md p-2"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;