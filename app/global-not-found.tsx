// Import global styles and fonts
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Image from "next/image";
import EyeBall from "@/components/EyeBall";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen">
          {/* <div className="relative p-30 w-96 bg-[url('/icons/aling_puring_logo.png')] bg-cover bg-center">
            <div className="w-full flex flex-row ml-11 mb-5 space-x-7 justify-end">
              <EyeBall />
              <EyeBall />
            </div>
          </div> */}
          {/* <div className="flex flex-row"> */}
          <Image
            src={"/icons/aling_puring_logo.png"}
            alt="Logo"
            width={150}
            height={150}
          />
          {/* <Image
              src={"/app_logo.png"}
              alt="Logo"
              width={150}
              height={150}
            />
          </div> */}
          <h1 className="text-2xl text-[#8C1007] font-semibold">
            404 Error - Page not found
          </h1>
          <p className="text-md text-[#8C1007]">This page does not exist.</p>
        </div>
      </body>
    </html>
  );
}
