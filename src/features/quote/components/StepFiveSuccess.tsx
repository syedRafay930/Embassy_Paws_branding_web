// src/features/quote/components/StepFiveSuccess.tsx
import { Button } from "@/components/ui";

type Props = {
  onClose: () => void;
};

export function StepFiveSuccess({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col items-center text-center gap-6 animate-in fade-in zoom-in-95 duration-300">
      
      {/* Title & Subtitle */}
      <div className="space-y-1.5">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy">
          Your case is open
        </h2>
        <p className="text-sm text-navy/70">
          Portal access is on its way to your email.
        </p>
      </div>

      {/* Info Card with Checklist */}
      <div className="w-full bg-white border border-gray-100 rounded-2xl p-5 text-left shadow-sm space-y-3">
        <p className="text-xs font-semibold text-navy">
          Signing triggered all of this:
        </p>
        <ul className="text-xs text-navy/80 space-y-2.5">
          <li className="flex items-center gap-2.5">
            <span className="text-emerald-600 font-bold">✓</span> Client file created (EP-2038)
          </li>
          <li className="flex items-center gap-2.5">
            <span className="text-emerald-600 font-bold">✓</span> Destination template loaded (Spain · EU)
          </li>
          <li className="flex items-center gap-2.5">
            <span className="text-emerald-600 font-bold">✓</span> Dated checklist generated — counted backward from travel date
          </li>
          <li className="flex items-center gap-2.5">
            <span className="text-emerald-600 font-bold">✓</span> Portal unlocked at your tier
          </li>
        </ul>
      </div>

      {/* Action Button with celebration hover effect */}
      <div className="w-full mt-2">
        <Button 
          onClick={onClose} 
          variant="gold" 
          className="shadow-md hover:scale-[1.02] transition-transform"
        >
          View my dated checklist
        </Button>
      </div>

    </div>
  );
}