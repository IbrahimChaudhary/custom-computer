import { create } from "zustand";
import { CategoriesT } from "@/types/categories-type";
export type AdminStoreT = {
  adminSelectedCategory: CategoriesT["categories"];
  userSelectedCategory: CategoriesT["categories"];
  adminSelectedCategoryForFilter: CategoriesT["categories"];
  adminPassword: string;

  setAdminSelectedCategory: (
    selectedCategory: CategoriesT["categories"]
  ) => void;
  setUserSelectedCategory: (
    selectedCategory: CategoriesT["categories"]
  ) => void;
  setAdminSelectedCategoryForFilter: (
    selectedCategory: CategoriesT["categories"]
  ) => void;
  setAdminPassword: (password: string) => void;
};
export const useAdminStore = create<AdminStoreT>((set) => ({
  adminPassword: "none",
  adminSelectedCategory: "none",
  adminSelectedCategoryForFilter: "none",
  userSelectedCategory: "none",

  setAdminPassword: (password) => set(() => ({ adminPassword: password })),

  setUserSelectedCategory: (selectedPackage) =>
    set(() => ({ userSelectedCategory: selectedPackage })),

  setAdminSelectedCategoryForFilter: (selectedPackage) =>
    set(() => ({ adminSelectedCategoryForFilter: selectedPackage })),

  setAdminSelectedCategory: (selectedCategory) =>
    set(() => ({ adminSelectedCategory: selectedCategory })),
}));
