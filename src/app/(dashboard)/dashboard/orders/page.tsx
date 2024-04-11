import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import getOrders from "@/actions/get-orders";
import { nanoid } from "nanoid";
import AdminChangeStatusDD from "@/components/admin-change-status-dd";
import AdminDeleteOrder from "@/components/admin-delete-order";
import giveStatusColor from "@/lib/give-status-color";
import { AdminVerification } from "@/components/admin-verification";
import Link from "next/link";
export default async function Orders() {
  const data = await getOrders();
  return (
    <>
      <AdminVerification />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">email</TableHead>
            <TableHead>build name</TableHead>
            <TableHead>status</TableHead>
            <TableHead>Amount</TableHead>

            <TableHead>Delete</TableHead>
            <TableHead>Change Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item: any) => (
            <TableRow key={nanoid()}>
              <TableCell className="font-medium">{item.mail}</TableCell>
              <Link href={`/builds/${item.buildID}?view-only=true`}>
                <TableCell>{item.buildName}</TableCell>
              </Link>
              <TableCell className={`${giveStatusColor(item.status)}`}>
                {item.status}
              </TableCell>
              <TableCell className="font-medium text-mono">
                {item.bill}$
              </TableCell>
              <TableCell>
                <AdminDeleteOrder buildID={item.buildID} />
              </TableCell>
              <TableCell>
                <AdminChangeStatusDD buildID={item.buildID} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
