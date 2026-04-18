const traders = [
  { name: "A*** Patel", flag: "🇮🇳", amount: "$4,250", type: "Gold" },
  { name: "M*** Khan", flag: "🇦🇪", amount: "$8,120", type: "Platinum" },
  { name: "J*** Carter", flag: "🇨🇦", amount: "$2,980", type: "Silver" },
  { name: "S*** Müller", flag: "🇩🇪", amount: "$6,540", type: "Gold" },
  { name: "R*** Silva", flag: "🇧🇷", amount: "$3,710", type: "Silver" },
  { name: "Y*** Tanaka", flag: "🇯🇵", amount: "$11,300", type: "Platinum" },
  { name: "L*** Dubois", flag: "🇫🇷", amount: "$5,090", type: "Gold" },
  { name: "O*** Adeyemi", flag: "🇳🇬", amount: "$7,420", type: "Platinum" },
];

export function LiveTraders() {
  const items = [...traders, ...traders];
  return (
    <section className="border-y border-border bg-surface/40 py-6">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Live payouts
          </p>
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-success animate-glow-pulse" />
            Updating in real-time
          </span>
        </div>
        <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex w-max gap-3 animate-marquee group-hover:[animation-play-state:paused]">
            {items.map((t, i) => (
              <article
                key={i}
                className="min-w-[230px] rounded-2xl border border-border bg-surface px-4 py-3 shadow-soft hover:shadow-glow transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{t.flag}</span>
                    <span className="font-medium text-sm">{t.name}</span>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {t.type}
                  </span>
                </div>
                <p className="mt-2 text-lg font-bold text-gradient-brand">
                  {t.amount} <span className="text-xs text-muted-foreground font-medium">payout</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
