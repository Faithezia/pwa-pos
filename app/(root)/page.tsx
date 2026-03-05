"use client";
import EyeBall from "@/components/EyeBall";
import { PopupDialog } from "@/components/PopupDialog";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className=" flex space-x-4 mb-10">
          <div className="flex flex-row items-center">
            <p className="text-[#216c58] text-shadow-lg/50 text-6xl">PUREG</p>
            <EyeBall />
            <p className="text-[#216c58] text-shadow-lg/50 text-6xl">
              LD&nbsp;
            </p>
            <p className="text-[#216c58] text-shadow-lg/50 text-6xl">P</p>
            <EyeBall />
            <p className="text-[#216c58] text-shadow-lg/50 text-6xl">S</p>
          </div>
        </div>
        <div className="w-full max-w-[333px] shadow-lg/50 p-10 rounded-sm flex flex-col items-center bg-[#216c58]">
          <Image
            src="/app_logo.png"
            width={80}
            height={80}
            priority={true}
            alt="Picture of the author"
            className="rounded-sm mb-8"
          />
          <PopupDialog />
        </div>
      </div>
    </>
  );
};

export default page;
