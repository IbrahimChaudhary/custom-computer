"use client";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import changeBuildStatus from "@/lib/change-build-status";
import { toast } from "@/components/ui/use-toast";
import { Button } from "./ui/button";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Span } from "next/dist/trace";
import placeOrderAction from "@/actions/place-order-action";
export default function Checkout({ buildID }: { buildID: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const handleCheckout = async () => {
    setIsLoading(true);
    const res = await changeBuildStatus(buildID, "checkout");
    const res2 = await placeOrderAction(buildID);
    console.log(res2, "33333333333333333333333");
    if (!res) {
      toast({
        title: "cant place your order right now",
      });
      setIsLoading(false);
      return;
    }

    toast({
      title: "your order is placed",
    });
    setIsLoading(false);
  };
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button className="text-white hover:opacity-80 hover:scale-95 transition-all ">
            checkout
          </Button>
        </DialogTrigger>
        <DialogContent>
          <div className="text-white">
            DEVELOPER: I will move the user to stripe checkout page when I get
            the stripe account for now use place order button to simulate the
            checkout
          </div>
          <Button
            className="text-white hover:opacity-80 hover:scale-95 transition-all "
            onClick={handleCheckout}
          >
            {isLoading ? (
              <Loader2 className="animate-spin h-6 w-6 stroke-white"></Loader2>
            ) : (
              <span>place order</span>
            )}
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
