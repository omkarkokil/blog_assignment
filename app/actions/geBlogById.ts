import Blog from "@/models/Blog";
import connect from "@/utils/db";

const getBlogById = async (_id: string) => {
  try {
    await connect();
    const data = await Blog.findById(_id).sort({ createdAt: -1 });
    return data;
  } catch (error) {
    return [];
  }
};

export default getBlogById;
