import React, { useState } from "react";

function Toggle({ isActive, setIsActive }) {
  return (
    <div
      onClick={() => {setIsActive(!isActive)}}
      className={`cursor-pointer opacity-75 hover:opacity-100 h-[14px] w-[30px] flex items-center rounded-full  px-1 ${
        isActive ? "bg-soft-cyan" : "bg-light-grayish-blue"
      } `}
    >
      <div
        className={`h-[10px] w-[10px] bg-white rounded-full ${
          isActive ? "translate-x-full" : "translate-x-0"
        }`}
      />
    </div>
  );
}

export default Toggle;
