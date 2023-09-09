"use server"
import Blog from "@/models/Blog";
import connect from "@/utils/db";

const getBlogs = async () => {
    try {
        await connect();
        const data = await Blog.find().sort({ createdAt: -1 })
        return data
    } catch (error) {
        return []
    }
}

export default getBlogs;