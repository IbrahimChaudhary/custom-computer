"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import GradientText from "./gradient-text";
import { MoveRight } from "lucide-react";

type PopularBuildsCardPropsT = {
  status: string;
  name: string;
  description: string;
  price: number;
  buildLink: string;
  children: React.ReactNode;
  imageLink: string;
};

export function PopularBuildsCard({
  status,
  name,
  description,
  price,
  buildLink,
  imageLink,
  children,
}: PopularBuildsCardPropsT) {
  return (
    <div className="flex flex-col w-[80%]  ">
      <BackgroundGradient className="  rounded-[22px]  p-4 sm:p-10 bg-zinc-900 flex gap-48 items-center ">
        <Image
          src={imageLink}
          alt="jordans"
          height="30"
          width="400"
          className="object-contain"
        />
        <div className="flex flex-col w-full  ">
          <div className="flex justify-between mb-8 flex-row-reverse items-center">
            <div className="  border-mono border-b-2 text-mono text-3xl font-medium">
              {price}$
            </div>
            <p className="text-6xl font-bold italic ">{status}</p>
          </div>
          <GradientText size="text-3xl">{name}</GradientText>

          <div className="w-[80%] flex flex-col gap-4 mt-4">{children}</div>

          <button className="bg-blue-600 font-bold hover:opacity-80 transition-all hover:scale-105  gap-3 flex justify-center items-center mt-12 py-2">
            view build
            <MoveRight className="w-[30px] h-[30px] "></MoveRight>
          </button>
        </div>
      </BackgroundGradient>
    </div>
  );
}
