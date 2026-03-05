import ItemCard from "@/components/cart/ItemCard";
import SearchBar from "@/components/cart/SearchBar";
import Link from "next/link";
import { ArrowLeftIcon, BuildingIcon, ScanQrCodeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function Page() {
  return (
    <>
      <div className="w-full h-full flex flex-col relative flex justify-between">
        <header className="h-16 w-full flex items-center relative justify-between px-5 space-x-10 bg-[#216c58]">
          <Link href={"/kyc"} className="w-auto">
            <ArrowLeftIcon color="#fff" />
          </Link>
          {/* <BarcodeScanner /> */}
          <SearchBar />
        </header>
        <div className="flex flex-col px-5 py-1 bg-[#216c58]">
          <p className="text-xl text-[#fff] leading-none">Item Cart</p>
          <div className="flex flex-row">
            <BuildingIcon color="#fff" />
            <p className="text-md text-gray-300 uppercase">
              puregold minimart - ho
            </p>
          </div>
        </div>
        <div className="w-full bg-[#fcf10b]">
          <div className="p-2">
            <Button
              variant="link"
              className="bg-transparent cursor-pointer hover:bg-[#f1e828] hover:no-underline"
            >
              <ScanQrCodeIcon />
              <span>Self Checkout</span>
            </Button>
          </div>
        </div>
        <ItemCard />
      </div>
    </>
  );
}
