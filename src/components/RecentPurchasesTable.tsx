import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";

type Purchase = {
  id: string;
  date: string;
  supplier: string;
  items: number;
  amount: number;
  status: "Completed" | "Pending";
};

const recentPurchases: Purchase[] = [
  {
    id: "1",
    date: "2024-05-20",
    supplier: "ABC Gas Suppliers",
    items: 2,
    amount: 40000,
    status: "Completed",
  },
  {
    id: "2",
    date: "2024-05-19",
    supplier: "XYZ LPG Distributors",
    items: 1,
    amount: 3000,
    status: "Pending",
  },
];

export function RecentPurchasesTable() {
  return (
    <Card
      className="col-span-full rounded-2xl shadow-lg border border-white/30 bg-white/20 backdrop-blur-lg"
      style={{
        boxShadow:
          "0 8px 32px 0 rgba(31, 38, 135, 0.15), 0 1.5px 4px 0 rgba(0,0,0,0.03)",
        border: "1px solid rgba(255,255,255,0.25)",
      }}
    >
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-800 drop-shadow">
          Recent Purchases
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="min-w-full divide-y divide-gray-200 text-base">
          <TableHeader>
            <TableRow className="bg-white/10"></TableRow>
            <TableRow>
              <TableHead className="px-6 py-3 text-gray-500 font-semibold text-base">
                Supplier
              </TableHead>
              <TableHead className="px-6 py-3 text-gray-500 font-semibold text-base">
                Items
              </TableHead>
              <TableHead className="px-6 py-3 text-gray-500 font-semibold text-base">
                Status
              </TableHead>
              <TableHead className="px-6 py-3 text-gray-500 font-semibold text-base">
                Amount
              </TableHead>
              <TableHead className="px-6 py-3 text-gray-500 font-semibold text-base">
                Date
              </TableHead>
              <TableHead className="px-6 py-3 text-gray-500 font-semibold text-base">
                {/* Empty header for Detail button */}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentPurchases.map((purchase) => (
              <TableRow
                key={purchase.id}
                className="hover:bg-white/20 transition"
              >
                <TableCell className="px-6 py-3 text-gray-700 text-base">
                  {purchase.supplier}
                </TableCell>
                <TableCell className="px-6 py-3 text-gray-700 text-base">
                  {purchase.items} items
                </TableCell>
                <TableCell
                  className={`px-6 py-3 font-medium text-base ${
                    purchase.status === "Completed"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {purchase.status}
                </TableCell>
                <TableCell className="px-6 py-3 text-gray-900 font-semibold text-base">
                  ₨ {purchase.amount.toLocaleString()}
                </TableCell>
                <TableCell className="px-6 py-3 text-gray-500 text-base">
                  {purchase.date}
                </TableCell>
                <TableCell className="px-6 py-3">
                  <Button
                    type="button"
                    variant={"outline"}
                    className="px-4 py-1 text-sm font-medium transition"
                  >
                    Detail
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
