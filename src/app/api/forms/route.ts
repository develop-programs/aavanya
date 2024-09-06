import { NextResponse } from "next/server";

export async function GET() {
  try {
    return await NextResponse.json({ msg: "success" }, { status: 200 });
  } catch (error) {
    return await NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function POST() {
  try {
    return await NextResponse.json({ msg: "success" }, { status: 200 });
  } catch (error) {
    return await NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function PUT() {
  try {
    return await NextResponse.json({ msg: "success" }, { status: 200 });
  } catch (error) {
    return await NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    return await NextResponse.json({ msg: "success" }, { status: 200 });
  } catch (error) {
    return await NextResponse.json({ error: error }, { status: 500 });
  }
}
