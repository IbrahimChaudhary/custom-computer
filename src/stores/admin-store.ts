import { create } from "zustand";
export const useAdminStore = create((set) => ({
  adminSelectedCategory: "none",

  //   toggleSearchWindow: () =>
  //     set((state: any) => ({ isSearchActive: !state.isSearchActive })),

  setAdminSelectedCategory: (selectedCategory: string) =>
    set((state: any) => ({ adminSelectedCategory: selectedCategory })),
}));

// changeCurrentPackage: (selectedPackage: string) =>
//     set((state: any) => ({ currentPackage: selectedPackage })),
