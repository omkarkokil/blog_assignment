import { BlogsProps } from "@/interfaces/Blogs";
import BlogCard from "./components/BlogCard";
import getBlogs from "../actions/getBlogs";

const Home = async () => {
  const blogs: BlogsProps[] = await getBlogs();

  return (
    <>
      <div className="px-2 py-4 flex gap-4 items-center justify-center flex-col">
        {blogs.map((blog, id) => (
          <BlogCard
            _id={blog._id}
            title={blog.title}
            content={blog.content}
            image={blog.image}
            key={id}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
