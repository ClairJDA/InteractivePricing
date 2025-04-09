"use client";
import { useState } from "react";
import classes from "./slider.module.css";

function SliderBar({ views, setViews }) {
  return (
    <div className="relative">
      <input
        id="default-range"
        type="range"
        value={views}
        min={1}
        className={`w-full h-2 absolute z-30 bg-gray-200 rounded-lg appearance-none cursor-pointer ${classes.slider}`}
        onChange={(e) => setViews(e.target.value)}
      />
      <div
        className="absolute w-full top-4 bg-soft-cyan h-2 z-10"
        style={{ width: `${views}%` }}
      ></div>
      <div className="absolute w-full top-4 bg-light-grayish-blue h-2"></div>
    </div>
  );
}

export default SliderBar;
