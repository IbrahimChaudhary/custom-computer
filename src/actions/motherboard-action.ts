import connectdb from "@/lib/connectdb";

export default async function MotherboardAction() {
  try {
    await connectdb();
    // start
  } catch (error) {
    console.log("ERROR IN THE MotherboardForm: ", error);
  }
}
