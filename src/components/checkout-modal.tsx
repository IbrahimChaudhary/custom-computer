"use client";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import changeBuildStatus from "@/lib/change-build-status";
import { toast } from "@/components/ui/use-toast";
import { Button } from "./ui/button";
export default function Checkout({ buildID }: { buildID: string }) {
  const handleCheckout = async () => {
    const res = await changeBuildStatus(buildID, "checkout");
    if (!res) {
      toast({
        title: "cant place your order right now",
      });
      return;
    }

    toast({
      title: "your order is placed",
    });
  };
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button>go to checkout</Button>
        </DialogTrigger>
        <DialogContent>
          <div className="text-black">
            some info about checkout item , total price and all
          </div>
          <Button onClick={handleCheckout}>place order</Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
