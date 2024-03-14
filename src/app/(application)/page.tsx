import React from "react";
import Hero from "@/components/hero";
// import { HeaderMenu } from "@/components/nav2";
import HomeSectionOne from "@/components/home-section-one";
import HomeSectionTwo from "@/components/home-section-two";

export default async function Home() {
  return (
    <>
      <div className="w-full relative -z-1 ">
        <Hero />
        <HomeSectionOne />
        <HomeSectionTwo />
      </div>
    </>
  );
}
