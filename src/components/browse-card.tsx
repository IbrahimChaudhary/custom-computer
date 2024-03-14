import Image from "next/image";
export default function BrowseCard() {
  return (
    <>
      <div>
        <Image src="/" alt="dsd" width={34} height={34} />
        <div>some details and price</div>
        <div>
          {/* TODO:make two modals here */}
          <button>more info</button>
          <button>add to build</button>
        </div>
      </div>
    </>
  );
}
