import Link from "next/link";
import { connection } from "next/server";
import { readSurveys } from "@/lib/surveys";

function formatTurkishDate(isoDate: string): string {
  try {
    return new Intl.DateTimeFormat("tr-TR", {
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(isoDate));
  } catch {
    return "Yakın zamanda";
  }
}

export async function SurveyResultsList() {
  await connection();
  const entries = await readSurveys();

  if (entries.length === 0) {
    return (
      <div className="rounded-3xl border border-[#e7e1d8] bg-white p-10 text-center">
        <h2 className="font-serif text-2xl font-bold text-[#181615]">
          Henüz kimse anketi doldurmamış!
        </h2>
        <p className="mt-2 text-sm text-[#57524d]">
          İlk cesur gönüllü sen ol ve Suna&apos;nın savunma kıyafetini belirle.
        </p>
        <Link
          href="/anket"
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-[#b91c1c] px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#991b1b]"
        >
          Ankete Katıl
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Compact Stats Bar */}
      <dl className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-[#e7e1d8] bg-white p-5">
          <dt className="text-xs font-bold tracking-wide text-[#57524d] uppercase">
            Toplam Yanıt
          </dt>
          <dd className="mt-1 font-serif text-3xl font-black text-[#181615] tabular-nums">
            {entries.length}
          </dd>
        </div>
        <div className="rounded-2xl border border-[#e7e1d8] bg-white p-5">
          <dt className="text-xs font-bold tracking-wide text-[#57524d] uppercase">
            Ortalama Sevgi Puanı
          </dt>
          <dd className="mt-1 font-serif text-3xl font-black text-[#15803d] tabular-nums">
            10.0 / 10
          </dd>
        </div>
        <div className="rounded-2xl border border-[#e7e1d8] bg-white p-5">
          <dt className="text-xs font-bold tracking-wide text-[#57524d] uppercase">
            Sümüklüböcek Sadakati
          </dt>
          <dd className="mt-1 font-serif text-3xl font-black text-[#b91c1c] tabular-nums">
            %100
          </dd>
        </div>
      </dl>

      {/* Cards Grid */}
      <div className="grid gap-5 md:grid-cols-2">
        {entries.map((entry) => (
          <article
            key={entry.id}
            className="flex flex-col justify-between rounded-2xl border border-[#e7e1d8] bg-white p-6 shadow-[0_8px_24px_rgba(24,22,21,0.04)]"
          >
            <div>
              <div className="flex items-start justify-between gap-3 border-b border-[#f0ebe3] pb-4">
                <div>
                  <h2 className="font-serif text-xl font-bold text-[#181615]">
                    {entry.fullName}
                  </h2>
                  <time
                    dateTime={entry.createdAt}
                    className="mt-0.5 block font-mono text-xs text-[#78716c]"
                  >
                    {formatTurkishDate(entry.createdAt)}
                  </time>
                </div>
                <span className="shrink-0 rounded-full bg-[#dcfce7] px-3 py-1 font-mono text-xs font-extrabold text-[#15803d] tabular-nums">
                  Sevgi: {entry.loveScore}/10
                </span>
              </div>

              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="text-xs font-bold tracking-wide text-[#57524d] uppercase">
                    Sümüklüböcek olsam sever miydin?
                  </dt>
                  <dd className="mt-1 text-base font-bold text-[#b91c1c]">
                    &ldquo;{entry.slugAnswer}&rdquo;
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-bold tracking-wide text-[#57524d] uppercase">
                    Savunma Kıyafet Önerisi
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-[#181615]">
                    {entry.outfitAdvice}
                  </dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
