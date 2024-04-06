import Link from "next/link";
import NavDD from "./dropdowns/nav-dd";
import { SignInButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
export default async function Nav() {
  const user = await currentUser();
  const linkClasses = "hover:text-mono transition-colors";
  return (
    <>
      <div className="flex fixed z-20 w-full    justify-around items-center   py-4 backdrop-blur-[126px] border-b bg-opacity-20 border-b-slate-700  ">
        <Image
          alt="custom-computers"
          src="/logo.png"
          width={130}
          height={130}
          className=""
        />
        <div className="flex gap-16">
          <Link href="/" className={`${linkClasses}`}>
            home
          </Link>
          <Link href="/forum" className={`${linkClasses}`}>
            {" "}
            forum
          </Link>
          <Link href="/builds" className={`${linkClasses}`}>
            builds
          </Link>
          <Link href="/browse" className={`${linkClasses}`}>
            {" "}
            browse
          </Link>
        </div>
        <div>
          {user ? <NavDD></NavDD> : <SignInButton>login/signup</SignInButton>}
        </div>
      </div>
    </>
  );
}
