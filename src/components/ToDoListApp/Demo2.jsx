import React from "react";
import Header from "../Header";
import TodoCard from "./TodoCard";

const Demo2 = () => {
  return (
    <div className="bg-white pt-22 text-black min-h-screen w-full flex flex-col items-center overflow-x-hidden">
      <Header heading="TODO List" />
      <div className="w-full flex justify-center mt-5 px-4">
        <div className="">
          <TodoCard  Todo={true}/>
        </div>
      </div>
    </div>
  );
};

export default Demo2;
