"use client";

import React from "react";
import useScroll from "./useScroll";
const ScrollComponent = () => {
  const scrollPosition = useScroll();

  const getBackgroundColor = () => {
    if (scrollPosition < 200) {
      return "lightblue";
    } else if (scrollPosition < 400) {
      return "lightgreen";
    } else {
      return "lightcoral";
    }
  };

  return (
    <div style={{ height: "1000px", backgroundColor: getBackgroundColor() }}>
      <h1>Scroll down to see the background color change!</h1>
    </div>
  );
};

export default ScrollComponent;
