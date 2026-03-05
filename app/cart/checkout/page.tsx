"use client";

import OrderedItems from "@/components/cart/checkout/OrderedItems";
import OrderSummary from "@/components/cart/checkout/OrderSummary";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useCheckoutStore } from "@/store/posStore";
import { useNeedReceiptStore, useUserDataStore } from "@/store/userStore";
import {
  ArrowLeftIcon,
  Contact2Icon,
  CreditCardIcon,
  HouseIcon,
  PhilippinePesoIcon,
  Wallet2Icon,
} from "lucide-react";
import { redirect } from "next/navigation";

import Link from "next/link";
import React from "react";

const page = () => {
  const status = useNeedReceiptStore((state) => state.receiptStatus);
  const newData = useUserDataStore((state) => state.newData);
  const checkedoutProd = useCheckoutStore((state) => state.products);

  const total = checkedoutProd.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return checkedoutProd.length <= 0 ? (
    redirect("/cart")
  ) : (
    <>
        <div className="p-5">
          <Link href={"/cart"}>
            <ArrowLeftIcon className="w-auto"/>
          </Link>
          <p className="text-center">Checkout</p>
        </div>
        <div className="h-screen max-w-full w-[900] mx-auto">
          <div className="flex flex-row py-2 px-2 m-2 rounded-md bg-[#fff]">
            <HouseIcon size={35} color="#1e6b55" />
            <div className="flex flex-col mx-2">
              <p className="sm:text-sm md:text-md font-semibold">Store Name</p>
              <p className="text-xs text-[#5f5f5f] uppercase">
                puregold minimart - ho
              </p>
            </div>
          </div>
          {status === "No" ? (
            <h1></h1>
          ) : (
            <div className="flex flex-row py-2 px-2 m-2 rounded-md bg-[#fff]">
              <Contact2Icon size={35} color="#1e6b55" />
              <div className="flex flex-col mx-2">
                <p className="sm:text-sm md:text-md font-semibold">
                  Contact Person
                </p>
                <p className="text-xs text-[#5f5f5f] uppercase">
                  {newData.firstName}&nbsp; {newData.lastName},&nbsp;
                  {newData.contactNum}
                </p>
              </div>
            </div>
          )}

          <div className="flex flex-row py-2 px-2 m-2 rounded-md bg-[#fff]">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="hover:no-underline">
                  <div className="w-full flex flex-row cursor-pointer">
                    <PhilippinePesoIcon size={35} color="#1e6b55" />
                    <div className="flex flex-col justify-start content-start items-start align-start mx-2">
                      <p className="sm:text-sm md:text-md font-semibold">
                        Store Name
                      </p>
                      <p className="text-xs text-[#AF3E3E] capitalize">
                        tap to select payment method
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg text-[#1e6b55] capitalize ">
                    Select your payment
                  </p>
                </AccordionContent>
                <AccordionContent>
                  <Button className="w-full flex px-4 cursor-pointer justify-start text-[#000] items-start bg-[#fff] hover:bg-[#f5f5f5]">
                    <div className="flex flex-row">
                      <Wallet2Icon color="#1e6b55" />
                      <div className="flex flex-col mx-2">
                        <p className="sm:text-sm md:text-md font-medium capital">
                          Puregold Wallet
                        </p>
                      </div>
                    </div>
                  </Button>
                </AccordionContent>
                <AccordionContent>
                  <Button className="w-full flex px-4 cursor-pointer justify-start text-[#000] items-start bg-[#fff] hover:bg-[#f5f5f5]">
                    <div className="flex flex-row">
                      <CreditCardIcon color="#1e6b55" />
                      <div className="flex flex-col mx-2">
                        <p className="sm:text-sm md:text-md font-medium capital">
                          Credit / Debit Card
                        </p>
                      </div>
                    </div>
                  </Button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <OrderedItems />
          <OrderSummary />
          <div className="w-full flex flex-col p-3 rounded-lg bg-[#fff]">
            <p className="flex justify-center text-[#5f5f5f]">
              By placing order, you agree to all&nbsp;{" "}
              <Link href={"/termscon"} className="text-[#216c58]">
                Terms & Conditions
              </Link>
            </p>
            <div className="flex flex-row grid grid-cols-2 ">
              <div>
                <p className="text-md text-[#5f5f5f]">Total</p>
                <p className="text-xl font-semibold text-[#216c58]">
                  ₱{total.toFixed(2)}
                </p>
                <p className="text-md text-[#5f5f5f] ">
                  VAT & other fees included{" "}
                </p>
              </div>
              <div className="grid justify-items-center self-center">
                <Button className="w-60 bg-[#206b57] cursor-pointer hover:bg-[#1b4e41] h-13">
                  Pay Now
                </Button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default page;
