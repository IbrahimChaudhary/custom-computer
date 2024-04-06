"use client";
import { buildT } from "@/types/build-type";
import BrowseCard from "./browse-card";
import { useAdminStore } from "@/stores/admin-store";
import React from "react";

type BrowseCardWrapperProps = {
  data: any[];
  allbuids: buildT[];
};
export default function BrowseCardWrapper({
  data,
  allbuids,
}: BrowseCardWrapperProps) {
  const userSelectedItem = useAdminStore((state) => state.userSelectedCategory);
  console.log(userSelectedItem);

  const filteredData = data?.filter(
    (item: any) => userSelectedItem === "none" || item.type === userSelectedItem
  );
  return (
    <>
      <div className="flex gap-x-6 flex-wrap w-full justify-between  items-center">
        {filteredData
          ? filteredData?.map((item: any) => {
              return (
                <BrowseCard
                  partId={item._id.toString()}
                  builds={allbuids}
                  name={item.name}
                  price={item.price}
                  category={item.category}
                  key={item._id}
                  image={item.image}
                />
              );
            })
          : null}
      </div>
    </>
  );
}
