import Blog from "@/models/Blog"

import connect from "@/utils/db"

import { NextResponse } from "next/server";

interface IParams {

    id: string;

}

export const GET = async (request: Request, { params }: { params: IParams }) => {

    const { id } = params

    try {

        await connect()
        const singleBlog = await Blog.findById(id)
        return NextResponse.json(singleBlog, { status: 200 })

    } catch (error) {
        return new NextResponse("DB error", { status: 404 })
    }

}