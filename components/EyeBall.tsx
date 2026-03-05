"use client";
import React, { useState, useEffect, useRef } from "react";

const EyeBall = () => {
  const [mouseX, setMouseX] = useState<number>(0); //storing cursor position
  const [mouseY, setMouseY] = useState<number>(0);
  const eyeRef = useRef<HTMLDivElement>(null); // DOM reference for the eyeball
  //for tracking mouse movement and updates the states for every mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // console.log(`x-axis:- ${e.clientX} | y-axis:- ${e.clientY}`);
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculatePupilPosition = () => {
    if (!eyeRef.current) return { x: 0, y: 0 };
    const eye = eyeRef.current!.getBoundingClientRect(); //getting the left(x) and top(y) position of the element in the viewport
    //datas of the eye
    //     {
    //     "x": 360,
    //     "y": 520.7999877929688,
    //     "width": 48,
    //     "height": 48,
    //     "top": 520.7999877929688,
    //     "right": 408,
    //     "bottom": 568.7999877929688,
    //     "left": 360
    // }

    const eyeCenterX = eye.left + eye.width / 2; //start from the edge of the element(eye.left) and add half of the element's width(eye.wdith/2) to get the center horizontally
    const eyeCenterY = eye.top + eye.height / 2; //start from the top of the element(eye.top) and add half of the element's height(eye.height/2) to get the center vertically

    //mouseX(horizontal) mouseY(vertical)
    const deltaX = mouseX - eyeCenterX; //Subtract the horizontal position of the center of the eye eyeCenterX from mouseX to find the horizontal difference between the two positions.
    const deltaY = mouseY - eyeCenterY; //Subtract the vertical position of the center of the eye eyeCenterY from mouseY to find the vertical difference between the two positions.

    const distance = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2), 10); //Pythagorean theorem to calculate the distance between two points
    //we want to limit the distance the pupil can move, so we use Math.min to cap it at 10 pixels

    const angle = Math.atan2(deltaY, deltaX); //Calculate the angle between the horizontal axis and the line connecting the eye center to the mouse position using Math.atan2,
    // assume deltaX = 8 and deltaY = 6 => angle = Math.atan2(6, 8) => angle = 0.6435011087932844 radians

    // compute the new x and y positions for the pupil using vector components based on the angle and distance
    const x = Math.cos(angle) * distance; //resolves the vector onto the X-axis. x = cos(0.6435) * 10 = 8
    const y = Math.sin(angle) * distance; //resolves the vector onto the Y-axis. y = sin(0.6435) * 10 = 6

    return { x, y }; // returning the new position of the pupil
  };
  const pupilPosition = calculatePupilPosition();
  return (
    <div
      ref={eyeRef}
      className="w-12 h-12 shadow-lg/50 bg-white border-3 border-[#216c58] rounded-full flex items-center justify-center"
    >
      <div
        className="w-4 h-4 bg-[#216c58] rounded-full"
        style={{
          transform: `translate(${pupilPosition.x}px, ${pupilPosition.y}px)`,
        }}
      />
    </div>
  );
};

export default EyeBall;
