"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Davetiye" },
  { href: "/anket", label: "Zorunlu Anket" },
  { href: "/sonuclar", label: "Cevaplar" },
] as const;

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[#e7e1d8] bg-[#faf7f2]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-[#181615] no-underline"
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#181615] text-[#faf7f2] transition-transform duration-150 group-hover:scale-105"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </span>
          <span className="font-serif text-base font-bold tracking-tight sm:text-lg">
            Suna&apos;nın Savunması
          </span>
        </Link>

        <nav aria-label="Ana gezinme" className="flex items-center gap-1 sm:gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex min-h-10 items-center rounded-full px-3.5 py-2 text-sm font-semibold transition-colors sm:px-4 ${
                  isActive
                    ? "bg-[#181615] text-[#faf7f2]"
                    : "text-[#57524d] hover:bg-[#ede6db] hover:text-[#181615]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
