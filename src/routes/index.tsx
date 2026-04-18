import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TopBar } from "@/components/site/TopBar";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { LiveTraders } from "@/components/site/LiveTraders";
import { ChallengeSelector } from "@/components/site/ChallengeSelector";
import { WhyUs } from "@/components/site/WhyUs";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { MobileCTA } from "@/components/site/MobileCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RIM Prop Firm — Trade Smart. Get Funded. Scale Faster." },
      {
        name: "description",
        content:
          "Get funded with up to $200,000 trading capital. Transparent rules, fast payouts, and up to 95% profit split with RIM Prop Firm.",
      },
      { property: "og:title", content: "RIM Prop Firm — Get Funded & Scale" },
      {
        property: "og:description",
        content:
          "Join RIM Prop Firm and trade with up to $200,000 capital. Industry-leading profit splits, fast payouts.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <TopBar />
        <Navbar />
        <main className="pb-20 md:pb-0">
          <Hero />
          <LiveTraders />
          <ChallengeSelector />
          <WhyUs />
          <FAQ />
        </main>
        <Footer />
        <MobileCTA />
      </div>
    </ThemeProvider>
  );
}
