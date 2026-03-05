import { z } from "zod";

export const productSchema = z.object({
  productName: z.string().trim().min(1, "Product name is required"),
  productBarcode: z.string().trim().min(1, "Barcode is required"),
  quantity: z.number().int().positive().min(1, "Quantity must be at least 1"),
  price: z
    .number()
    .int()
    .positive()
    .min(0.01, "Price should be greater than 0"),
});

export const barcodeScheme = z.object({
  barcodeString: z.string().trim().min(1, "This field only accepts text"),
});

export const userSchema = z.object({
  firstName: z.string().trim().min(1, { message: "Enter your first name" }),
  lastName: z.string().trim().min(1, { message: "Enter your last name" }),
  contactNum: z.string().trim().min(1, { message: "Enter valid number" }),
  // contactNum: z
  //   .number()
  //   .int()
  //   .positive()
  //   .min(1, "Please enter valid contact Number."),
});

export const barCodeSchema = z.object({
  barcode: z.string().trim().min(1, { message: "Enter valid barcode" }),
});
