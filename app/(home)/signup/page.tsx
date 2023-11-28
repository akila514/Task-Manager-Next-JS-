"use client";

import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = await axios.post("/api/register", {
      name: username,
      password,
      email,
    });
    if (user) {
      router.push("/login");
    } else {
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
        />{" "}
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
        <button type="submit">Sign Up</button>
        <button type="button" onClick={() => signIn("github")}>
          Sign Up with GitHub
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
