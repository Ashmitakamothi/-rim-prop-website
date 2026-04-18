import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How does the RIM Challenge work?",
    a: "Pick an account size, hit the profit target while respecting the drawdown rules, and we’ll fund you with a live capital account and up to 95% profit split." },
  { q: "How fast are payouts?",
    a: "Payouts are processed within 24 hours of request, twice per month. We support bank transfer, crypto, and several local rails." },
  { q: "Are EAs and news trading allowed?",
    a: "Yes. EAs, copy trading, and news trading are all allowed on funded accounts within standard risk rules." },
  { q: "Is there a time limit on the challenge?",
    a: "No time limit. Take the time you need — there’s only a minimum trading-days requirement." },
  { q: "What instruments can I trade?",
    a: "Forex majors, minors and exotics, indices, metals, oil, and crypto CFDs — all from one account." },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-20 lg:py-28 bg-surface-elevated/40 border-y border-border">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
            Frequently asked <span className="text-gradient-brand">questions</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-surface px-5 shadow-soft data-[state=open]:shadow-glow"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
