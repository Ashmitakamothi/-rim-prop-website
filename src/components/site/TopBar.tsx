import { Sparkles } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-gradient-brand text-white text-xs sm:text-sm">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-center gap-2 px-4">
        <Sparkles className="h-3.5 w-3.5 opacity-90" />
        <p className="truncate">
          Get Funded Faster — Use Code{" "}
          <span className="font-semibold tracking-wide">RIM20</span> & Get{" "}
          <span className="font-semibold">20% OFF</span>
        </p>
      </div>
    </div>
  );
}
