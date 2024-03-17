import giveAllParts from "@/lib/giveAllParts";
import BrowseCard from "@/components/browse-card";
import { UserSelectCategory } from "@/components/user-select-category";
import showAllBuildsOfAUser from "@/lib/showAllBuildsOfAUser";
export default async function Browse() {
  const data = await giveAllParts();
  const allBuilds = await showAllBuildsOfAUser();
  return (
    <>
      <div className="pt-24">
        <div>
          <UserSelectCategory></UserSelectCategory>
        </div>
        <div>
          {data?.map((item) => {
            return (
              <BrowseCard
                partId={ item._id.toString()}
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
