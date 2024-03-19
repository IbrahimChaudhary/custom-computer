import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import AddToBuildDialog from "./add-to-build-dialog";
import MoreInfoDialog from "./more-info-dialog";
import { buildT } from "@/types/build-type";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
type buildCardPropsT = {
  image?: string;
  partId: string;
  price: number;
  name: string;
  type: string;
  builds: buildT[];
};
export default function BrowseCard({
  image,
  price,
  name,
  type,
  builds,
  partId,
}: buildCardPropsT) {
  console.log(partId, type, "in the browser card ......");

  return (
    <>
      <CardContainer className="inter-var pt-0  " containerClassName="">
        <CardBody className=" relative group/card flex flex-col gap-3 hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]    h-auto rounded-xl p-6 border  ">
          <div className="flex justify-between w-full">
            <div className="flex flex-col w-full ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold w-full absolute  text-white"
              >
                {name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 absolute text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {type}
              </CardItem>
            </div>

            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500  text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {price}$
            </CardItem>
          </div>
          <CardItem translateZ="100" className="w-full   ">
            <Image
              src="/bg-image-1.jpeg"
              height="500"
              width="500"
              className="h-60 w-full  object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center w-full ">
            <CardItem>
              <Dialog>
                <DialogTrigger>
                  <Button>more info</Button>
                </DialogTrigger>
                <DialogContent>
                  <MoreInfoDialog></MoreInfoDialog>
                </DialogContent>
              </Dialog>
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              <Dialog>
                <DialogTrigger>
                  <Button>add to build</Button>
                </DialogTrigger>
                <DialogContent>
                  <AddToBuildDialog
                    partId={partId}
                    partType={type}
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

//  <div className="border p-8 bg-green-400">
//    <div>{image}</div>
//    <div>{name}</div>
//    <div>{type}</div>
//    <div>{price}</div>
//    <div className="flex bg-green-500 gap-8">
//      <Dialog>
//        <DialogTrigger>
//          <Button>more info</Button>
//        </DialogTrigger>
//        <DialogContent>
//          <MoreInfoDialog></MoreInfoDialog>
//        </DialogContent>
//      </Dialog>

//    </div>
//  </div>;
