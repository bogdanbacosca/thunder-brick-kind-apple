export function Mark({ className }: { className?: string }) {
  return (
    <img
      src="/logo.svg"
      alt=""
      className={className}
      width={160}
      height={60}
      decoding="async"
    />
  );
}
