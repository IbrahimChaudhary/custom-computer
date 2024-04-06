"use client";
import giveComponent from "@/actions/give-component";
import { useEffect, useState } from "react";
type MoreInfoDialogPropsT = {
  partId: string;
  withImage: boolean;
  category: string;
};
export default function MoreInfoDialog({
  partId,
  withImage,
  category,
}: MoreInfoDialogPropsT) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await giveComponent(partId, category);
      console.log("resulllllllllllllllllllllllll", result);
      setData(result);
    };

    fetchData();
  }, [partId]);

  return (
    <>
      <div className="pt-4">
        {data &&
          Object.entries(data).map(([key, value], index) => {
            if (key !== "image" && key !== "_id" && key !== "created_at") {
              return (
                <p key={index} className="flex  justify-between ">
                  <span className="text-blue-500 mb-3">{key}:</span>
                  <span className="text-mono">{JSON.stringify(value)}</span>
                </p>
              );
            }
            return null;
          })}
      </div>
    </>
  );
}
