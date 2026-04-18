import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const cols = [
    { title: "Product", links: ["Challenges", "Trading Rules", "Payouts", "Affiliate"] },
    { title: "Company", links: ["About", "Careers", "Contact", "Blog"] },
    { title: "Legal",   links: ["Terms", "Privacy", "Risk Disclosure", "Refund Policy"] },
  ];
  return (
    <footer className="bg-[oklch(0.18_0.05_268)] text-white/85">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-white font-black">R</span>
            <span className="font-bold tracking-tight text-lg text-white">RIM Prop</span>
          </div>
          <p className="mt-4 text-sm text-white/60 max-w-xs">
            A new generation prop firm — transparent rules, fast payouts, and capital that scales with your skill.
          </p>
          <div className="mt-5 flex gap-2">
            {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 hover:border-white/40 hover:bg-white/5 transition"
                aria-label="social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="text-sm font-semibold text-white">{c.title}</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              {c.links.map((l) => (
                <li key={l}><a href="#" className="hover:text-white transition">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} RIM Prop Firm. All rights reserved.</p>
          <p>CFDs are complex instruments and come with high risk of losing money.</p>
        </div>
      </div>
    </footer>
  );
}
