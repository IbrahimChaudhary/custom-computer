import { PopularBuildsCard } from "./popular-builds-card";
import { LampContainer } from "./ui/lamp";
export default function HomeSectionOne() {
  return (
    <>
      <div className=" flex flex-col  py-24 w-full  justify-center items-center bg-slate-950 ">
        <div className="text-6xl mb-16 font-semibold ">Popular Builds</div>
        <div className="flex gap-8">
          <PopularBuildsCard></PopularBuildsCard>
          <PopularBuildsCard></PopularBuildsCard>
          <PopularBuildsCard></PopularBuildsCard>
        </div>
      </div>
    </>
  );
}
