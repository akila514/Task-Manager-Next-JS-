import Button from "@/components/button";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row border rounded-md p-4 w-full border-[#afafaf] text-sm md:justify-between space-y-2 md:space-y-0">
        <p className="flex my-auto">Create a Task</p>
        <Link href={`/create`}>
          <Button>Create a Task</Button>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
