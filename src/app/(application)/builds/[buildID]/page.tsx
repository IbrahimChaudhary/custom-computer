import giveAllPartsInAbuild from "@/lib/give-all-parts-in-a-build";
import PutInCart from "@/components/put-in-cart";
import RemoveFromCart from "@/components/remove-from-cart";
export default async function SingleBuild({ params }: { params: any }) {
  const parts = await giveAllPartsInAbuild(params.buildID);
  console.log("partsssssss", parts);
  // console.log(params?.buildID, "form the individual bubild page");
  return (
    <>
      <div className="mt-44">
        <div className="text-blue-500">{params?.buildID}</div>

        <div>
          {/* <button>delete build</button> */}
          {/* <button>browse components</button> */}
        </div>
        <div>
          {parts.map((part: any) => {
            return <div>{JSON.stringify(part)}</div>;
          })}
        </div>

        <div>
          {/* TODO:show some kind of performance thing based on the components so
          far */}
        </div>
        <PutInCart buildID={params.buildID} />
        <RemoveFromCart buildID={params.buildID} />

        <div>
          {/* <button>checkout</button> TODO:this will open up a modal in which there is some final price or confirmation about the product and after that you are going to go to the stripe page */}
        </div>
      </div>
    </>
  );
}
