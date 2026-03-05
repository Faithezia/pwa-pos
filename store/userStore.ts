import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type NeedReceiptStore = {
  receiptStatus: string;
  setStatus: (receipt: string) => void;
};

export type UserDataStore = {
  newData: {
    firstName: string;
    lastName: string;
    contactNum: string;
  };
  saveData: (data: {
    contactNum: string;
    firstName: string;
    lastName: string;
  }) => void;
};

// store the user's data receipt
export const useNeedReceiptStore = create<NeedReceiptStore>()(
  persist(
    (set, get) => ({
      receiptStatus: "",
      setStatus: (receipt: string) =>
        set({ receiptStatus: (get().receiptStatus = receipt) }),
    }),
    {
      name: "receipt-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export const useUserDataStore = create<UserDataStore>()(
  persist(
    (set, get) => ({
      newData: {
        contactNum: "",
        firstName: "",
        lastName: "",
      },
      saveData: (data: {
        contactNum: string;
        firstName: string;
        lastName: string;
      }) => set({ newData: (get().newData = data) }),
    }),
    {
      name: "user-data-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
