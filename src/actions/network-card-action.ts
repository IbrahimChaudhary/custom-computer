import connectdb from "@/lib/connectdb";

export default async function NetworkCardAction() {
  try {
    await connectdb();
    // start
  } catch (error) {
    console.log("ERROR IN THE NetworkCardForm: ", error);
  }
}
