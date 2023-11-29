import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(options);
    if (!session || !session.user || !session.user) {
      return;
    }
    const body = await req.json();

    const user = await prisma.user.findUnique({
      where: { email: session.user.email! },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const task = await prisma.task.create({
      data: {
        title: body.title,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.log(error);
  }
}
