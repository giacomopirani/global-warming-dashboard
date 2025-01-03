import { Loader2 } from "lucide-react";

export function Loading() {
  return (
    <div className="flex items-center justify-center h-[400px]">
      <Loader2 className="h-8 w-8 animate-spin" />
    </div>
  );
}
