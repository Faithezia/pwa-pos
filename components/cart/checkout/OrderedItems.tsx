"use client";
import { useCheckoutStore } from "@/store/posStore";
import Image from "next/image";
import React from "react";
// const OrderedItems = ({ id,description,imageUrl,price,productBarcode,productName,quantity,createdAt }: Product) =>

const OrderedItems = () => {
  const { products } = useCheckoutStore();
  const uniqueItems = [...new Set(products)];
  console.log(uniqueItems);
  return (
    <>
      <h3 className="m-2 px-2 pt-2 text-[#5f5f5f] capitalize">ordered items</h3>
      {uniqueItems.map((items) => (
        <div className="m-2 flex flex-row rounded-lg bg-[#fff]" key={items.id}>
          <div className="shrink-0">
            <Image
              key={items.id}
              src={items.imageUrl}
              width={80}
              height={80}
              alt="image"
              className="object-contain h-full w-[80]"
            />
          </div>
          <div className="w-full flex flex-col">
            <div className="pt-3 pb-0">
              <h3 className="md:text-lg text-[#5e5e5e] break-all">
                {items.productName}
              </h3>
              <div className="flex flex-row justify-between">
                <span className="md:text-md font-bold text-[#216c58]">
                  ₱{items.price}
                </span>
                <span className="text-sm text-[#216c58] mr-6">
                  Quantity: {items.quantity}
                </span>
              </div>
            </div>
            <hr className="leading-none" />
            {/* <p className="text-sm pt-5 ml-5 mr-5">{products.description}</p> */}
            <div className="flex m-3 mt-auto">
              <div className="flex ml-auto p-3 justify-end items-end break-all">
                <p className="text-sm text-[#5e5e5e]">
                  Total:&nbsp;
                  <span
                    className="text-sm text-[#216c58] font-bold"
                    key={items.id}
                  >
                    ₱{(items.price * items.quantity).toFixed(2)}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OrderedItems;
