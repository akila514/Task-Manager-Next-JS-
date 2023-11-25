const Navbar = () => {
  return (
    <nav className="flex flex-row space-x-5 py-2 justify-between bg-[#131313] text-[#e9e9e9] text-sm">
      <div className="">
        <h1>Logo</h1>
      </div>
      <div className="space-x-5">
        <a>Home</a>
        <a>Add Task</a>
        <a>Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
