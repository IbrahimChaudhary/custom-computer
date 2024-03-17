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
    const allPartsArray = [];
    const builds = await User.aggregate([
      {
        $match: {
          userEmail: "ilyasghulam35@gmail.com",
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
    return builds[0].build.parts;
  } catch (error) {
    console.log("ERROR WHILE FETCHING PARTS OF A BUILD :  ", error);
  }
}
