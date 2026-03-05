"use client";
import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useCartStore, useSearchItem } from "@/store/posStore";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { BarcodeIcon } from "lucide-react";
import { Input } from "../ui/input";
import z from "zod";
import { barCodeSchema } from "@/lib/validations";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

const SearchBar = () => {
  // const searchParams = useSearchParams();
  // const pathname = usePathname();
  // const { replace } = useRouter();
  const { setbarcode, savedBarcode } = useSearchItem();
  const [openDialog, setopenDialog] = useState(false);
  const currentCartState = useCartStore.getState().products;
  const quantityUpdate = useCartStore.getState().increaseQuantity;
  const form = useForm<z.infer<typeof barCodeSchema>>({
    resolver: zodResolver(barCodeSchema),
    defaultValues: {
      barcode: "",
    },
  });
  const onSubmit = (values: z.infer<typeof barCodeSchema>) => {
    const filter = currentCartState.filter((str) => {
      return str.productBarcode === values.barcode;
    });

    const as = filter.map((product) => {
      if (values.barcode === product.productBarcode) {
        savedBarcode.push(values.barcode);
        setbarcode(values.barcode);
        // quantityUpdate(product.id);
        setopenDialog(false);
        form.reset();
        toast.success("Product added to cart");
        return product;
      } else {
        toast.error(`Item not available with barcode: ${values.barcode}`);
        return product;
      }
    });
    as.filter((s) => quantityUpdate(s.id));
    console.log("as", as);
  };
  return (
    <div className="flex flex-row bg-white rounded-lg">
      <Dialog open={openDialog} defaultOpen={openDialog}>
        <form>
          <DialogTrigger asChild>
            <div className="px-2 py-1 cursor-pointer flex flex-row space-x-2 items-center">
              <BarcodeIcon
                color="#216c58"
                onClick={() => setopenDialog(true)}
              />
            </div>
          </DialogTrigger>
          <DialogContent className="bg-[#f7f5dc] border-none">
            <DialogHeader>
              <DialogTitle className="text-3xl self-center font-medium ">
                Enter product barcode
              </DialogTitle>
              <DialogDescription className="text-md text-[#5f5f5f] font-normal">
                Having trouble scanning? You can manually enter the product
                barcode below to add it to your cart.
              </DialogDescription>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} method="POST">
                  <FormField
                    control={form.control}
                    name="barcode"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="ml-5 mr-5 h-15 ">
                            <Input
                              {...field}
                              type="text"
                              className="text-xl h-full border-gray-500"
                              placeholder="Enter barcode..."
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="w-full flex flex-row space-x-4 mt-4">
                    <DialogClose asChild>
                      <button
                        className="w-full py-2 px-4 rounded-md cursor-pointer border-1 border-gray-500 text-[#216c58]"
                        onClick={() => setopenDialog(false)}
                      >
                        Cancel
                      </button>
                    </DialogClose>
                    <button
                      type="submit"
                      className="w-full py-2 px-4 rounded-md cursor-pointer text-white bg-[#216c58]"
                    >
                      Confirm
                    </button>
                  </div>
                </form>
              </Form>
            </DialogHeader>
          </DialogContent>
        </form>
      </Dialog>
      {/* <Input
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        id="barcode"
        type="text"
        placeholder={placeholder}
        defaultValue={barcode}
      /> */}
    </div>
  );
};

export default SearchBar;
