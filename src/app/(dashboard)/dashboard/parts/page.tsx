import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import giveAllParts from "@/lib/giveAllParts";
import showAllBuildsOfAUser from "@/lib/showAllBuildsOfAUser";
import UserSelectCategoryWrapper from "@/components/user-select-category-wrapper";
import BrowseCardWrapper from "@/components/browse-card-wrapper";
import { AdminVerification } from "@/components/admin-verification";
export default async function Parts({ searchParams }: { searchParams: any }) {
  const currentPage = parseInt(searchParams.page) || 1;
  const allBuilds = await showAllBuildsOfAUser();
  return (
    <>
      <AdminVerification />
      <div className="pt-6 w-full px-8 max-w-[1440px] ">
        <div className="w-full flex justify-between mb-8 flex-row-reverse">
          <UserSelectCategoryWrapper />
          <h1 className="text-6xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-semibold">
            Components
          </h1>
        </div>

        <BrowseCardWrapper
          currentPage={currentPage}
          allbuids={JSON.parse(JSON.stringify(allBuilds))}
          allowAddToBuild={false}
          allowDelete={true}
        />

        <Pagination className="mb-24">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={`/browse?page=${currentPage > 1 ? currentPage - 1 : 1}`}
              />
            </PaginationItem>

            <PaginationItem>
              <PaginationLink href="/browse?page=1">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/browse?page=2">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/browse?page=3">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/browse?page=4">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href={`/browse?page=${currentPage + 1}`} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}
