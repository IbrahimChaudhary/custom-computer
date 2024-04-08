import { AdminVerification } from "@/components/admin-verification";
import getOrders from "@/actions/get-orders";
import StatCard from "@/components/stat-card";
import GradientText from "@/components/gradient-text";
export default async function Dashboard() {
  const data = await getOrders();

  const shippedOrdersCount = data.filter(
    (order: any) => order.status === "shipped"
  ).length;

  const checkedOrdersCount = data.filter(
    (order: any) => order.status === "checkout"
  ).length;

  const approvedOrdersCount = data.filter(
    (order: any) => order.status === "approved"
  ).length;

  const rejectedOrdersCount = data.filter(
    (order: any) => order.status === "rejected"
  ).length;

  return (
    <>
      <div className="bg-slate-950 w-full px-8 pt-3">
        <GradientText size="text-6xl">Stats</GradientText>
        {/* <AdminVerification /> */}

        <div className="w-full flex justify-center items-center mt-16">
          <div className="flex gap-6 ">
            <StatCard
              look="bg-yellow-400"
              title="shipped"
              value={shippedOrdersCount.toString()}
            />
            <StatCard
              title="Checked out"
              look="bg-blue-800"
              value={checkedOrdersCount.toString()}
            />
            <StatCard
              look="bg-lime-500"
              title="Approved"
              value={approvedOrdersCount.toString()}
            />
            <StatCard
              look="bg-red-700"
              title="Rejected"
              value={rejectedOrdersCount.toString()}
            />
          </div>
        </div>
      </div>
    </>
  );
}
