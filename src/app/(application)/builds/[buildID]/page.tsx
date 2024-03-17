import giveAllPartsInAbuild from "@/lib/give-all-parts-in-a-build";
export default async function SingleBuild({ params }: { params: any }) {
  const parts = await giveAllPartsInAbuild(params.buildID);
  console.log("all parts of  this builld ", parts);
  console.log(params?.buildID, "form the individual bubild page");
  return (
    <>
      <div className="mt-44">
        <div className="text-blue-500">{params?.buildID}</div>

        <div>
          {/* <button>delete build</button> */}
          {/* <button>browse components</button> */}
        </div>
        <div>{/* TODO:show all the components in the build  */}</div>

        <div>
          {/* TODO:show some kind of performance thing based on the components so
          far */}
        </div>

        <div>
          {/* <button>checkout</button> TODO:this will open up a modal in which there is some final price or confirmation about the product and after that you are going to go to the stripe page */}
        </div>
      </div>
    </>
  );
}
