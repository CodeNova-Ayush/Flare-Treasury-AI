import { RecommendationPanel } from "@/components/dashboard/advisor/recommendation-panel";

export default function AdvisorPage() {
    return (
        <div className="space-y-6 py-sides">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-display font-bold text-foreground tracking-tight">
                    AI Advisor
                </h1>
                <p className="text-muted-foreground">
                    Automated treasury management strategies powered by predictive AI.
                </p>
            </div>

            <div className="py-6">
                <RecommendationPanel />
            </div>
        </div>
    );
}
