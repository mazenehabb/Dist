import { AlertCircle, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LoadError({ title, action, onRetry }: { title: string; action: string; onRetry: () => void }) {
  return (
    <div className="load-error" role="alert">
      <AlertCircle aria-hidden="true" size={22} />
      <div><strong>{title}</strong><Button onClick={onRetry} size="small" variant="ghost"><RotateCw aria-hidden="true" size={15} />{action}</Button></div>
    </div>
  );
}
