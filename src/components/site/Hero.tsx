import { ArrowRight, ShieldCheck, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-70 dark:opacity-90 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[820px] rounded-full bg-gradient-brand opacity-20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 backdrop-blur px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-success animate-glow-pulse" />
              Live payouts processed daily
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Trade Smart.{" "}
              <span className="text-gradient-brand">Get Funded.</span>{" "}
              Scale Faster.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl">
              Join RIM Prop Firm and trade with up to{" "}
              <span className="font-semibold text-foreground">$200,000</span> capital.
              Transparent rules, fast payouts, and a 90% profit split.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="h-12 rounded-full px-6 bg-gradient-brand text-white border-0 shadow-glow hover:opacity-95"
              >
                Start Challenge <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 rounded-full px-6">
                View Rules
              </Button>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { k: "$12M+", v: "Paid out" },
                { k: "30K+", v: "Funded traders" },
                { k: "24h", v: "Payout speed" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="text-2xl sm:text-3xl font-bold text-gradient-brand">{s.k}</dt>
                  <dd className="text-xs text-muted-foreground mt-1">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative animate-fade-up [animation-delay:120ms]">
            <DashboardArt />
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardArt() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-brand opacity-25 blur-3xl rounded-[2rem] pointer-events-none" />
      <div className="relative rounded-3xl border border-border bg-surface/80 backdrop-blur-xl shadow-glow p-5 ring-gradient">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Account Balance</p>
            <p className="text-3xl font-bold">$104,820.45</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-success/15 text-success px-2.5 py-1 text-xs font-semibold">
            <TrendingUp className="h-3 w-3" /> +4.82%
          </span>
        </div>

        <ChartSvg />

        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            { i: <Zap className="h-4 w-4" />, l: "Win rate", v: "68%" },
            { i: <ShieldCheck className="h-4 w-4" />, l: "Drawdown", v: "2.1%" },
            { i: <TrendingUp className="h-4 w-4" />, l: "Trades", v: "142" },
          ].map((m) => (
            <div
              key={m.l}
              className="rounded-xl border border-border bg-surface-elevated/60 p-3"
            >
              <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                {m.i}
                {m.l}
              </div>
              <p className="mt-1 font-semibold">{m.v}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl border border-border bg-surface/90 backdrop-blur-xl px-4 py-3 shadow-soft animate-float">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-brand text-white font-bold">$</span>
        <div>
          <p className="text-xs text-muted-foreground">Last payout</p>
          <p className="font-semibold">$8,420 → A. Patel 🇮🇳</p>
        </div>
      </div>
    </div>
  );
}

function ChartSvg() {
  return (
    <svg viewBox="0 0 400 160" className="mt-5 w-full h-40">
      <defs>
        <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.78 0.13 230)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="oklch(0.78 0.13 230)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="g2" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="oklch(0.58 0.20 263)" />
          <stop offset="100%" stopColor="oklch(0.78 0.13 230)" />
        </linearGradient>
      </defs>
      <path
        d="M0,120 C40,100 70,130 100,110 S160,60 200,75 S280,40 320,55 S380,30 400,40 L400,160 L0,160 Z"
        fill="url(#g1)"
      />
      <path
        d="M0,120 C40,100 70,130 100,110 S160,60 200,75 S280,40 320,55 S380,30 400,40"
        fill="none"
        stroke="url(#g2)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
