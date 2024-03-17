import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import AddToBuildDialog from "./add-to-build-dialog";
import MoreInfoDialog from "./more-info-dialog";
import { buildT } from "@/types/build-type";
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
      <div className="border p-8 bg-green-400">
        <div>{image}</div>
        <div>{name}</div>
        <div>{type}</div>
        <div>{price}</div>
        <div className="flex bg-green-500 gap-8">
          <Dialog>
            <DialogTrigger>
              <Button>more info</Button>
            </DialogTrigger>
            <DialogContent>
              <MoreInfoDialog></MoreInfoDialog>
            </DialogContent>
          </Dialog>
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
        </div>
      </div>
    </>
  );
}
