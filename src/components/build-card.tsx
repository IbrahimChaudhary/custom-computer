import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
type buildCardPropsT = {
  image?: string;
  price: number;
  name: string;
  type: string;
};
export default function BuildCard({
  image,
  price,
  name,
  type,
}: buildCardPropsT) {
  return (
    <>
      <div className="border p-8 bg-green-400">
        <div>{image}</div>
        <div>{name}</div>
        <div>{type}</div>
        <div>{price}</div>
        <div className="flex bg-green-500">
          <Dialog>
            <DialogTrigger>
              <button>more info</button>
            </DialogTrigger>
            <DialogContent></DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger>
              <button>add to build</button>
            </DialogTrigger>
            <DialogContent></DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
