"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { PlusSquareIcon, Trash2Icon, XCircleIcon } from "lucide-react";
import {
  useCartStore,
  useCheckoutStore,
  useSearchItem,
} from "@/store/posStore";
import CheckoutFooter from "./CheckoutFooter";

const ItemCard = () => {
  const { decreaseQuantity, increaseQuantity, products } = useCartStore();
  const { savedBarcode } = useSearchItem();
  const [image, setImage] = useState(false);
  const filteredProducts = products.filter((product) => {
    return savedBarcode.includes(product.productBarcode);
  });
  console.log("savedBarcode", savedBarcode);
  console.log("filtered", filteredProducts);
  const total = filteredProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <>
      <div className="min-h-full">
        <main className="flex flex-grow overflow-y-hidden">
          <div className="mb-25 w-screen grid flex grid-cols-1 items-start justify-center gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 overflow-y-auto">
            {/* overflow-y-scroll*/}

            {filteredProducts.map((products) => (
              <div
                className="mb-auto w-full h-full flex flex-row rounded-lg bg-[#fff]"
                key={products.id}
              >
                <div className="shrink-0">
                  <Image
                    key={products.id}
                    src={image ? "/images/image-not-found.png" : products.imageUrl}
                    width={100}
                    height={100}
                    alt="image"
                    objectFit="cover"
                    className="object-contain h-full w-[100]"
                    onError={() => setImage(true)}
                  />
                </div>

                <div className="w-full flex flex-col ">
                  <div className="py-5 px-0">
                    <h3 className="md:text-lg text-[#5e5e5e] break-all">
                      {products.productName}
                    </h3>
                    <span className="md:text-md font-bold text-[#216c58]">
                      ₱{products.price}
                    </span>
                  </div>
                  {/* <p className="text-sm pt-5 ml-5 mr-5">{products.description}</p> */}
                  <div className="flex m-3 mt-auto">
                    <div className="sm:space-x-3 md:space-x-5 space-x-5 flex flex-row items-center">
                      <Button
                        onClick={() =>
                          decreaseQuantity(products.id, products.productBarcode)
                        }
                        variant="outline"
                        size="icon"
                        className="size-8 text-[#b94350] border-[#b94350] cursor-pointer hover:bg-[#b94350]"
                      >
                        <Trash2Icon className="" />
                      </Button>
                      <span className="text-sm font-bold text-gray-700 dark:text-white">
                        {products.quantity === 0
                          ? (products.quantity = 1)
                          : products.quantity}
                      </span>
                      <Button
                        onClick={() => increaseQuantity(products.id)}
                        variant="outline"
                        size="icon"
                        className="size-8 text-[#276857] border-[#276857] cursor-pointer hover:bg-[#78d0b9]"
                      >
                        <PlusSquareIcon className="" />
                      </Button>
                    </div>
                    <div className="flex ml-auto p-3 justify-end items-end break-all">
                      <p className="text-sm text-[#5e5e5e]">
                        Total:&nbsp;
                        <span className="text-sm text-[#216c58] font-bold">
                          ₱{(products.quantity * products.price).toFixed(2)}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
        <footer className="fixed w-full bg-[#f8faf7] bottom-0 ">
          <CheckoutFooter
            scannedProduct={filteredProducts}
            grandTotal={total}
            totalItems={filteredProducts.length}
          />
        </footer>
      </div>
    </>
  );
};
export default ItemCard;
