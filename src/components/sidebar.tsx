import Link from "next/link";
export default function Sidebar() {
  return (
    <>
      <div className="w-[20vw] bg-blue-500 h-screen">
        <div className="flex flex-col gap-4">
          <Link href="/dashboard">dashboard</Link>
          <Link href="/">back to website</Link>
          <Link href="/dashboard/orders">orders</Link>
          <Link href="/dashboard/add-parts">products</Link>
        </div>
      </div>
    </>
  );
}
