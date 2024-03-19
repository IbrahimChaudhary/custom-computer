"use client";
import { FlipVertical } from "lucide-react";
import BuidForm from "./forms/build-form";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/components/ui/use-toast";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

import { Button } from "./ui/button";
import deleteBuildAction from "@/actions/delete-build-action";
import { EditBuildForm } from "./forms/edit-build-form";
type BuiddCardPropsT = {
  name: string;
  buildId: string;
};
export default function BuildCard({ name, buildId }: BuiddCardPropsT) {
  console.log(buildId, "in the build card");
  const handleEdit = () => {
    console.log("handling edit");
  };

  const handleDelete = async () => {
    console.log("handling delete");
    const res = await deleteBuildAction(buildId);
    if (!res) {
      toast({
        title: "cant delete build  , try again",
      });
    }
    toast({
      title: "build deleted successfully",
    });
  };
  return (
    <>
      <div className="border border-white/[0.2] flex  flex-col items-start max-w-sm mx-auto p-4  relative h-[20rem]">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />
        <EvervaultCard text={name} />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">...</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem onSelect={handleDelete}>delete</DropdownMenuItem>

            <Dialog>
              <DialogTrigger>
                <Button>edit</Button>
              </DialogTrigger>
              <DialogContent>
                <EditBuildForm></EditBuildForm>
              </DialogContent>
            </Dialog>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
