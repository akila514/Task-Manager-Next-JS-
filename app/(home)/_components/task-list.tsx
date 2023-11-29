"use client";

import { Task } from "@prisma/client";
import TaskTile from "./task-tile";

interface TaskListProps {
  tasks: Task[];
}

const TasksList = ({ tasks }: TaskListProps) => {
  return (
    <div className="text-sm">
      {tasks.map((task) => (
        <TaskTile key={task.id} title={task.title} />
      ))}
    </div>
  );
};

export default TasksList;
