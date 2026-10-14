"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#991b1b] text-white shadow-lg shadow-red-900/20">
            E
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.25em] text-[#991b1b]">
              ETHIXWEB
            </p>
            <p className="text-xs text-neutral-500">India-first digital growth</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition ${
                pathname === link.href
                  ? "text-[#991b1b]"
                  : "text-neutral-700 hover:text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/admin/login"
            className="rounded-full border border-black/10 px-4 py-3 text-sm font-semibold text-black transition hover:border-[#991b1b] hover:text-[#991b1b]"
          >
            Admin Login
          </Link>

          <Link
            href="/contact"
            className="rounded-full bg-[#991b1b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7f1d1d]"
          >
            Book a Call
          </Link>
        </div>

        <button className="rounded-full border border-black/10 p-2 md:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}