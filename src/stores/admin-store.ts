import { create } from "zustand";
import { CategoriesT } from "@/types/categories-type";
export type AdminStoreT = {
  adminSelectedCategory: CategoriesT["categories"];
  userSelectedCategory: CategoriesT["categories"];
  adminSelectedCategoryForFilter: CategoriesT["categories"];

  setAdminSelectedCategory: (
    selectedCategory: CategoriesT["categories"]
  ) => void;
  setUserSelectedCategory: (
    selectedCategory: CategoriesT["categories"]
  ) => void;
  setAdminSelectedCategoryForFilter: (
    selectedCategory: CategoriesT["categories"]
  ) => void;

};
export const useAdminStore = create<AdminStoreT>((set) => ({
  adminSelectedCategory: "none",
  adminSelectedCategoryForFilter: "none",
  userSelectedCategory: "none",

  setUserSelectedCategory: (selectedPackage) =>
    set(() => ({ userSelectedCategory: selectedPackage })),

  setAdminSelectedCategoryForFilter: (selectedPackage) =>
    set(() => ({ adminSelectedCategoryForFilter: selectedPackage })),
  

  setAdminSelectedCategory: (selectedCategory) =>
    set(() => ({ adminSelectedCategory: selectedCategory })),
}));

