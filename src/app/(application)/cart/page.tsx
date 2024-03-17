import giveInCartBuilds from "@/lib/give-in-cart-builds";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Checkout from "@/components/checkout-modal";
import checkoutModal from "@/components/checkout-modal";
import RemoveFromCart from "@/components/remove-from-cart";
export default async function Cart() {
  const inCartBuilds = await giveInCartBuilds();
  console.log("$$$$$$$$$$$", inCartBuilds);
  return (
    <>
      <div className="mt-40">
        <div>some heading here</div>
        <div>
          {inCartBuilds
            ? inCartBuilds.map((item) => {
                return (
                  <div className="border p-8 bg-green-600 flex gap-4">
                    <div>{item.builds.name}</div>
                    <Link href="/browse">
                      <Button>browse more</Button>
                    </Link>
                    <Checkout buildID={item.builds._id.toString()} />
                    <RemoveFromCart
                      buildID={item.builds._id.toString()}
                    ></RemoveFromCart>
                  </div>
                );
              })
            : null}
        </div>
        <div>
          TODO:there is again a build card there but this time with a button
          which goes to checkout , browse , remmove from cart buttons
        </div>
      </div>
    </>
  );
}
