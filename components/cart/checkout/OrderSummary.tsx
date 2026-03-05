"use client";
import { useCheckoutStore } from "@/store/posStore";
import React from "react";

const OrderSummary = () => {
  const checkedoutProd = useCheckoutStore((state) => state.products);

  const total = checkedoutProd.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <div className="m-2">
      <h3 className="px-2 pt-2 text-[#5f5f5f] capitalize">Order Summary</h3>
      <div className="my-2 p-3 flex flex-col bg-[#fff]">
        <div className="flex flex-row rounded-lg">
          <div className=" w-full flex flex-row justify-between p-2 rounded-lg bg-[#f5f5f5]">
            <p className="text-lg text-[#555d58]">Sub-Total</p>
            <p className="text-lg font-medium">₱{total.toFixed(2)}</p>
          </div>
        </div>
        <div className="flex flex-row rounded-lg">
          <div className=" w-full flex flex-row justify-between p-2 rounded-lg bg-[#f5f5f5]">
            <p className="text-lg text-[#555d58]">Concierge Fee</p>
            <p className="text-lg font-medium">₱0.00</p>
          </div>
        </div>
        <div className="flex flex-row rounded-lg">
          <div className=" w-full flex flex-row justify-between p-2">
            <p className="text-lg text-[#555d58] font-semibold">
              Total Discount
            </p>
            <p className="text-lg font-medium">₱0.00</p>
          </div>
        </div>
        <div className="flex flex-row rounded-lg bg-[#A3DC9A]">
          <div className=" w-full flex flex-row justify-between p-2">
            <p className="text-xl text-[#324d44] font-semibold">
              Total Payment
            </p>
            <p className="text-xl font-medium">₱{total.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
