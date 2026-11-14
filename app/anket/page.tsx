import type { Metadata } from "next";
import { SurveyForm } from "@/components/SurveyForm";

export const metadata: Metadata = {
  title: "Zorunlu Sevgi Anketi | Suna'nın Tez Savunması",
  description:
    "Suna'nın 8 Aralık tez savunması öncesi zorunlu sevgi, sümüklüböcek sadakati ve kıyafet anketi.",
};

export default function SurveyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-black tracking-tight text-[#181615] sm:text-4xl">
          Savunma Öncesi Zorunlu Anket
        </h1>
        <p className="mt-2.5 text-base text-[#57524d]">
          8 Aralık&apos;ta Akdeniz Üniversitesi Biyofizik Anabilim Dalı&apos;nda yerini almadan önce
          Suna&apos;nın hayati sorularını yanıtlaman gerekiyor.
        </p>
      </div>

      <SurveyForm />
    </main>
  );
}
