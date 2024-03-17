
import connectdb from "./connectdb";
import mongoose from "mongoose";
import Case from "@/schemas/server/case-server-schema";
export default async function giveAllParts() {
  try {
    await connectdb();
    const res = await Case.find({});

    return res;
  } catch (error) {
    console.log("error in finding parts", error);
  }
}
