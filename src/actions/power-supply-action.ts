"use server";
import connectdb from "@/lib/connectdb";

export default async function powerSupplyAction() {
  try {
    await connectdb();
    // start
  } catch (error) {
    console.log("ERROR IN THE powerSupplyForm: ", error);
  }
}
