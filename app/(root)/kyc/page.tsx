"use client";
import KycForm from "@/components/kyc/KycForm";
import { ArrowLeftIcon } from "lucide-react";
import React from "react";

const Kyc = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center h-screen">
        <div className="w-full max-w-xl self-center">
          <KycForm />
        </div>
      </div>
    </>
  );
};

export default Kyc;
