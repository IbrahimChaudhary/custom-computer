"use client";
import { useAdminStore } from "@/stores/admin-store";
import { Button } from "./ui/button";

export default function SwitchForumTabBtn() {
  const setActiveForumTab = useAdminStore((state) => state.setActiveForumTab);
  const activeForumTab = useAdminStore((state) => state.activeForumTab);
  return (
    <>
      <div className="flex justify-between ">
        <div className="text-4xl">
          {activeForumTab === "builds" ? "shared Builds" : "Questions"}
        </div>
        <div className="flex gap-4">
          <Button
            className={` ${
              activeForumTab === "questions" ? "opacity-80 scale-90" : null
            } bg-secondary text-white  `}
            onClick={() => setActiveForumTab("questions")}
          >
            show questions
          </Button>
          <Button
            className={` ${
              activeForumTab === "builds" ? "opacity-80 scale-90" : null
            } bg-secondary text-white `}
            onClick={() => setActiveForumTab("builds")}
          >
            show builds
          </Button>
        </div>
      </div>
    </>
  );
}
