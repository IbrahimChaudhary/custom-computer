import React from "react";
import { Hero } from "@/components/hero";
import Link from "next/link";
import Content from "@/components/content";
import HomeSectionOne from "@/components/home-section-one";
import HomeSectionTwo from "@/components/home-section-two";
const words = [
  {
    text: "Welcome",
    className: "text-white text-5xl lg:text-6xl",
  },
  {
    text: "to",
    className: "text-white text-5xl lg:text-6xl",
  },
  {
    text: "Coderush",
    className: "text-primary text-5xl lg:text-6xl",
  },
  {
    text: "Website",
    className: "text-white text-5xl lg:text-6xl",
  },
];
export default async function Home() {
  return (
    <>
      <div className="w-full relative -z-1 flex flex-col justify-center items-center  ">
        <Hero images={["/bg-image-2.jpg"]} className="h-screen w-full">
          <div className="text-white z-20 flex flex-col items-center px-8">
            <h1 className="font-bold text-4xl sm:text-5xl text-center md:hidden">
              Welcome to <span className="text-primary">CodeRush</span> Website
            </h1>
            <Content
              words={words}
              cursorClassName="bg-yellow-500 hidden md:block"
            />
            <p className="text-center font-semibold sm:text-lg md:text-2xl xl:w-2/3">
              Empowering Your Shopping Experience: Where Convenience Meets
              Quality. Explore Limitless Possibilities at [Ecommerce Store Name]
              - Your Gateway to Seamless Shopping Satisfaction.
            </p>
            {/* <Link
                href="/"
                className="rounded-full mt-10 font-bold sm:text-lg md:text-xl px-8 py-3 border border-white bg-transparent text-black  dark:border-white relative group transition duration-200"
                >
                <div className="rounded-full absolute bottom-0 right-0 bg-primary h-full w-full -z-10 group-hover:-bottom-2 group-hover:-right-2 transition-all duration-200" />
                <span className="relative">Explore Our Products</span>
              </Link> */}
          </div>
        </Hero>
        <div className="max-w-[1440px] w-full flex justify-center items-center">
          <HomeSectionTwo />
        </div>
        <div className="max-w-[1440px] w-full flex justify-center items-center">
          <HomeSectionOne />
        </div>
      </div>
    </>
  );
}
