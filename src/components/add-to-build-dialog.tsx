import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import BuidForm from "./forms/build-form";
import { buildT } from "@/types/build-type";
import { nanoid } from "nanoid";

export default function AddToBuildDialog({ builds }: { builds: buildT[] }) {
  console.log("in the add to build modal : ", builds);
  return (
    <>
      <div>
        <div>
          {builds?.map((build) => {
            return (
              <div className="text-red-500" key={nanoid()}>
                {build.name}
              </div>
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
