import { Metadata } from "next";
import BuildCard from "@/components/build-card";
export const metadata: Metadata = {
  title: "builds",
};
export default function Build() {
  return (
    <>
      <div className="pt-20 bg-purple-500">
        <button>create a new build</button>
        <div>saved builds</div>
        <div>
          {/* TODO: put a map to the build cards */}
          <BuildCard></BuildCard>
        </div>
      </div>
    </>
  );
}
