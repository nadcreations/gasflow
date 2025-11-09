"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Frame,
  Landmark,
  PieChart,
  Send,
  Users,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { useCurrentUserProfile } from "@/server/useProfile";
import { usePathname } from "next/navigation";

const data = {
  Dashboard: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: PieChart, // Dashboard icon
    },
    {
      title: "Business",
      url: "/dashboard/business",
      icon: Landmark, // Business/office icon
    },
    {
      title: "Branches",
      url: "/dashboard/branch",
      icon: Frame, // Branches/structure icon
    },
    {
      title: "Team",
      url: "/dashboard/team",
      icon: Users, // Teams/group icon
    },
  ],
  Stocks: [
    {
      title: "Stocks",
      url: "/dashboard/stock",
      icon: BookOpen, // Inventory/stock icon
    },
    {
      title: "Sale",
      url: "/dashboard/sale",
      icon: Send, // Sale/transaction icon
    },
    {
      title: "Purchase",
      url: "/dashboard/purchase",
      icon: PieChart, // Purchase/statistics icon
    },
  ],
  Reports: [
    {
      title: "Digital Receipts",
      url: "/dashboard/report",
      icon: BookOpen, // Receipts icon
    },
    {
      title: "Reports",
      url: "/dashboard/report",
      icon: PieChart, // Reports/statistics icon
    },
  ],
  Customers: [
    {
      title: "Customer",
      url: "/dashboard/customer",
      icon: Bot, // Customer/user icon
    },
    {
      title: "Suppliers",
      url: "/dashboard/suppliers",
      icon: Landmark, // Suppliers/building icon
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: profile } = useCurrentUserProfile();

  const pathname = usePathname();
  if (pathname === "/dashboard/onboard") {
    return null;
  }

  return (
    <Sidebar variant="sidebar" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center justify-center">
            {/* <SidebarMenuButton size="default" asChild> */}
            <Link href="#">
              <Image
                src="/images/Gasflow.png"
                alt="Product Logo"
                className="size-60 rounded-lg object-contain bg-white p-1"
                priority
                width={300}
                height={300}
              />
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.Dashboard} title="Dashboard" />
        <NavMain items={data.Stocks} title="Stocks" />
        <NavMain items={data.Reports} title="Reports" />
        <NavMain items={data.Customers} title="Customers" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: profile?.displayName ?? "",
            email: profile?.email ?? "",
            avatar: "",
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
