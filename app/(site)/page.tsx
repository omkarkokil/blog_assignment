import { notFound } from "next/navigation";
import BlogCard from "./components/BlogCard";
import { BlogsProps } from "@/interfaces/Blogs";
import toast from "react-hot-toast";
import getBlogs from "../actions/getBlogs";

// const getBlogs = async () => {
//   const res = await fetch("http://localhost:3000/api/blog", {
//     cache: "no-store",
//   });

//   if (res.status === 404) {
//     toast.error("Something went wrong");
//     return notFound();
//   }

//   return res.json();
// };

export default async function Home() {
  const blogs = await getBlogs();
  return (
    <>
      <div className="px-2 py-4 flex gap-4 items-center justify-center flex-col">
        {blogs.map((blog, id) => (
          <BlogCard
            _id={blog._id.toString()}
            title={blog.title}
            content={blog.content}
            image={blog.image}
            key={id}
          />
        ))}
      </div>
    </>
  );
}
