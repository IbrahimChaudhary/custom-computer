'use server'
import connectdb from "./connectdb";
import { auth } from "@clerk/nextjs";
import User from "@/schemas/server/user-server-schema";
export default async function showAllBuildsOfAUser() {
  try {
    const user = auth();
    console.log("testing user Email : ", user?.sessionClaims?.email);
    await connectdb();
    const res = await User.findOne(
      { userEmail: user.sessionClaims?.email },
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
