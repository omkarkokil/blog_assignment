import React from "react";

interface IParams {
  id: string;
}

const page = ({ params }: { params: IParams }) => {
  return <div>page {params.id} </div>;
};

export default page;
