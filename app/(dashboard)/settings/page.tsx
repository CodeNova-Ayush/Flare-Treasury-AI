import { SettingsPanel } from "@/components/dashboard/settings/settings-panel";

export default function SettingsPage() {
    return (
        <div className="space-y-6 py-sides">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-display font-bold text-foreground tracking-tight">
                    Settings
                </h1>
                <p className="text-muted-foreground">
                    Manage your wallet connection, smart account preferences, and security keys.
                </p>
            </div>

            <SettingsPanel />
        </div>
    );
}
