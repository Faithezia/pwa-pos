"use client";

import { userSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { useNeedReceiptStore, useUserDataStore } from "@/store/userStore";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { ArrowLeftIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

const KycForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      contactNum: "",
    },
  });

  const { saveData } = useUserDataStore();
  const status = useNeedReceiptStore((state) => state.receiptStatus);

  // ✅ Handle redirect properly in client component
  React.useEffect(() => {
    if (status === "No") {
      router.push("/");
    }
  }, [status, router]);

  const onSubmit = (values: z.infer<typeof userSchema>) => {
    if (values.contactNum || values.firstName || values.lastName) {
      saveData(values);
      toast.success("User's information saved!");
      router.push("/cart"); // ✅ FIXED
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-[#216c58] shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 text-[#fff]"
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
                  {...field}
                  type="text"
                  className="border-2 border-[#fff] bg-[#f7f5dc] text-[#000]"
                  placeholder="First Name..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
                  {...field}
                  type="text"
                  className="border-2 border-[#fff] bg-[#f7f5dc] text-[#000]"
                  placeholder="Last Name..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
                  {...field}
                  type="number"
                  className="border-2 border-[#fff] bg-[#f7f5dc] text-[#000]"
                  placeholder="Contact Number..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="w-full flex flex-row justify-between">
          <Link
            href="/"
            className="flex flex-row px-2 py-1 text-sm items-center rounded-lg cursor-pointer bg-[#f7f5dc] hover:bg-[#d5d4c5] text-[#000] font-semibold"
          >
            <ArrowLeftIcon className="mr-2" />
            BACK
          </Link>

          <Button
            type="submit"
            className="cursor-pointer bg-[#f7f5dc] hover:bg-[#d5d4c5] text-[#000] font-semibold"
          >
            NEXT
            <ArrowRight />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default KycForm;
