import Image from "next/image";
import React from "react";

const BlogCard = () => {
  return (
    <>
      <div className="block  w-[90%] bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-800 rounded-[5px]">
        <div className="w-full h-[300px]  relative">
          <Image
            src={"/images/write.jpg"}
            className="object-cover p-2 rounded-[15px]"
            alt="none"
            fill
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Card title
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="text-base text-neutral-600 dark:text-neutral-200">
            <small className="text-neutral-500 dark:text-neutral-400">
              Last updated 3 mins ago
            </small>
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
