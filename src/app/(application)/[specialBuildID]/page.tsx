import connectdb from "@/lib/connectdb";
import SpecialBuilds from "@/schemas/server/special-builds-schema";
import giveComponent from "@/actions/give-component";
import GradientText from "@/components/gradient-text";
import BrowseCard from "@/components/browse-card";
import { DialogContent, Dialog, DialogTrigger } from "@/components/ui/dialog";
import BuidForm from "@/components/forms/build-form";
import { Button } from "@/components/ui/moving-border";
import { Plus } from "lucide-react";
import mongoose from "mongoose";
import AddSpecialBuildBtnWrapper from "@/components/add-special-build-btn";

export default async function SpecialBuild({ params }: { params: any }) {
  await connectdb();
  console.log(params.specialBuildID, "params----------");

  const res = await SpecialBuilds.findOne({
    _id: params.specialBuildID,
  });
  console.log(res, "specialBuild");
  const handleAGivePart = async (partId: string, partType: string) => {
    const part = await giveComponent(partId, partType);

    return part;
  };
  return (
    <>
      <div className="mt-24 ">
        <div className="flex justify-between w-full">
          <GradientText size="text-6xl">{res.buildName}</GradientText>
          <AddSpecialBuildBtnWrapper>
            <Dialog>
              <DialogTrigger>
                <Button
                  borderRadius="0.8rem"
                  className="   text-black text-bold  py-3 px-6 flex gap-2 border-none"
                >
                  make it yours
                  <Plus />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <BuidForm
                  isWithPayload={true}
                  payload={JSON.parse(JSON.stringify(res.parts))}
                ></BuidForm>
              </DialogContent>
            </Dialog>
          </AddSpecialBuildBtnWrapper>
        </div>
        <div className="flex gap-6 flex-wrap">
          {res?.parts.map(async (part: any) => {
            let item = await handleAGivePart(part.partId, part.partType);
            return (
              <BrowseCard
                partId={item._id.toString()}
                name={item.name}
                price={item.price}
                category={part.partType}
                key={item._id.toString()}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
