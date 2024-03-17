"use server";
import connectdb from "@/lib/connectdb";

export default async function StorageAction() {
  try {
    await connectdb();
    // start
  } catch (error) {
    console.log("ERROR IN THE StorageAction: ", error);
  }
}
