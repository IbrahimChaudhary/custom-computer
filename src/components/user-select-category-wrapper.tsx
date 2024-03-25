"use client";
import SelectCategory from "./select-category";
import { useAdminStore } from "@/stores/admin-store";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "./ui/dropdown-menu";
export default function UserSelectCategoryWrapper() {
  const userSelectedCategory = useAdminStore(
    (state) => state.userSelectedCategory
  );
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button className="flex justify-center items-center">
            {userSelectedCategory}
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <SelectCategory purpose="userFiltration"></SelectCategory>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
