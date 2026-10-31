export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-5">
      <p className="font-figtree font-medium text-[12px] leading-5 tracking-[0.2em] text-primary-muted sm:text-sm">
        {children}
      </p>
      <span
        aria-hidden="true"
        className="h-px w-12 shrink-0 bg-primary-muted/60"
      />
    </div>
  );
}
