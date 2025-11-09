"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";

type Sale = {
  id: string;
  date: string;
  customer: string;
  items: number;
  amount: number;
  status: "Completed" | "Pending";
};

const recentSales: Sale[] = [
  {
    id: "1",
    date: "2024-05-21",
    customer: "John Doe",
    items: 3,
    amount: 6000,
    status: "Completed",
  },
  {
    id: "2",
    date: "2024-05-20",
    customer: "Jane Smith",
    items: 1,
    amount: 2000,
    status: "Pending",
  },
];

export function RecentSaleTable() {
  const router = useRouter();
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
          Recent Sales
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="min-w-full divide-y divide-gray-200 text-base">
          <TableHeader>
            <TableRow className="bg-white/10"></TableRow>
            <TableRow>
              <TableHead className="px-6 py-3 text-gray-500 font-semibold text-base">
                Customer
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
            {recentSales.map((sale) => (
              <TableRow key={sale.id} className="hover:bg-white/20 transition">
                <TableCell className="px-6 py-3 text-gray-700 text-base">
                  {sale.customer}
                </TableCell>
                <TableCell className="px-6 py-3 text-gray-700 text-base">
                  {sale.items} items
                </TableCell>
                <TableCell
                  className={`px-6 py-3 font-medium text-base ${
                    sale.status === "Completed"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {sale.status}
                </TableCell>
                <TableCell className="px-6 py-3 text-gray-900 font-semibold text-base">
                  ₨ {sale.amount.toLocaleString()}
                </TableCell>
                <TableCell className="px-6 py-3 text-gray-500 text-base">
                  {sale.date}
                </TableCell>
                <TableCell className="px-6 py-3">
                  <Button
                    type="button"
                    variant={"outline"}
                    className="px-4 py-1 text-sm font-medium transition"
                    onClick={() => router.push("/dashboard/sale/12")}
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
