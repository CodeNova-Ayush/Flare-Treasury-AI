export default function LandingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {children}
        </div>
    );
}
