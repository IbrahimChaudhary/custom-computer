import showAllBuildsOfAUser from "@/lib/showAllBuildsOfAUser";
import { buildT } from "@/types/build-type";
import { nanoid } from "nanoid";
import Link from "next/link";
import BuildCard from "@/components/build-card";
import CreateANewBuildPage from "@/components/create-a-new-build-page";
export const metadata = {
  title: "builds",
};
export default async function Build() {
  const allBuilds = await showAllBuildsOfAUser();
  return (
    <>
      <div className="pt-20 w-full max-w-[1440px] px-8 mt-8">
        <div className="w-full  flex justify-between  ">
          <h1 className="text-7xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-semibold">
            Your builds
          </h1>

          <CreateANewBuildPage />
        </div>
        <div className="flex justify-start">
          <div className="flex flex-wrap items-center justify-center  gap-16 mt-20 mb-4">
            {allBuilds?.map((build: buildT) => {
              return (
                <BuildCard
                  buildId={build._id.toString()}
                  name={build.name}
                  key={nanoid()}
                  allowDeleteBuild={true}
                  allowEditBuild={true}
                />
              );
            })}
          </div>
        </div>
        <div>
          {/* TODO: put a map to the build cards */}
          {/* <BuildCard></BuildCard> */}
        </div>
      </div>
    </>
  );
}
