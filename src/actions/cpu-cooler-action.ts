import connectdb from "@/lib/connectdb";

export default async function CpuCoolerAction() {
  try {
    await connectdb();
    // start
  } catch (error) {
    console.log("ERROR IN THE CpuCoolerAction: ", error);
  }
}
