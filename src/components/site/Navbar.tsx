import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", to: "/" as const },
  { label: "Trading Rules", to: "/" as const, hash: "challenge" },
  { label: "About Us", to: "/" as const, hash: "why" },
  { label: "Affiliate", to: "/" as const, hash: "why" },
  { label: "FAQ", to: "/" as const, hash: "faq" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled ? "glass border-b border-border/60 shadow-soft" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-white font-black shadow-glow">
            R
          </span>
          <span className="font-bold tracking-tight text-lg">
            RIM <span className="text-gradient-brand">Prop</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.hash ? `#${l.hash}` : "/"}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={toggle}
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface hover:bg-surface-elevated transition-colors"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Button variant="outline" className="hidden sm:inline-flex h-9 rounded-full">
            Login
          </Button>
          <Button className="hidden sm:inline-flex h-9 rounded-full bg-gradient-brand text-white border-0 hover:opacity-90">
            Sign Up
          </Button>
          <button
            className="md:hidden grid h-9 w-9 place-items-center rounded-full border border-border bg-surface"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-border/60 px-4 py-4 space-y-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.hash ? `#${l.hash}` : "/"}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-surface-elevated"
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            <Button variant="outline" className="flex-1 rounded-full">Login</Button>
            <Button className="flex-1 rounded-full bg-gradient-brand text-white border-0">Sign Up</Button>
          </div>
        </div>
      )}
    </header>
  );
}
