"use server";
import connectdb from "@/lib/connectdb";

export default async function MemoryAction() {
  try {
    await connectdb();
    // start
  } catch (error) {
    console.log("ERROR IN THE MemoryForm: ", error);
  }
}
