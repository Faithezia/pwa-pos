"use client";
import { userSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { useNeedReceiptStore, useUserDataStore } from "@/store/userStore";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { styleText } from "util";
import { ArrowLeftIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

const KycForm = () => {
  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      contactNum: "",
    },
  });
  const { newData, saveData } = useUserDataStore();
  const onSubmit = (values: z.infer<typeof userSchema>) => {
    if (values.contactNum || values.firstName || values.lastName) {
      saveData(values);
      toast.success("User's information saved!");
      redirect("/cart");
    } else {
      toast.error("Something went wrong");
    }
  };

  const status = useNeedReceiptStore((state) => state.receiptStatus);

  return status === "No" ? (
    redirect("/")
  ) : (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-[#216c58] shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 text-[#fff]"
          method="POST"
        >
          <p className="xs:text-xl sm:text-xl md:text-2xl lg:text-3xl py-4 flex justify-center capitalize">
            Please fill the form
          </p>
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="sm:text-sm md:text-md lg:text-lg text-[#f5f5f5]">
                  First Name
                </FormLabel>
                <FormControl>
                  <Input
                    // onChange={(e) => setFirstName(e.target.value)}
                    {...field}
                    type="text"
                    className="border-2 border-[#fff] bg-[#f7f5dc] text-[#000]"
                    placeholder="First Name..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="sm:text-sm md:text-md lg:text-lg text-[#f5f5f5]">
                  Last Name
                </FormLabel>
                <FormControl>
                  <Input
                    // onChange={(e) => setLastName(e.target.value)}
                    {...field}
                    type="text"
                    className="border-2 border-[#fff] bg-[#f7f5dc] text-[#000]"
                    placeholder="Last Name..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="contactNum"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="sm:text-sm md:text-md lg:text-lg text-[#f5f5f5]">
                  Contact Number
                </FormLabel>
                <FormControl>
                  <Input
                    // onChange={(e) => setcontactNum(parseInt(e.target.value))}
                    {...field}
                    type="number"
                    className="border-2 border-[#fff] bg-[#f7f5dc] text-[#000]"
                    placeholder="Contact Number..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          {/* <Link
          rel="preload"
          href={"/cart"}
          className="py-2 px-4 rounded-md cursor-pointer text-white bg-[#216c58]"
        >
          Next
        </Link> */}
          <div className="w-full flex flex-row justify-between">
            <Link
              href={"/"}
              className="flex flex-row px-2 py-1 text-sm items-center rounded-lg cursor-pointer bg-[#f7f5dc] hover:bg-[#d5d4c5] text-[#000] font-semibold"
            >
              <ArrowLeftIcon className="mr-2"/>
              BACK
            </Link>
            <Button
              onClick={() => onsubmit}
              type="submit"
              className="cursor-pointer bg-[#f7f5dc] hover:bg-[#d5d4c5] text-[#000] font-semibold"
            >
              NEXT
              <ArrowRight />
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default KycForm;
