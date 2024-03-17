"use server";
import connectdb from "./connectdb";
import { ObjectId } from "mongodb";
import User from "@/schemas/server/user-server-schema";
import Case from "@/schemas/server/case-server-schema";
import { currentUser } from "@clerk/nextjs";
export default async function giveAllPartsInAbuild(buildId: string) {
  try {
    await connectdb();

    const user = await currentUser();
    let allPartsArray: any = [];
    const builds = await User.aggregate([
      {
        $match: {
          userEmail: user?.emailAddresses[0].emailAddress,
        },
      },
      {
        $unwind: "$builds", // Unwind the builds array
      },
      {
        $match: {
          "builds._id": new ObjectId(buildId),
        },
      },
      {
        $project: {
          build: "$builds", // Project the matched build
        },
      },
    ]);
    if (builds.length === 0) {
      return false;
    }
    const findCasePart = async (id: string) => {
      const res = await Case.findOne({ _id: new ObjectId(id) });
      await allPartsArray.push(res);
      console.log(allPartsArray, "finding case ---------------0000000");
    };

    const parts = builds[0].build.parts;

    const loopOverBuildParts = async () => {
      await Promise.all(
        parts.map(async (element: any) => {
          if (element.partType === "case") {
            await findCasePart(element.partId);
          }
        })
      );
    };

    await loopOverBuildParts();

    return allPartsArray;
  } catch (error) {
    console.log("ERROR WHILE FETCHING PARTS OF A BUILD :  ", error);
  }
}
