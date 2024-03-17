"use client";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import BuidForm from "./forms/build-form";
export default function CreateANewBuildPage() {
  return (
    <>
      <div>
        <Dialog>
          <DialogTrigger>
            <Button>create a new b build</Button>
          </DialogTrigger>
          <DialogContent>
            <BuidForm></BuidForm>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
