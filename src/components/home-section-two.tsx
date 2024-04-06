"use client ";
import Image from "next/image";
import GradientText from "./gradient-text";
import { PersonStanding } from "lucide-react";
import { Button } from "./ui/moving-border";
export default function HomeSectionTwo() {
  return (
    <>
      <div className="flex w-[90%] justify-between items-center mt-20  ">
        <div className="flex flex-col w-[50%] gap-8  ">
          <GradientText size="text-7xl leading-[1.25]">
            Ask Questions Or Share Builds on our Forum
          </GradientText>
          <button className="w-[50%] bg-mono rounded-md flex justify-center items-center font-semibold py-2 text-lg gap-2 hover:opacity-90 hover:scale-110 transition-all ">
            Go to Forum
            <PersonStanding className="w-8 h-8" />
          </button>
        </div>
        <Image
          src="https://res.cloudinary.com/gamma1199/image/upload/v1712402205/forum_ysedaq.webp"
          alt="bg-image-2"
          width="500"
          height="500"
        />
      </div>
    </>
  );
}
{
  /*`use client`;
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import GradientText from "./gradient-text";
import { Button } from "./ui/moving-border";
import { Share2 } from "lucide-react";

export default function HomeSectionTwo() {
  return (
    <LampContainer className="w-full h-[50%]">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" flex flex-col w-full  "
      >
        <div className="flex  w-full flex-col gap-4 mb-16 justify-center items-center ">
          <GradientText size="text-6xl">
            Ask Questions or Share Builds
          </GradientText>
          <GradientText size="text-6xl">On Our Forum</GradientText>
        </div>
        <div className="w-full flex justify-center ">
          <Button
            borderRadius="0.8rem"
            className=" w-full  text-white text-bold  py-3 px-6 flex gap-2 border-none"
          >
            Go to Forum
            <Share2 />
          </Button>
        </div>
      </motion.h1>
    </LampContainer>
  );
}*/
}
