"use client";
import { Button } from "./ui/button";
import putInCartAction from "@/actions/put-in-cart-action";
export default function PutInCart({ buildID }: {buildID:string}) {
  return (
    <>
      <div>
        <Button onClick={()=>putInCartAction(buildID)}>put in cart</Button>
      </div>
    </>
  );
}
