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
import giveCheckoutBuilds from "@/lib/give-checkout-builds";
import total from "@/lib/total";
import { buildT } from "@/types/build-type";

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

export default async function Tracking() {
  const data = await giveCheckoutBuilds();
  const handleSummation = async (buildID: string) => {
    const parts = await giveAllPartsInAbuild(buildID);
    const totalAmount = total(parts);
    return totalAmount;
  };

  console.log("$$$$$$$$#########@@@@@@@@@@", data);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((item: any) => (
          <TableRow key={item.builds.name}>
            <TableCell className="font-medium">{item.builds.name}</TableCell>
            <TableCell>{item.builds.status}</TableCell>
            <TableCell className="text-right">
              {handleSummation(item.builds._id.toString())}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
}

{
  /* <div className="flex w-full gap-2 flex-col text-black  justify-center items-center">
        <div className=" font-bold text-white text-4xl mb-4">your orders</div>
        <div className="flex w-full justify-around border-y py-4 bg-black text-white ">
          <div>build name</div>
          <div className="">status</div>
          <div className="">amount</div>
        </div>
        {checkoutBuilds
          ? checkoutBuilds?.map((item) => {
              return (
                <div
                  className="flex justify-around border-y py-4 w-full "
                  key={nanoid()}
                >
                  <div className="text-white">{item.builds.name}</div>
                  <div className="text-yellow-500 font-bold">
                    {item.builds.status}
                  </div>
                  <div className="text-green-500">2000$</div>
                </div>
              );
            })
          : null}
      </div>
          */
}
