import giveCheckoutBuilds from "@/lib/give-checkout-builds";
import { nanoid } from "nanoid";
export default async function Tracking() {
  const checkoutBuilds = await giveCheckoutBuilds();

  return (
    <>
      <div className="flex w-full gap-2 flex-col text-black  justify-center items-center">
        <div className=" font-bold text-white text-4xl mb-4">your orders</div>
        <div className="flex w-full justify-around border-y py-4 bg-black text-white ">
          <div>build name</div>
          <div className="">status</div>
          <div className="">amount</div>
        </div>
        {checkoutBuilds
          ? checkoutBuilds?.map((item) => {
              return (
                <div
                  className="flex justify-around border-y py-4 w-full "
                  key={nanoid()}
                >
                  <div className="text-white">{item.builds.name}</div>
                  <div className="text-yellow-500 font-bold">
                    {item.builds.status}
                  </div>
                  <div className="text-green-500">2000$</div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
}
