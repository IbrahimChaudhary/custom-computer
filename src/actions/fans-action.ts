import connectdb from "@/lib/connectdb";

export default async function FansAction() {
  try {
    await connectdb();
    // start
  } catch (error) {
    console.log("ERROR IN THE FansForm: ", error);
  }
}
