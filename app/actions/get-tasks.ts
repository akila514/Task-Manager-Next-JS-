import prisma from "@/lib/db";
import { getCurrentUser } from "./get-current-user";

export const getTasks = async () => {
  const currentUser = await getCurrentUser();

  const tasks = await prisma.task.findMany({
    where: {
      user: {
        email: currentUser?.email,
      },
    },
  });

  return tasks;
};
