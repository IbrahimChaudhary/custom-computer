import Link from "next/link";
export default function Sidebar() {
  return (
    <>
      <div className="w-[20vw] border-r h-screen ">
        <div className="h-[10%] bg-[#7ED348] text-black text-2xl font-bold flex pl-6 items-center">
          Admin_Name
        </div>
        <div className="flex flex-col gap-4 text-xl pl-2 pt-8  items-start font-semibold text-[#7ED348]">
          <Link
            className="hover:bg-[#7ED348] transition-all ease-linear hover:text-black rounded-lg py-2 px-4"
            href="/dashboard"
          >
            dashboard
          </Link>
          <Link
            className="hover:bg-[#7ED348] transition-all ease-linear hover:text-black rounded-lg py-2 px-4"
            href="/"
          >
            back to website
          </Link>
          <Link
            className="hover:bg-[#7ED348] transition-all ease-linear hover:text-black rounded-lg py-2 px-4"
            href="/dashboard/orders"
          >
            orders
          </Link>
          <Link
            className="hover:bg-[#7ED348] transition-all ease-linear hover:text-black rounded-lg py-2 px-4"
            href="/dashboard/add-parts"
          >
            add parts
          </Link>
          <Link
            className="hover:bg-[#7ED348] transition-all ease-linear hover:text-black rounded-lg py-2 px-4"
            href="/dashboard/parts"
          >
            parts
          </Link>
        </div>
      </div>
    </>
  );
}
