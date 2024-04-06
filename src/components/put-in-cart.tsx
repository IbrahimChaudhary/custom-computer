"use client";
import { Button } from "./ui/button";
import { toast } from "@/components/ui/use-toast";
import putInCartAction from "@/actions/put-in-cart-action";
export default function PutInCart({ buildID }: { buildID: string }) {
  const putInCartHandler = async () => {
    const res = await putInCartAction(buildID);
    if (!res) {
      toast({
        title: "cant put in cart  , try again",
      });
      return;
    }
    toast({
      title: "build put in cart successfully",
    });
  };
  return (
    <>
      <div>
        <Button onClick={putInCartHandler}>put in cart</Button>
      </div>
    </>
  );
}
