import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-row space-x-5 py-2 justify-between bg-[#131313] text-[#e9e9e9] text-sm">
      <div className="">
        <h1>Logo</h1>
      </div>
      <div className="space-x-5">
        <Link href={`/`}>Home</Link>
        <Link href={`/create`}>Create</Link>
        <Link href={`/`}>Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
