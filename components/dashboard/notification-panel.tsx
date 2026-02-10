import { FloatingCard } from "@/components/shared/floating-card";
import { Bell, CheckCircle, AlertTriangle, Info, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface Notification {
    id: string;
    title: string;
    type: "success" | "warning" | "risk" | "info";
    timestamp: string;
}

const notifications: Notification[] = [
    {
        id: "1",
        title: "FDC Transaction Verified",
        type: "success",
        timestamp: "2m ago",
    },
    {
        id: "2",
        title: "FTSO Price Updated",
        type: "info",
        timestamp: "5m ago",
    },
    {
        id: "3",
        title: "AI Strategy Updated",
        type: "info",
        timestamp: "12m ago",
    },
    {
        id: "4",
        title: "Smart Account Execution Successful",
        type: "success",
        timestamp: "1h ago",
    },
    {
        id: "5",
        title: "Risk Alert Triggered",
        type: "risk",
        timestamp: "2h ago",
    },
];

export function NotificationPanel() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between px-2">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                    <Bell className="h-4 w-4" /> Notifications
                </h3>
                <span className="text-xs text-primary cursor-pointer hover:underline">Clear All</span>
            </div>

            <div className="space-y-3">
                {notifications.map((notification, index) => (
                    <FloatingCard
                        key={notification.id}
                        delay={index * 0.1}
                        noFloat
                        className="p-4 border-l-4 border-l-transparent hover:bg-card/80 cursor-pointer group"
                    >
                        <div className="flex items-start gap-3">
                            <div className={cn(
                                "mt-0.5",
                                notification.type === "success" && "text-green-500",
                                notification.type === "warning" && "text-yellow-500",
                                notification.type === "risk" && "text-red-500",
                                notification.type === "info" && "text-blue-500",
                            )}>
                                {notification.type === "success" && <CheckCircle className="h-4 w-4" />}
                                {notification.type === "warning" && <AlertTriangle className="h-4 w-4" />}
                                {notification.type === "risk" && <Zap className="h-4 w-4" />}
                                {notification.type === "info" && <Info className="h-4 w-4" />}
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                    {notification.title}
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">{notification.timestamp}</p>
                            </div>
                        </div>
                    </FloatingCard>
                ))}
            </div>
        </div>
    );
}
