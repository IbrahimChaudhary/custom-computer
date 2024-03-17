import BuildCard from "@/components/build-card";

import showAllBuildsOfAUser from "@/lib/showAllBuildsOfAUser";
import { buildT } from "@/types/build-type";
export default async function Build() {
  // const allBuilds = await showAllBuildsOfAUser();
  return (
    <>
      <div className="pt-20 bg-purple-500">
        {/* <button>create a new build</button> */}
        {/* {allBuilds?.map((build: buildT) => {
          return <div key={nanoid()}>{build.name}</div>;
        })} */}
        <div>
          {/* TODO: put a map to the build cards */}
          {/* <BuildCard></BuildCard> */}
        </div>
      </div>
    </>
  );
}
