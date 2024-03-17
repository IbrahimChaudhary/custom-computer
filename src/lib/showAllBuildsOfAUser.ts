import connectdb from "./connectdb";
import { currentUser } from "@clerk/nextjs";
import User from "@/schemas/server/user-server-schema";
export default async function showAllBuildsOfAUser() {
  try {
    await connectdb();
    const user = await currentUser();
    const res = await User.findOne(
      { userEmail: user?.emailAddresses[0].emailAddress },
      { builds: 1, _id: 0 }
    );
    if (!res) {
      console.log("cant retrieve builds ");
      return;
    }
    return res.builds;
  } catch (error) {
    console.log("ERROR WHILE RETRIEVING A USER BUILDS : ", error);
  }
}
