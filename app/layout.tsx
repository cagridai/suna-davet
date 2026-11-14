import type { Metadata } from "next";
import {
  Fraunces,
  JetBrains_Mono,
  Playfair_Display,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/SiteNav";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Suna'nın Tez Savunması | 8 Aralık — Akdeniz Üniversitesi",
  description:
    "Dopamin reseptör agonisti olan apomorfinin sol ventriküler miyositlerin uyarılma kasılma dinamikleri üzerine etkileri — Tez savunma davetiyesi ve zorunlu sevgi anketi.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${plusJakarta.variable} ${fraunces.variable} ${playfair.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#faf7f2] text-[#181615]">
        <SiteNav />
        <div className="flex flex-1 flex-col">{children}</div>
        <footer className="border-t border-[#e7e1d8] bg-[#f4efe6] py-6 text-center text-xs text-[#57524d]">
          <div className="mx-auto max-w-5xl px-4">
            <p className="font-medium text-[#181615]">
              8 Aralık &bull; Akdeniz Üniversitesi Biyofizik Anabilim Dalı
            </p>
            <p className="mt-1">
              Bu site Suna&apos;nın savunma stresi altındaki sol ventriküler miyositleri tarafından onaylanmıştır.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
