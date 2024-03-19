import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { currentUser } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Tracking from "../tracking";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default async function NavDD() {
  const user = await currentUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-transparent text-white" asChild>
        <Button variant="default" className="gap-2 ">
          <Avatar className="w-[30px] h-[30px]">
            <AvatarImage
              width={5}
              height={5}
              src={user?.imageUrl}
              alt="@shadcn"
              className=" aspect-auto"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span>{user?.username}</span>
          <ChevronDown></ChevronDown>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>manage account</DropdownMenuItem>
        <DropdownMenuItem>saved builds</DropdownMenuItem>
        <Link href="/cart">
          <DropdownMenuItem>cart</DropdownMenuItem>
        </Link>
        <Dialog>
          <DialogTrigger>
            <Button>tracking</Button>
          </DialogTrigger>
          <DialogContent>
            <Tracking />
          </DialogContent>
        </Dialog>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignOutButton></SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
