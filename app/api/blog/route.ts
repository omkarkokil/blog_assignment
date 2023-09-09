import Blog from "@/models/Blog"
import connect from "@/utils/db"
import { NextResponse } from "next/server";



export async function POST(request: Request) {
    const body = await request.json()
    const newPost = new Blog(body)

    try {
        await connect();
        await newPost.save()
        return NextResponse.json("Post created successfully", { status: 200 })
    } catch (error: any) {

        return new NextResponse("Server has an error", { status: 400 })
    }
}