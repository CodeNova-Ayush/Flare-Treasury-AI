import { MarketCharts } from "@/components/dashboard/market/market-charts";

export default function MarketPage() {
    return (
        <div className="space-y-6 py-sides">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-display font-bold text-foreground tracking-tight">
                    Market Intelligence
                </h1>
                <p className="text-muted-foreground">
                    Live market data secured by the Flare Time Series Oracle (FTSO).
                </p>
            </div>

            <MarketCharts />
        </div>
    );
}
