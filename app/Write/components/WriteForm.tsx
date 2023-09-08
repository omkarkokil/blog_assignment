"use client";

import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import React, { FC, useState } from "react";
import Image from "next/image";
import { BsFillImageFill } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { CldUploadButton } from "next-cloudinary";
import toast from "react-hot-toast";

const WriteForm: FC = () => {
  const router = useRouter();

  // Reactquill tools
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic"],
      ["blockquote", "code-block"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      [{ align: [] }],
      ["clean", "link", "video"],
    ],
  };

  // states
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");

  // Function to submit the form to backend
  const OnSubmit = async () => {
    setLoading(true);
    try {
      const data = { title, image, content };
      toast.loading("Creating new Blog", { id: "1" });

      if (!title || !content) {
        toast.error("All fields are mandatory", { id: "1" });
        return null;
      }
      const response = await fetch("/api/blog", {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });

      await response.json();
      toast.success("Blog created successfully", { id: "1" });
      setContent("");
      setImage("");
      setTitle("");
      router.push("/");
    } catch (error) {
      toast.error("something went wrong please try again", { id: "1" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full h-[300px] relative">
        <Image
          src={image ? image : "/images/write.jpg"}
          className="object-cover rounded-xl"
          alt="none"
          fill
        />
      </div>
      <div className="flex w-full  items-center justify-between">
        <div className="flex gap-2  items-center justify-center">
          <CldUploadButton
            options={{ maxFiles: 1 }}
            onUpload={(result: any) => {
              setImage(result.info.secure_url);
            }}
            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET}
            className="p-4  bg-sky-600 dark:bg-sky-600 text-white rounded-full cursor-pointer"
          >
            <BsFillImageFill />
          </CldUploadButton>

          <input
            type="text"
            name="title"
            value={title}
            disabled={loading}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            className="text-4xl leading-[0px] dark:bg-transparent dark:placeholder:text-gray-500 outline-none border-none"
            placeholder="Title"
          />
        </div>
        <Button
          onClick={OnSubmit}
          className="dark:bg-sky-600 dark:hover:bg-sky-400 dark:text-white bg-sky-600 rounded-[5px]"
        >
          Publish
        </Button>
      </div>
      <ReactQuill
        className="w-full text-[20px] dark:placeholder:text-slate-50 before:text-white"
        placeholder="Write your blog like cms..."
        modules={modules}
        value={content}
        onChange={(content: string) => setContent(content)}
        theme="bubble"
      />
    </>
  );
};

export default WriteForm;
