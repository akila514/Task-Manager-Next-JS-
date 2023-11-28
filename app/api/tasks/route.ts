import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(options);
    if (!session || !session.user) {
      return;
    }
    const body = await req.json();

    const task = await db.task.create({
      data: {
        title:body.title,
        userId: session.user.id,
      },
    });

    return NextResponse.json(task);

    return NextResponse.json(task);
  } catch (error) {
    console.log(error);
  }
}
