"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  ShieldCheck,
  Bot,
  LineChart,
  FileText,
  Settings,
  Hexagon,
} from "lucide-react";
import { Bullet } from "@/components/ui/bullet";

const navItems = [
  {
    title: "Overview",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Transaction Verification",
    url: "/verify",
    icon: ShieldCheck,
  },
  {
    title: "AI Advisor",
    url: "/advisor",
    icon: Bot,
  },
  {
    title: "Market",
    url: "/market",
    icon: LineChart,
  },
  {
    title: "Treasury Logs",
    url: "/logs",
    icon: FileText,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function DashboardSidebar({
  className,
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar {...props} className={cn("py-sides", className)}>
      <SidebarHeader className="rounded-t-lg flex gap-3 flex-row rounded-b-none mb-4">
        <div className="flex overflow-clip size-12 shrink-0 items-center justify-center rounded bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Hexagon className="size-8 animate-pulse" />
        </div>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="text-xl font-display font-bold text-primary tracking-wider">FLARE</span>
          <span className="text-xs uppercase text-muted-foreground tracking-widest">Treasury AI</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <Bullet className="mr-2" />
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    className="hover:bg-primary/10 hover:text-primary data-[active=true]:bg-primary/20 data-[active=true]:text-primary transition-all duration-300"
                  >
                    <Link href={item.url}>
                      <item.icon className="size-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="rounded-lg bg-card/50 p-4 border border-border">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground">System Online</span>
          </div>
          <div className="text-xs text-muted-foreground/50">
            v2.0.4-alpha
          </div>
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}

