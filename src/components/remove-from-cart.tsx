"use client";
import removeFromCartAction from "@/actions/remove-from-cart-action";
import { Button } from "./ui/button";
import putInCartAction from "@/actions/put-in-cart-action";
export default function RemoveFromCart({ buildID }: { buildID: string }) {
  return (
    <>
      <div>
        <Button onClick={() => removeFromCartAction(buildID)}>
          remove from cart
        </Button>
      </div>
    </>
  );
}
