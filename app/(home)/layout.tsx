import Navbar from "@/components/navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto pt-2 px-5">
      <Navbar />
      <main className="py-10 flex">{children}</main>
    </div>
  );
};

export default HomeLayout;
