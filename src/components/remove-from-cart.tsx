"use client";
import removeFromCartAction from "@/actions/remove-from-cart-action";
import { Button } from "./ui/button";
import putInCartAction from "@/actions/put-in-cart-action";
import { toast } from "@/components/ui/use-toast";

export default function RemoveFromCart({ buildID }: { buildID: string }) {
  const handleRemoveFromCart = async () => {
    const res = await removeFromCartAction(buildID);
    if (!res) {
      toast({
        title: "cant remove build from cart",
      });
      return;
    }
    toast({
      title: "build removed from cart",
    });
  };
  return (
    <>
      <div>
        <Button onClick={handleRemoveFromCart}>remove from cart</Button>
      </div>
    </>
  );
}
