// Icône SVG pour Tipeee
export default function TipeeeIcon({ className = "w-6 h-6" }: { readonly className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#FF3366" />
      <path d="M16 23s-7-4.35-7-9.5A4.5 4.5 0 0 1 16 12a4.5 4.5 0 0 1 7 2.5C23 18.65 16 23 16 23z" fill="white"/>
    </svg>
  );
}
