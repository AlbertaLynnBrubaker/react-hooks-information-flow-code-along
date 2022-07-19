import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ color, changeColor }) {
  
  const handleClick = () => {
    const newColor = getRandomColor();
    changeColor(newColor);
  }

  return <div onClick={handleClick} className="child" style={{ backgroundColor: color }} />;
}

export default Child;
