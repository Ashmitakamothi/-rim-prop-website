import { useMemo, useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Tier = "Gold" | "Silver" | "Platinum";
const tiers: Tier[] = ["Silver", "Gold", "Platinum"];
const balances = [5000, 10000, 25000, 50000, 100000];

const config: Record<Tier, {
  feeFactor: number;
  dailyLoss: number;
  totalLoss: number;
  minDays: number;
  consistency: string;
  period: string;
  leverage: string;
  split: string;
}> = {
  Silver:   { feeFactor: 0.0010, dailyLoss: 5, totalLoss: 10, minDays: 5, consistency: "30%", period: "Unlimited", leverage: "1:50",  split: "Up to 80%" },
  Gold:     { feeFactor: 0.0014, dailyLoss: 5, totalLoss: 10, minDays: 3, consistency: "25%", period: "Unlimited", leverage: "1:100", split: "Up to 90%" },
  Platinum: { feeFactor: 0.0020, dailyLoss: 4, totalLoss: 8,  minDays: 3, consistency: "20%", period: "Unlimited", leverage: "1:200", split: "Up to 95%" },
};

const fmt = (n: number) => "$" + n.toLocaleString();

export function ChallengeSelector() {
  const [tier, setTier] = useState<Tier>("Gold");
  const [balance, setBalance] = useState(50000);

  const c = config[tier];
  const fee = useMemo(() => Math.max(29, Math.round(balance * c.feeFactor)), [balance, c]);

  return (
    <section id="challenge" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-soft pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3 w-3" /> Funding plans
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Choose Your <span className="text-gradient-brand">Challenge</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Pick a tier, select your account size, and start trading with capital that scales with you.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-border bg-surface p-1 shadow-soft">
            {tiers.map((t) => (
              <button
                key={t}
                onClick={() => setTier(t)}
                className={cn(
                  "relative px-5 sm:px-7 py-2 text-sm font-semibold rounded-full transition-all",
                  tier === t
                    ? "bg-gradient-brand text-white shadow-glow"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-8 items-start">
          {/* Balance selector */}
          <aside className="rounded-3xl border border-border bg-surface p-5 shadow-soft">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Account size
            </p>
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible -mx-1 px-1 pb-1">
              {balances.map((b) => {
                const active = balance === b;
                return (
                  <button
                    key={b}
                    onClick={() => setBalance(b)}
                    className={cn(
                      "shrink-0 lg:w-full rounded-xl px-4 py-3 text-left text-sm font-semibold border transition-all",
                      active
                        ? "bg-gradient-brand text-white border-transparent shadow-glow"
                        : "bg-background border-border hover:border-primary/40 hover:bg-surface-elevated text-foreground",
                    )}
                  >
                    {fmt(b)}
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Main info card */}
          <div
            key={`${tier}-${balance}`}
            className="relative rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-glow ring-gradient animate-fade-up"
          >
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {tier} · Trading capital
                </p>
                <p className="mt-1 text-4xl sm:text-5xl font-bold text-gradient-brand">
                  {fmt(balance)}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Entry fee
                </p>
                <p className="mt-1 text-3xl font-bold">${fee}</p>
              </div>
            </div>

            <div className="my-7 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <dl className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-5">
              <Stat label="Max Daily Loss" value={`${c.dailyLoss}%`} />
              <Stat label="Max Total Loss" value={`${c.totalLoss}%`} />
              <Stat label="Min Trading Days" value={`${c.minDays}`} />
              <Stat label="Consistency" value={c.consistency} />
              <Stat label="Trading Period" value={c.period} />
              <Stat label="Max Leverage" value={c.leverage} />
            </dl>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 rounded-2xl bg-surface-elevated/60 p-5 border border-border">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Reward split
                </p>
                <p className="mt-1 text-2xl font-bold">{c.split}</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {["Bi-weekly payouts", "Scaling plan included", "EA & news trading allowed"].map((x) => (
                    <li key={x} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-success" /> {x}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                size="lg"
                className="h-13 px-7 rounded-full bg-gradient-brand text-white border-0 shadow-glow hover:opacity-95 animate-glow-pulse"
              >
                Buy Challenge — ${fee}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-widest text-muted-foreground">{label}</dt>
      <dd className="mt-1 text-xl font-bold">{value}</dd>
    </div>
  );
}
