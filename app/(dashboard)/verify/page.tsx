import { VerificationForm } from "@/components/dashboard/verify/verification-form";

export default function VerifyPage() {
    return (
        <div className="space-y-6 py-sides">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-display font-bold text-foreground tracking-tight">
                    Transaction Verification
                </h1>
                <p className="text-muted-foreground">
                    Validate external transactions against the Flare Data Connector consensus.
                </p>
            </div>

            <div className="flex justify-center py-12">
                <div className="w-full max-w-3xl">
                    <VerificationForm />
                </div>
            </div>
        </div>
    );
}
