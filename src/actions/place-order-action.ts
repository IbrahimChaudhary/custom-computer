"use server";

import Admin from "@/schemas/server/admin-server-schema";
import { currentUser } from "@clerk/nextjs";
import connectdb from "@/lib/connectdb";
export default async function placeOrderAction(buildID: string) {
  console.log("place order build ID 3333333333333333333333", buildID);
  try {
    await connectdb();
    const user = await currentUser();
    const admin = await Admin.findOne({ name: "Aaron" });
    console.log("admin43333333333333333333", admin);
    if (!admin) {
      await Admin.create({ name: "Aaron" });
    }
    await Admin.findOneAndUpdate(
      { name: "Aaron" },
      {
        $push: {
          orders: {
            customerEmail: user?.emailAddresses[0].emailAddress,
            buildID: buildID,
          },
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
}
