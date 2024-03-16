import connectdb from "@/lib/connectdb";

export default async function CpuAction() {
  try {
    await connectdb();
    // start
  } catch (error) {
    console.log("ERROR IN THE CpuActionForm : ", error);
  }
}
