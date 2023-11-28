"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { getCurrentUser } from "@/app/actions/get-current-user";

interface NavbarProps {
  currentUser: {
    name: string;
    image: string | null;
  } | null;
}

const Navbar = ({ currentUser }: NavbarProps) => {
  console.log(currentUser);
  const router = useRouter();
  const onSignOut = () => {
    signOut();
    router.refresh();
    router.push("/login");
  };

  return (
    <nav className="flex flex-row space-x-5 py-2 justify-between bg-[#131313] text-[#e9e9e9] text-sm">
      <div className="flex">
        <h1 className="flex my-auto">Logo</h1>
      </div>
      <div className="space-x-5 flex flex-row">
        <Link href={`/`} className="flex my-auto">
          Home
        </Link>
        <Link href={`/create`} className="flex my-auto">
          Create
        </Link>
        {currentUser ? (
          <button onClick={onSignOut}>Signout</button>
        ) : (
          <>
            <Link href={`/login`} className="flex my-auto">
              Sign In
            </Link>
            <Link href={`/signup`} className="flex my-auto">
              Sign Up
            </Link>
          </>
        )}
      </div>
      <div className="flex flex-row space-x-5">
        {currentUser && <h1 className="flex my-auto">{currentUser.name}</h1>}
        {currentUser?.image && (
          <Image
            src={currentUser.image}
            alt={"Profile Pic"}
            width={40}
            height={40}
            className="rounded-full"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
