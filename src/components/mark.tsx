export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="9.25" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M16 1.5v5.2M16 25.3v5.2M1.5 16h5.2M25.3 16h5.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="16" cy="16" r="1.4" fill="currentColor" />
    </svg>
  );
}
