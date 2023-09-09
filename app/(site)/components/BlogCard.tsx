"use client";

import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { BlogsProps } from "@/interfaces/Blogs";
import dynamic from "next/dynamic";
const Content = dynamic(() => import("./Content"), { ssr: false });

const BlogCard: FC<BlogsProps> = ({ _id, title, image }) => {
  return (
    <>
      <div className="block hover:scale-[1.01] transition-all hover:shadow-xl  w-[90%] bg-slate-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-800 rounded-[5px]">
        <Link href={`/Blog/${_id}`} className="h-full w-full">
          <div className="w-full h-[300px]  relative">
            <Image
              src={image ? image : "/images/write.jpg"}
              className="object-cover p-2 rounded-[15px]"
              alt="none"
              fill
            />
          </div>
          <div className="p-6">
            <h2 className="mb-2 text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              {title}
            </h2>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BlogCard;
