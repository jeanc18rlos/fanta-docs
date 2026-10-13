export function FantaBrand() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <img src="/brand/fanta-mark-dark.svg" width="24" height="29" alt="" className="dark:hidden" />
      <img src="/brand/fanta-mark-light.svg" width="24" height="29" alt="" className="hidden dark:block" />
      <span className="text-lg font-semibold tracking-tight">Fanta<span className="ml-2 text-xs font-normal tracking-normal text-fd-muted-foreground"> docs</span></span>
    </span>
  );
}
