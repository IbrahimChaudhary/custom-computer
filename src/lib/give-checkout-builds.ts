"use server";

import { currentUser } from "@clerk/nextjs";
import connectdb from "./connectdb";
import User from "@/schemas/server/user-server-schema";

export default async function giveCheckoutBuilds() {
  try {
    const user = await currentUser();
    await connectdb();
    const res = await User.aggregate([
      {
        $match: {
          userEmail: user?.emailAddresses[0].emailAddress,
        },
      },
      {
        $unwind: "$builds",
      },
      {
        $match: {
          "builds.status": "checkout",
        },
      },
    ]);
    if (!res) {
      return false;
    }
    return res;
  } catch (error) {
    console.log("ERROR WHILE FETCHING CHECKOUT BUILDS : ", error);
  }
}
