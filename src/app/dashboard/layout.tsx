import { SidebarNav } from "~/components/sidebar-nav";

export const metadata = {
  title: "Safety Dashboard",
  description: "Women Safety Application Dashboard",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="grid lg:grid-cols-[280px_1fr]">
        <SidebarNav />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
