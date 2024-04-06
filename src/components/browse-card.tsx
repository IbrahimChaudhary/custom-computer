"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { PlusCircle } from "lucide-react";
import AddToBuildDialog from "./add-to-build-dialog";
import MoreInfoDialog from "./more-info-dialog";
import { Info } from "lucide-react";
import { buildT } from "@/types/build-type";
import getDefaultImage from "@/lib/give-default-image";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
type buildCardPropsT = {
  image?: string;
  partId: string;
  price: number;
  name: string;
  category: string;
  builds: buildT[];
};
export default function BrowseCard({
  image,
  price,
  name,
  category,
  builds,
  partId,
}: buildCardPropsT) {
  return (
    <>
      <CardContainer className="inter-var pt-0  " containerClassName=" ">
        <CardBody className=" relative group/card flex flex-col gap-3 hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  justify-between  h-[450px] rounded-xl p-6 border w-[300px]  ">
          <div className="flex justify-between w-full gap-3">
            <div className="flex flex-col w-full  ">
              <CardItem
                as="p"
                translateZ="60"
                className=" text-md font-extrabold text-transparent pb-4   max-w-sm mt-2 dark:text-neutral-300  bg-gradient-to-r bg-clip-text from-blue-600 via-green-500 to-indigo-400 inline-block"
              >
                {category}
              </CardItem>

              <CardItem
                translateZ="50"
                className="text-xl mb-4 font-bold w-full  text-white"
              >
                {name}
              </CardItem>
            </div>

            <CardItem
              as="p"
              translateZ="60"
              className=" text-[#7ED348]  text-lg max-w-sm mt-2 dark:text-neutral-300"
            >
              {price}$
            </CardItem>
          </div>
          <CardItem translateZ="100" className="w-full   ">
            {/* <CardItem className="inline-block absolute bottom-1 right-2">
              <Dialog>
                <DialogTrigger>
                  <Info />
                </DialogTrigger>
                <DialogContent>
                  <MoreInfoDialog></MoreInfoDialog>
                </DialogContent>
              </Dialog>
            </CardItem> */}
            <Image
              src={getDefaultImage(category)}
              height="300"
              width="300"
              className="h-48   object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center w-full gap-6 flex-row-reverse ">
            <CardItem className="flex">
              <Dialog>
                <DialogTrigger>
                  <Info />
                </DialogTrigger>
                <DialogContent>
                  <MoreInfoDialog
                    partId={partId}
                    withImage={false}
                    category={category}
                  ></MoreInfoDialog>
                </DialogContent>
              </Dialog>
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className=" py-2 w-full rounded-xl bg-black flex dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              <Dialog>
                <DialogTrigger className="w-full rounded-lg">
                  <Button
                    variant="secondary"
                    className="w-full rounded-lg flex gap-3 flex-row-reverse"
                  >
                    add to build
                    <PlusCircle className="ml-2" size="20" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <AddToBuildDialog
                    partId={partId}
                    partType={category}
                    builds={builds}
                  ></AddToBuildDialog>
                </DialogContent>
              </Dialog>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </>
  );
}
