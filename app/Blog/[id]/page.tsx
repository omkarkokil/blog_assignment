import dynamic from "next/dynamic";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
const Content = dynamic(() => import("@/app/(site)/components/Content"), {
  ssr: false,
});

interface IParams {
  id: string;
}

const getSingleBlogs = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GET_BLOGS}/${id}`, {
    cache: "no-store",
  });
  if (res.status === 404) {
    toast.error("Something went wrong");
  }
  return res.json();
};

const page = async ({ params }: { params: IParams }) => {
  const blog = await getSingleBlogs(params.id);

  return (
    <div className="flex  items-center justify-center">
      <div className="flex mt-2 w-[90%] justify-center gap-4 flex-col">
        <div className="w-full h-[300px]  relative">
          <Image
            src={blog.image ? blog.image : "/images/write.jpg"}
            className="object-cover p-2 rounded-[15px]"
            alt="none"
            fill
          />
        </div>
        <div className="px-2">
          <h1 className=" mb-2 text-4xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {blog.title}
          </h1>
          <Content content={blog.content} />
        </div>
      </div>
    </div>
  );
};

export default page;
