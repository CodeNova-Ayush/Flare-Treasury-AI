import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { NotificationPanel } from "@/components/dashboard/notification-panel";
import { MobileHeader } from "@/components/dashboard/mobile-header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { mockData } from "@/lib/mock-data";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-gap lg:px-sides">
                <div className="hidden lg:block col-span-2 top-0 relative">
                    <DashboardSidebar />
                </div>
                <div className="col-span-1 lg:col-span-7">
                    <MobileHeader mockData={mockData} />
                    {children}
                </div>
                <div className="col-span-3 hidden lg:block">
                    <div className="space-y-gap py-sides min-h-screen max-h-screen sticky top-0 overflow-clip">
                        <NotificationPanel />
                    </div>
                </div>
            </div>
        </SidebarProvider>
    );
}
