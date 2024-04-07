import getOrderStatuses from "@/actions/get-orders-statuses";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import giveAllPartsInAbuild from "@/lib/give-all-parts-in-a-build";
import total from "@/lib/total";
import { get } from "http";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export default async function Orders() {
  const data = await getOrderStatuses();
  const handleSummation = async (buildID: string) => {
    const parts = await giveAllPartsInAbuild(buildID);
    console.log(parts, "###############################$$$$$$$");
    if (!Array.isArray(parts)) {
      throw new Error("Parts is not iterable");
    }
    const totalAmount = total(parts);
    return totalAmount;
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">email</TableHead>
          <TableHead>build name</TableHead>
          <TableHead>status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((item: any) => (
          <TableRow key={item.buildID.toString()}>
            <TableCell className="font-medium">{item.email}</TableCell>
            <TableCell>{item.buildName}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell className="text-right">
              {handleSummation(item.buildID.toString())}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
