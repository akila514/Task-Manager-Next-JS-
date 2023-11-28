import Link from "next/link";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Image from "next/image";

const Navbar = async () => {
  const session = await getServerSession(options);

  return (
    <nav className="flex flex-row space-x-5 py-2 justify-between bg-[#131313] text-[#e9e9e9] text-sm">
      <div className="">
        <h1>Logo</h1>
      </div>
      <div className="space-x-5">
        <Link href={`/`}>Home</Link>
        <Link href={`/create`}>Create</Link>
        {session ? (
          <Link href={`/api/auth/signout`}>Signout</Link>
        ) : (
          <>
            <Link href={`/login`}>Sign In</Link>
            <Link href={`/signup`}>Sign Up</Link>
          </>
        )}
      </div>
      <div className="flex flex-row space-x-5">
        {session?.user?.name && <h1>{session.user.name}</h1>}
        {session?.user?.image && (
          <Image
            src={session.user.image}
            alt={"Profile Pic"}
            width={10}
            height={10}
            className="rounded-full"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
