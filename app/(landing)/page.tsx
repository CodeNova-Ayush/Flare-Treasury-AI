import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";

import { HowItWorks } from "@/components/landing/how-it-works";
import { ProductOverview } from "@/components/landing/product-overview";
import { CTASection } from "@/components/landing/cta-section";
import { DashboardPreview } from "@/components/landing/dashboard-preview";
import { Footer } from "@/components/landing/footer";

export default function LandingPage() {
    return (
        <main className="min-h-screen bg-black text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            {/* Architecture Section Removed */}
            <HowItWorks />
            <DashboardPreview />
            <ProductOverview />
            <CTASection />
            <Footer />
        </main>
    );
}
