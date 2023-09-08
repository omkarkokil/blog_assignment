import React from "react";
import WriteForm from "./components/WriteForm";

const Write = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex items-center mt-2 w-[90%] justify-center gap-4 flex-col">
          <WriteForm />
        </div>
      </div>
    </>
  );
};

export default Write;
