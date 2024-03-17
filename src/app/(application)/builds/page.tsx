import showAllBuildsOfAUser from "@/lib/showAllBuildsOfAUser";
import { buildT } from "@/types/build-type";
import { nanoid } from "nanoid";
import Link from "next/link";
import BuildCard from "@/components/build-card";
import CreateANewBuildPage from "@/components/create-a-new-build-page";
export default async function Build() {
  const allBuilds = await showAllBuildsOfAUser();
  return (
    <>
      <div className="pt-20 bg-purple-500">
        <CreateANewBuildPage />
        <div>saved builds</div>
        <div className="flex gap-4 my-8">
          {allBuilds?.map((build: buildT) => {
            return (
              <Link href={`/builds/${build._id}`} key={nanoid()}>
                <BuildCard buildId={build._id.toString()} name={build.name} />
              </Link>
            );
          })}
        </div>
        <div>
          {/* TODO: put a map to the build cards */}
          {/* <BuildCard></BuildCard> */}
        </div>
      </div>
    </>
  );
}
