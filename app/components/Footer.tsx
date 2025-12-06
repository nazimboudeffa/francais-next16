
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-zinc-200 dark:bg-zinc-900 text-center p-4 mt-8">
      <Link href="/about" className="text-blue-700 dark:text-blue-300 hover:underline font-medium">
        À propos
      </Link>
    </footer>
  );
}

export default Footer;

