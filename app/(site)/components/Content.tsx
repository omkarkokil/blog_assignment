"use client";
import React from "react";
import "react-quill/dist/quill.bubble.css";

const Content = ({ content }: { content: string }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: content,
      }}
      className="ql-editor"
    ></div>
  );
};

export default Content;
