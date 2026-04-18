import { Button } from "@/components/ui/button";

export function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 glass border-t border-border">
      <Button className="w-full h-12 rounded-full bg-gradient-brand text-white border-0 shadow-glow">
        Start Challenge
      </Button>
    </div>
  );
}
