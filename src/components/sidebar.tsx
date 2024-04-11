"use client";
import Link from "next/link";
import Image from "next/image";
import { BarChartBig } from "lucide-react";
import { usePathname } from "next/navigation";
import { PlusCircle } from "lucide-react";
import { Computer } from "lucide-react";
import { ChevronLeft } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  return (
    <>
      <div className="w-[20vw] border-r h-screen max-h-screen ">
        <div className="h-[13%] text-black text-2xl flex   font-bold  pl-6 items-center border-b-2 ">
          <Image
            src={"/logo.png"}
            alt="custom pc builder"
            width={140}
            height={140}
          />
        </div>
        <div className="flex flex-col justify-between h-[87%]">
          <div className="flex flex-col gap-4 text-xl pl-2 pt-8  items-start font-semibold text-white pr-3">
            <Link
              className={`hover:bg-[#7ED348] ${
                isActive("/dashboard") ? "bg-mono text-black" : null
              } transition-all ease-linear justify-end items-center hover:text-black w-full rounded-lg py-2 pl-6  flex flex-row-reverse gap-4 `}
              href="/dashboard"
            >
              dashboard
              <BarChartBig></BarChartBig>
            </Link>

            <Link
              className={`hover:bg-[#7ED348] ${
                isActive("/dashboard/add-parts") ? "bg-mono text-black" : null
              } transition-all ease-linear justify-end items-center hover:text-black w-full rounded-lg py-2 pl-6  flex flex-row-reverse gap-4 `}
              href="/dashboard/add-parts"
            >
              add parts
              <PlusCircle></PlusCircle>
            </Link>
            <Link
              className={`hover:bg-[#7ED348] ${
                isActive("/dashboard/parts") ? "bg-mono text-black" : null
              } transition-all ease-linear justify-end items-center hover:text-black w-full rounded-lg py-2 pl-6  flex flex-row-reverse gap-4 `}
              href="/dashboard/parts"
            >
              all parts
              <Computer></Computer>
            </Link>
            <Link
              className={`hover:bg-[#7ED348] ${
                isActive("/dashboard/orders") ? "bg-mono text-black" : null
              } transition-all ease-linear justify-end items-center hover:text-black w-full rounded-lg py-2 pl-6  flex flex-row-reverse gap-4 `}
              href="/dashboard/orders"
            >
              orders
              <BarChartBig></BarChartBig>
            </Link>
          </div>
          <Link
            className={`hover:bg-[#7ED348] my-8 w-[90%] mx-2 font-bold   transition-all ease-linear justify-end items-center hover:text-black  rounded-lg py-2 pl-6  flex flex-row-reverse gap-4 `}
            href="/dashboard"
          >
            back to website
            <ChevronLeft></ChevronLeft>
          </Link>
        </div>
      </div>
    </>
  );
}
