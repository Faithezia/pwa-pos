import { dummyProducts } from "@/lib/dummyData";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type CartStore = {
  products: Product[];
  grandTotal: number;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string, barcode: string) => void;
};

export type CheckoutStore = {
  products: Product[];
  reset: () => void;
  getItems: (items: Product[]) => void;
};

export type SearchItem = {
  barcode: string;
  savedBarcode: string[];
  setbarcode: (code: string) => void;
  removeBarcode: (code: string) => void;
};

const calculateGrandTotal = (products: Product[]): number => {
  return products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      products: dummyProducts,
      grandTotal: calculateGrandTotal(dummyProducts),

      increaseQuantity: (id: string) =>
        set((state) => {
          const updatedProducts = state.products.map((product) =>
            product.id === id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          );
          return {
            products: (get().products = updatedProducts),
            grandTotal: calculateGrandTotal(updatedProducts),
          };
        }),

      decreaseQuantity: (id: string, barcode: string) =>
        set((state) => {
          console.log("barcode in decrease", barcode);
          const barcodeRemover = useSearchItem.getState().removeBarcode;
          const updatedProducts = state.products.map((product) =>
            product.id === id && product.quantity > 0
              ? { ...product, quantity: product.quantity - 1 }
              : product
          );
          updatedProducts.forEach((product) => {
            if (product.id === id && product.quantity === 0) {
              barcodeRemover(barcode);
            }
          });
          const filteredProducts = updatedProducts.filter(
            (product) => product.quantity >= 0
          );
          return {
            products: (get().products = filteredProducts),
            grandTotal: calculateGrandTotal(filteredProducts),
          };
        }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export const useCheckoutStore = create<CheckoutStore>()((set, get, state) => ({
  products: [],
  reset: () => set(state.getInitialState()),
  getItems: (products) =>
    set((state) => ({
      products: [...state.products, ...products],
    })),
}));

export const useSearchItem = create<SearchItem>()(
  persist(
    (set, get) => ({
      barcode: "",
      savedBarcode: [],
      removeBarcode: (barcodeToRemove) => {
        set((state) => ({
          savedBarcode: (get().savedBarcode = state.savedBarcode.filter(
            (code) => code !== barcodeToRemove
          )),
        }));
      },
      setbarcode: (code: string) =>
        set((state) => ({ barcode: (state.barcode = code) })),
    }),
    {
      name: "barcode-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

// useBoundStore.persist.clearStorage() clearing pesist store
