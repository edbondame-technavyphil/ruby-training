// src/components/Navbar.tsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="border-b border-ink/10">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <Link to="/" className="font-display text-2xl tracking-tight">
          Field Notes
        </Link>
        <Link
          to="/new"
          className="rounded-full bg-moss px-4 py-2 text-sm text-paper transition-colors hover:bg-ink"
        >
          Write a post
        </Link>
      </div>
    </header>
  );
}
