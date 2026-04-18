import {
  Banknote, Clock, Gauge, LineChart, Rocket, ShieldCheck, Trophy, Wallet,
} from "lucide-react";

const features = [
  { icon: Rocket,       title: "Instant Funding",       desc: "Skip the wait — go live with our instant funding accounts." },
  { icon: Banknote,     title: "Fast Payouts",          desc: "Bi-weekly payouts processed within 24 hours via your preferred method." },
  { icon: ShieldCheck,  title: "Low Drawdown Rules",    desc: "Trader-friendly drawdowns built around real risk management." },
  { icon: Trophy,       title: "Up to 95% Split",       desc: "Industry-leading profit splits that grow as you scale." },
  { icon: Clock,        title: "No Time Limit",         desc: "Take your time — pass the challenge at your own pace." },
  { icon: LineChart,    title: "Pro Dashboard",         desc: "Track equity, drawdown, and consistency in one view." },
  { icon: Gauge,        title: "Tight Spreads",         desc: "Institutional-grade execution across FX, indices & metals." },
  { icon: Wallet,       title: "Scaling Plan",          desc: "Grow your capital up to $2,000,000 with consistent performance." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
            Why traders choose us
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Built for serious traders,{" "}
            <span className="text-gradient-brand">priced for everyone</span>.
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <article
              key={f.title}
              className="group relative rounded-2xl border border-border bg-surface p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-white shadow-glow">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
