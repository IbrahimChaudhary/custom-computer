import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import BuidForm from "./forms/build-form";
import { buildT } from "@/types/build-type";
import { nanoid } from "nanoid";
import { AddToBuildForm } from "./forms/add-to-build-form";
type AddToBuildDialogPropsT = {
  builds: buildT[];
  partType: string;
  partId: string;
};

export default function AddToBuildDialog({
  builds,
  partId,
  partType,
}: AddToBuildDialogPropsT) {
  console.log("in the add to build modal : ", builds);
  return (
    <>
      <div>
        <div>
          {builds?.map((build) => {
            return (
              <AddToBuildForm
                key={nanoid()}
                partId={partId}
                buildName={build.name}
                partType={partType}
                buildId={build._id.toString()}
              ></AddToBuildForm>
            );
          })}
        </div>
        <Dialog>
          <DialogTrigger>
            <Button>create a new build</Button>
          </DialogTrigger>
          <DialogContent>
            <BuidForm></BuidForm>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
