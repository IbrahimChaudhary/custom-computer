"use server";
import connectdb from "@/lib/connectdb";

export default async function GraphicsCardAction() {
  try {
    await connectdb();
    // start
  } catch (error) {
    console.log("ERROR IN THE GraphicsCardForm: ", error);
  }
}
