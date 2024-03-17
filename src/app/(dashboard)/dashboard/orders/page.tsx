import AdminOrdersTable from "@/components/admin-orders-table";
import giveAllUsersCheckoutBuilds from "@/lib/give-all-users-checkout-builds";
export default async function Orders() {
  const checkoutBuilds = await giveAllUsersCheckoutBuilds();
  // console.log("***************", checkoutBuilds);

  return (
    <>
      <div className="bg-red-700 w-full">
        <AdminOrdersTable allBuilds={checkoutBuilds ? JSON.parse(JSON.stringify(checkoutBuilds)) : null} />
      </div>
    </>
  );
}
