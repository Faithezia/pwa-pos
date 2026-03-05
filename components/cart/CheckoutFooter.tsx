import React from "react";
import { Button } from "../ui/button";
import { LucideScanQrCode, QrCodeIcon } from "lucide-react";
import Link from "next/link";
import { useCheckoutStore } from "@/store/posStore";
import { get } from "http";

interface Props {
  scannedProduct: Product[];
  grandTotal: number;
  totalItems: number;
}

const CheckoutFooter = ({ grandTotal, totalItems, scannedProduct }: Props) => {
  const { getItems, reset } = useCheckoutStore();
  const onsubmit = () => {
    reset();
    getItems(scannedProduct);
  };
  return (
    <div className="flex flex-row justify-between p-5 items-center">
      <div className="flex flex-col">
        <p className="text-sm leading-none text-[#5e5e5e]">Subtotal</p>
        <span className="text-xl text-[#216c58] leading-none">
          ₱{grandTotal.toFixed(2)}
        </span>
      </div>
      <div className="flex flex-col">
        <Button
          variant="default"
          size="icon"
          className="size-12 cursor-pointer bg-[#fcf10b] rounded-full shadow-xl/20 hover:bg-[#e1d930]"
        >
          <QrCodeIcon color="#216c58" />
        </Button>
      </div>
      <div className="flex flex-col">
        <p className="text-sm text-[#5e5e5e]">{totalItems} items</p>
        <Link
          hidden={totalItems > 0 ? false : true}
          onClick={() => onsubmit()}
          href={"/cart/checkout"}
          className="py-1 px-2 m-0 rounded-lg cursor-pointer bg-[#216c58] text-[#fff] hover:bg-[#1c493c]"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};
export default CheckoutFooter;
