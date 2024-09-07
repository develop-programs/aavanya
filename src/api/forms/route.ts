import { NextResponse } from "next/server";

export async function GET() {
    try {
        return await NextResponse.json({ message: "Hello World" })
    }
    catch (error: any) {
        return await NextResponse.json({ message: error }, { status: 500 })
    }
}