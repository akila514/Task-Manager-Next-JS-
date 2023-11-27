import Button from "@/components/button";
import Link from "next/link";
import TasksList from '@/app/(home)/_components/task-list'

const HomePage = () => {
  return (
    <div className="flex flex-col w-full space-y-8">
      <div className="flex flex-col md:flex-row border rounded-md p-4 w-full border-[#afafaf] text-sm md:justify-between space-y-2 md:space-y-0">
        <p className="flex my-auto">Create a Task</p>
        <Link href={`/create`}>
          <Button>Create a Task</Button>
        </Link>
      </div>
      <div className="space-y-5">
        <p className="text-2xl font-medium">My Tasks</p>
        <TasksList/>
      </div>
    </div>
  );
};

export default HomePage;
