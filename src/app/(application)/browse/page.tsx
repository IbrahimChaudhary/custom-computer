import { UserSelectCategory } from "@/components/user-select-category";
export default function Build() {
  return (
    <>
      <div className="pt-24">
        <div>
          <UserSelectCategory></UserSelectCategory>
          <input type="text" />
        </div>
        <div></div>
      </div>
    </>
  );
}
