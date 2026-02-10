import { TreasuryStatusCard } from "@/components/dashboard/overview/treasury-status-card";
import { LiveBTCPrice } from "@/components/dashboard/overview/live-btc-price";
import { VerifiedPayments } from "@/components/dashboard/overview/verified-payments";
import { AIRiskLevel } from "@/components/dashboard/overview/ai-risk-level";
import { ChartArea } from "@/components/dashboard/overview/chart-area";

export default function DashboardPage() {
  return (
    <div className="space-y-6 py-sides">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-display font-bold text-foreground tracking-tight">
          Overview
        </h1>
        <p className="text-muted-foreground">
          Real-time treasury monitoring and AI-driven insights.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TreasuryStatusCard />
        <LiveBTCPrice />
        <VerifiedPayments />
        <AIRiskLevel />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <ChartArea />
      </div>
    </div>
  );
}
