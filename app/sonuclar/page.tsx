import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { SurveyResultsList } from "@/components/SurveyResultsList";

export const metadata: Metadata = {
  title: "Anket Sonuçları | Suna'nın Tez Savunması",
  description:
    "Suna'nın zorunlu sevgi anketine herkesin verdiği cevaplar ve savunma kıyafet önerileri.",
};

function ResultsSkeleton() {
  return (
    <div className="space-y-6" aria-busy="true" aria-label="Sonuçlar yükleniyor">
      <div className="grid gap-4 sm:grid-cols-3">
        {[0, 1, 2].map((item) => (
          <div
            key={item}
            className="h-24 animate-pulse rounded-2xl border border-[#e7e1d8] bg-white"
          />
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {[0, 1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-52 animate-pulse rounded-2xl border border-[#e7e1d8] bg-white"
          />
        ))}
      </div>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h1 className="font-serif text-3xl font-black tracking-tight text-[#181615] sm:text-4xl">
            Halka Açık Anket Sonuçları
          </h1>
          <p className="mt-2 max-w-2xl text-base text-[#57524d]">
            Suna&apos;ya duyulan tartışmasız sevginin ve savunma kombini fikirlerinin canlı arşivi.
          </p>
        </div>

        <Link
          href="/anket"
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-[#b91c1c] px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#991b1b]"
        >
          Sen de Cevapla
        </Link>
      </div>

      <Suspense fallback={<ResultsSkeleton />}>
        <SurveyResultsList />
      </Suspense>
    </main>
  );
}
