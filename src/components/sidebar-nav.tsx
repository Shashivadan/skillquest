"use client";

import { Button } from "~/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Shield,
  MapPin,
  Users,
  Bell,
  Settings,
  LifeBuoy,
  History,
  Ghost,
} from "lucide-react";

const navArray = [
  {
    icon: MapPin,
    label: "Location Tracking",
    href: "/dashboard",
  },
  {
    icon: Users,
    label: "Emergency Contacts",
    href: "/dashboard/contacts",
  },
  {
    icon: Bell,
    label: "Alert Settings",
    href: "/dashboard/alerts",
  },
  {
    icon: History,
    label: "Alert History",
    href: "/dashboard/history",
  },
  {
    icon: LifeBuoy,
    label: "Help & Support",
    href: "/dashboard/support",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/dashboard/settings",
  },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <aside className="bg-background/50 h-screen border-l border-r backdrop-blur">
      <div className="flex h-16 items-center gap-2 border-b px-6">
        <Shield className="h-6 w-6" />
        <Link href="/dashboard" className="hover:text-primary font-bold">
          Safety Dashboard
        </Link>
      </div>

      <nav className="s">
        {navArray.map(({ icon: Icon, label, href }, index) => {
          const isActive = pathname === href;
          return (
            <div
              key={index}
              className={`hover:bg-accent/50 ${isActive ? "bg-accent/50" : ""} w-full border-b px-4 py-1`}
            >
              <Button
                variant={"ghost"}
                className="w-full justify-start gap-2 hover:bg-transparent"
                asChild
              >
                <Link href={href}>
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              </Button>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
