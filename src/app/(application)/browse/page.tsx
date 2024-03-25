import giveAllParts from "@/lib/giveAllParts";
import BrowseCard from "@/components/browse-card";
import { UserSelectCategory } from "@/components/user-select-category";
import showAllBuildsOfAUser from "@/lib/showAllBuildsOfAUser";
import UserSelectCategoryWrapper from "@/components/user-select-category-wrapper";
import SelectCategory from "@/components/select-category";
export default async function Browse() {
  const data = await giveAllParts();
  const allBuilds = await showAllBuildsOfAUser();
  return (
    <>
      <div className="pt-24 w-full px-8 max-w-[1440px] ">
        <div className="w-full">
          <UserSelectCategoryWrapper />
        </div>
        <div className="flex gap-x-6 flex-wrap">
          {data?.map((item) => {
            return (
              <BrowseCard
                partId={item._id.toString()}
                builds={allBuilds}
                name={item.name}
                price={item.price}
                type="case"
                key={item._id}
                image="/some-image.jpg"
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
