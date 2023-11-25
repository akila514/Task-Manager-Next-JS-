import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const task = await db.task.create({
      data: {
        title: body.title,
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.log(error);
  }
}
