import Link from "next/link";
import NavDD from "./dropdowns/nav-dd";
import { SignInButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
export default async function Nav() {
  const user = await currentUser();
  return (
    <>
      <div className="flex fixed z-20 w-full    justify-around items-center   py-4 backdrop-blur-[126px] border-b bg-opacity-20 border-b-slate-700  ">
        <div>custom_computers</div>
        <div className="flex gap-4">
          <Link href="/"> home</Link>
          <Link href="/forum"> forum</Link>
          <Link href="/builds">builds</Link>
          <Link href="/browse"> browse</Link>
        </div>
        <div>
          {user ? <NavDD></NavDD> : <SignInButton>login/signup</SignInButton>}
        </div>
      </div>
    </>
  );
}
