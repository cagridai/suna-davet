"use client";

import Link from "next/link";
import { useState } from "react";
import {
  INVITATION_DESIGNS,
  THESIS_TITLE,
  type InvitationDesign,
} from "@/lib/designs";
import { InvitationArtwork } from "@/components/InvitationArtwork";

function DesignCard({ design }: { design: InvitationDesign }) {
  switch (design.id) {
    case "dogum-gunu":
      return (
        <article className="relative overflow-hidden rounded-3xl border-2 border-[#f43f5e]/30 bg-[#fff9f5] p-6 text-[#3b1219] shadow-[0_18px_45px_rgba(244,63,94,0.12)] sm:p-10">
          <div className="flex flex-col items-center text-center">
            <InvitationArtwork id="dogum-gunu" />
            <span className="mt-2 inline-block rounded-full bg-[#ffe4e6] px-4 py-1 text-xs font-extrabold tracking-wide text-[#be123c]">
              {design.badgeText}
            </span>
            <h1 className="mt-4 max-w-2xl font-serif text-3xl font-black tracking-tight text-[#881337] sm:text-5xl">
              {design.headline}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#6b2135] sm:text-lg">
              {design.lead}
            </p>

            <div className="mt-7 w-full max-w-2xl rounded-2xl border border-[#fecdd3] bg-white p-5 text-left shadow-sm">
              <p className="text-xs font-bold tracking-wider text-[#be123c] uppercase">
                Partinin Bilimsel Bahanesi (Tez Konusu)
              </p>
              <p className="mt-2 font-serif text-lg font-semibold leading-snug text-[#181615] sm:text-xl">
                &ldquo;{THESIS_TITLE}&rdquo;
              </p>
            </div>

            <dl className="mt-6 grid w-full max-w-2xl gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#fef3c7] p-4 text-left">
                <dt className="text-xs font-bold text-[#92400e] uppercase">
                  {design.metaPrimaryLabel}
                </dt>
                <dd className="mt-1 font-serif text-xl font-bold text-[#451a03]">
                  {design.metaPrimaryValue}
                </dd>
              </div>
              <div className="rounded-2xl bg-[#e0f2fe] p-4 text-left">
                <dt className="text-xs font-bold text-[#075985] uppercase">
                  {design.metaSecondaryLabel}
                </dt>
                <dd className="mt-1 font-serif text-lg font-bold text-[#0c4a6e]">
                  {design.metaSecondaryValue}
                </dd>
              </div>
            </dl>

            <p className="mt-6 max-w-xl text-sm text-[#6b2135]">{design.details}</p>
            <p className="mt-3 text-sm font-bold text-[#be123c]">{design.rsvpNote}</p>
          </div>
        </article>
      );

    case "vefat-ilani":
      return (
        <article className="border-4 border-[#1c1917] bg-[#f4f1ea] p-2 text-[#1c1917] shadow-[0_14px_35px_rgba(28,25,23,0.14)]">
          <div className="border border-[#1c1917] px-6 py-8 text-center sm:px-12 sm:py-10">
            <div className="flex justify-center">
              <InvitationArtwork id="vefat-ilani" />
            </div>
            <h1 className="mt-4 font-display text-3xl font-black tracking-tight uppercase sm:text-5xl">
              {design.headline}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl font-serif text-base leading-relaxed text-[#292524] sm:text-lg">
              {design.lead}
            </p>

            <div className="mx-auto my-7 max-w-2xl border-y-2 border-[#1c1917] py-5">
              <p className="font-mono text-xs font-bold tracking-widest uppercase">
                Merhumun Son Tez Çalışması
              </p>
              <p className="mt-2 font-serif text-lg font-bold italic sm:text-xl">
                &ldquo;{THESIS_TITLE}&rdquo;
              </p>
            </div>

            <dl className="mx-auto grid max-w-2xl gap-4 border-b border-[#1c1917]/40 pb-6 sm:grid-cols-2">
              <div>
                <dt className="font-mono text-xs font-bold uppercase text-[#57534e]">
                  {design.metaPrimaryLabel}
                </dt>
                <dd className="mt-1 font-serif text-2xl font-bold">
                  {design.metaPrimaryValue}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs font-bold uppercase text-[#57534e]">
                  {design.metaSecondaryLabel}
                </dt>
                <dd className="mt-1 font-serif text-lg font-bold">
                  {design.metaSecondaryValue}
                </dd>
              </div>
            </dl>

            <p className="mx-auto mt-6 max-w-xl font-serif text-sm text-[#44403c]">
              {design.details}
            </p>
            <p className="mt-3 font-serif text-sm font-bold">{design.rsvpNote}</p>
          </div>
        </article>
      );

    case "bilimsel-makale":
      return (
        <article className="rounded-xl border border-[#cbd5e1] bg-white p-6 text-[#0f172a] shadow-[0_12px_32px_rgba(15,23,42,0.08)] sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e2e8f0] pb-4 font-mono text-xs text-[#475569]">
            <span>JOURNAL OF SUNA SURVIVAL STUDIES &bull; VOL. 2026</span>
            <span className="rounded bg-[#e0f2fe] px-2.5 py-1 font-bold text-[#0369a1]">
              {design.badgeText}
            </span>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-[#0f172a] sm:text-4xl">
                {design.headline}
              </h1>
              <p className="mt-3 text-sm font-semibold text-[#334155]">
                Baş Araştırmacı: Suna &bull; Deney Durumu: Kafein Bağımlı
              </p>

              <div className="mt-5 rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4">
                <p className="font-mono text-xs font-bold text-[#0369a1] uppercase">
                  Tez Başlığı / Manuscript Title
                </p>
                <p className="mt-1.5 font-serif text-base font-semibold leading-snug text-[#0f172a] sm:text-lg">
                  {THESIS_TITLE}
                </p>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-[#334155] sm:text-base">
                {design.lead}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                {design.details}
              </p>
            </div>

            <aside className="flex flex-col justify-between gap-4 rounded-lg border border-[#cbd5e1] bg-[#f8fafc] p-5">
              <div>
                <p className="font-mono text-xs font-bold text-[#475569] uppercase">
                  Aksiyon Potansiyeli Kaydı
                </p>
                <div className="mt-2">
                  <InvitationArtwork id="bilimsel-makale" />
                </div>
              </div>

              <dl className="space-y-3 border-t border-[#e2e8f0] pt-4 text-sm">
                <div>
                  <dt className="font-mono text-xs text-[#64748b] uppercase">
                    {design.metaPrimaryLabel}
                  </dt>
                  <dd className="font-mono text-lg font-bold text-[#0f172a]">
                    {design.metaPrimaryValue}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-[#64748b] uppercase">
                    {design.metaSecondaryLabel}
                  </dt>
                  <dd className="font-semibold text-[#0f172a]">
                    {design.metaSecondaryValue}
                  </dd>
                </div>
              </dl>

              <p className="border-t border-[#e2e8f0] pt-3 font-mono text-xs text-[#0369a1]">
                {design.rsvpNote}
              </p>
            </aside>
          </div>
        </article>
      );

    case "cicek-bahcesi":
      return (
        <article className="rounded-[2rem] border border-[#bef264] bg-[#f7fee7] p-3 text-[#1a2e05] shadow-[0_16px_40px_rgba(77,124,15,0.12)] sm:p-4">
          <div className="rounded-[1.5rem] border border-[#84cc16]/50 bg-[#fffdf9] px-6 py-8 text-center sm:px-12 sm:py-10">
            <div className="flex justify-center">
              <InvitationArtwork id="cicek-bahcesi" />
            </div>
            <h1 className="mt-3 font-display text-3xl font-bold italic text-[#365314] sm:text-5xl">
              {design.headline}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#4d7c0f] sm:text-lg">
              {design.lead}
            </p>

            <div className="mx-auto mt-7 max-w-2xl rounded-2xl border border-[#d9f99d] bg-[#f7fee7] p-6">
              <p className="text-xs font-bold tracking-wider text-[#4d7c0f] uppercase">
                Aşkla Yazılmış Tez Başlığı
              </p>
              <p className="mt-2 font-display text-lg font-semibold leading-snug text-[#1a2e05] sm:text-xl">
                &ldquo;{THESIS_TITLE}&rdquo;
              </p>
            </div>

            <dl className="mx-auto mt-6 grid max-w-2xl gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#fbcfe8] bg-[#fdf2f8] p-4">
                <dt className="text-xs font-bold text-[#9d174d] uppercase">
                  {design.metaPrimaryLabel}
                </dt>
                <dd className="mt-1 font-display text-xl font-bold text-[#831843]">
                  {design.metaPrimaryValue}
                </dd>
              </div>
              <div className="rounded-xl border border-[#d9f99d] bg-[#ecfccb] p-4">
                <dt className="text-xs font-bold text-[#3f6212] uppercase">
                  {design.metaSecondaryLabel}
                </dt>
                <dd className="mt-1 font-display text-lg font-bold text-[#1a2e05]">
                  {design.metaSecondaryValue}
                </dd>
              </div>
            </dl>

            <p className="mx-auto mt-6 max-w-xl text-sm text-[#3f6212]">
              {design.details}
            </p>
            <p className="mt-3 font-display text-base font-semibold italic text-[#9d174d]">
              {design.rsvpNote}
            </p>
          </div>
        </article>
      );

    case "son-dakika":
      return (
        <article className="overflow-hidden rounded-2xl border-2 border-[#ef4444] bg-[#090d16] text-[#f8fafc] shadow-[0_20px_48px_rgba(220,38,38,0.22)]">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#dc2626] px-6 py-3">
            <div className="flex items-center gap-2.5">
              <span className="h-3 w-3 rounded-full bg-white animate-pulse" aria-hidden="true" />
              <span className="font-mono text-sm font-black tracking-wider uppercase text-white">
                {design.badgeText} &bull; BİYOFİZİK TV
              </span>
            </div>
            <span className="font-mono text-xs font-bold text-[#fee2e2]">
              BÜLTEN NO: 08-12
            </span>
          </div>

          <div className="p-6 sm:p-10">
            <InvitationArtwork id="son-dakika" />
            <h1 className="mt-4 text-3xl font-black tracking-tight uppercase text-white sm:text-5xl">
              {design.headline}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#cbd5e1] sm:text-lg">
              {design.lead}
            </p>

            <div className="mt-6 rounded-xl border border-[#334155] bg-[#111827] p-5">
              <p className="font-mono text-xs font-bold text-[#f87171] uppercase">
                Dosya Konusu / Olay Özeti
              </p>
              <p className="mt-2 font-serif text-lg font-bold leading-snug text-white sm:text-xl">
                &ldquo;{THESIS_TITLE}&rdquo;
              </p>
            </div>

            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-[#1e293b] p-4">
                <dt className="font-mono text-xs font-bold text-[#94a3b8] uppercase">
                  {design.metaPrimaryLabel}
                </dt>
                <dd className="mt-1 text-2xl font-black text-[#f87171]">
                  {design.metaPrimaryValue}
                </dd>
              </div>
              <div className="rounded-xl bg-[#1e293b] p-4">
                <dt className="font-mono text-xs font-bold text-[#94a3b8] uppercase">
                  {design.metaSecondaryLabel}
                </dt>
                <dd className="mt-1 text-lg font-bold text-white">
                  {design.metaSecondaryValue}
                </dd>
              </div>
            </dl>

            <p className="mt-6 text-sm text-[#94a3b8]">{design.details}</p>
          </div>

          <div className="overflow-hidden border-t border-[#dc2626] bg-[#7f1d1d] py-2.5 text-xs font-bold tracking-wide text-white uppercase">
            <div className="ticker-track">
              <span className="px-6">
                {design.rsvpNote} &bull; 8 ARALIK AKDENİZ ÜNİVERSİTESİ BİYOFİZİK ANABİLİM DALI &bull; ZORUNLU SEVGI ANKETİ YAYINDA &bull;
              </span>
              <span className="px-6" aria-hidden="true">
                {design.rsvpNote} &bull; 8 ARALIK AKDENİZ ÜNİVERSİTESİ BİYOFİZİK ANABİLİM DALI &bull; ZORUNLU SEVGI ANKETİ YAYINDA &bull;
              </span>
            </div>
          </div>
        </article>
      );

    case "sirk-afisi":
      return (
        <article className="overflow-hidden rounded-2xl border-4 border-[#991b1b] bg-[#fef3c7] text-[#450a0a] shadow-[0_18px_42px_rgba(153,27,27,0.18)]">
          <div
            aria-hidden="true"
            className="h-5 w-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, #dc2626 0 24px, #fffbeb 24px 48px)",
            }}
          />
          <div className="m-3 rounded-xl border-2 border-dashed border-[#b91c1c] bg-[#fffbeb] p-6 text-center sm:m-5 sm:p-9">
            <div className="flex justify-center">
              <InvitationArtwork id="sirk-afisi" />
            </div>
            <span className="mt-2 inline-block rounded bg-[#dc2626] px-3 py-1 text-xs font-black tracking-widest text-white uppercase">
              {design.badgeText}
            </span>
            <h1 className="mt-4 font-display text-3xl font-black tracking-tight text-[#7f1d1d] uppercase sm:text-5xl">
              {design.headline}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base font-medium text-[#78350f] sm:text-lg">
              {design.lead}
            </p>

            <div className="mx-auto mt-6 max-w-2xl rounded-xl border-2 border-[#f59e0b] bg-[#fef3c7] p-5">
              <p className="text-xs font-black tracking-wider text-[#92400e] uppercase">
                Gecenin Büyük Numarası (Tez Konusu)
              </p>
              <p className="mt-2 font-serif text-lg font-bold text-[#450a0a] sm:text-xl">
                &ldquo;{THESIS_TITLE}&rdquo;
              </p>
            </div>

            <dl className="mx-auto mt-6 grid max-w-2xl gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#b91c1c]/30 bg-white p-4">
                <dt className="text-xs font-black text-[#991b1b] uppercase">
                  {design.metaPrimaryLabel}
                </dt>
                <dd className="mt-1 font-display text-2xl font-black text-[#dc2626]">
                  {design.metaPrimaryValue}
                </dd>
              </div>
              <div className="rounded-xl border border-[#b91c1c]/30 bg-white p-4">
                <dt className="text-xs font-black text-[#991b1b] uppercase">
                  {design.metaSecondaryLabel}
                </dt>
                <dd className="mt-1 font-display text-lg font-bold text-[#450a0a]">
                  {design.metaSecondaryValue}
                </dd>
              </div>
            </dl>

            <p className="mx-auto mt-6 max-w-xl text-sm text-[#78350f]">{design.details}</p>
            <p className="mt-3 text-sm font-extrabold text-[#991b1b]">{design.rsvpNote}</p>
          </div>
        </article>
      );

    case "indirim-katalogu":
      return (
        <article className="rounded-2xl border-4 border-[#dc2626] bg-[#fef08a] p-5 text-[#181615] shadow-[0_18px_40px_rgba(220,38,38,0.16)] sm:p-8">
          <div className="flex flex-col items-start justify-between gap-4 rounded-xl bg-[#dc2626] p-5 text-white sm:flex-row sm:items-center">
            <div>
              <span className="inline-block rounded bg-[#facc15] px-2.5 py-0.5 text-xs font-black text-[#181615]">
                {design.badgeText}
              </span>
              <h1 className="mt-2 text-2xl font-black tracking-tight uppercase sm:text-4xl">
                {design.headline}
              </h1>
            </div>
            <InvitationArtwork id="indirim-katalogu" />
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border-2 border-[#181615] bg-white p-5 sm:col-span-2">
              <p className="text-xs font-black text-[#dc2626] uppercase">
                Aktüel Ürün Açıklaması (Tez Başlığı)
              </p>
              <p className="mt-2 text-lg font-extrabold leading-snug text-[#181615] sm:text-xl">
                {THESIS_TITLE}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#44403c]">{design.lead}</p>
              <p className="mt-2 text-sm font-medium text-[#57534e]">{design.details}</p>
            </div>

            <div className="flex flex-col justify-between gap-3 rounded-xl border-2 border-[#181615] bg-[#1d4ed8] p-5 text-white">
              <dl className="space-y-4">
                <div>
                  <dt className="text-xs font-bold text-[#bfdbfe] uppercase">
                    {design.metaPrimaryLabel}
                  </dt>
                  <dd className="mt-1 text-3xl font-black text-[#fde047]">
                    {design.metaPrimaryValue}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold text-[#bfdbfe] uppercase">
                    {design.metaSecondaryLabel}
                  </dt>
                  <dd className="mt-1 text-base font-bold text-white">
                    {design.metaSecondaryValue}
                  </dd>
                </div>
              </dl>
              <p className="rounded bg-white/15 p-2.5 text-xs font-bold text-[#fef08a]">
                {design.rsvpNote}
              </p>
            </div>
          </div>
        </article>
      );

    case "retro-sistem":
      return (
        <article className="rounded-xl bg-[#008080] p-4 sm:p-8">
          <div className="mx-auto max-w-3xl border-2 border-t-[#ffffff] border-l-[#ffffff] border-r-[#404040] border-b-[#404040] bg-[#d4d0c8] p-1 text-[#18181b] shadow-[6px_6px_0_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between bg-[#000080] px-3 py-1.5 text-white">
              <span className="font-mono text-xs font-bold sm:text-sm">
                {design.headline}
              </span>
              <div className="flex items-center gap-1" aria-hidden="true">
                <span className="flex h-5 w-5 items-center justify-center border border-t-white border-l-white border-r-[#404040] border-b-[#404040] bg-[#d4d0c8] text-xs font-bold text-black">
                  _
                </span>
                <span className="flex h-5 w-5 items-center justify-center border border-t-white border-l-white border-r-[#404040] border-b-[#404040] bg-[#d4d0c8] text-xs font-bold text-black">
                  ×
                </span>
              </div>
            </div>

            <div className="p-5 sm:p-7">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <InvitationArtwork id="retro-sistem" />
                <div>
                  <h1 className="font-mono text-lg font-extrabold text-[#18181b] sm:text-2xl">
                    {design.badgeText}: SAVUNMA.EXE BAŞLATILDI
                  </h1>
                  <p className="mt-1.5 font-mono text-sm text-[#27272a]">
                    {design.lead}
                  </p>
                </div>
              </div>

              <div className="mt-5 border-2 border-t-[#404040] border-l-[#404040] border-r-white border-b-white bg-white p-4 font-mono">
                <p className="text-xs font-bold text-[#000080]">
                  C:\SUNA\TEZ\BASLIK.TXT
                </p>
                <p className="mt-1.5 text-sm font-bold leading-relaxed text-[#18181b] sm:text-base">
                  {THESIS_TITLE}
                </p>
              </div>

              <dl className="mt-4 grid gap-3 font-mono text-sm sm:grid-cols-2">
                <div className="border border-[#808080] bg-[#ece9d8] p-3">
                  <dt className="text-xs font-bold text-[#52525b]">
                    {design.metaPrimaryLabel}
                  </dt>
                  <dd className="mt-1 text-base font-extrabold text-[#000080]">
                    {design.metaPrimaryValue}
                  </dd>
                </div>
                <div className="border border-[#808080] bg-[#ece9d8] p-3">
                  <dt className="text-xs font-bold text-[#52525b]">
                    {design.metaSecondaryLabel}
                  </dt>
                  <dd className="mt-1 text-sm font-bold text-[#18181b]">
                    {design.metaSecondaryValue}
                  </dd>
                </div>
              </dl>

              <p className="mt-4 font-mono text-xs text-[#27272a]">{design.details}</p>
              <p className="mt-2 font-mono text-xs font-bold text-[#991b1b]">
                {design.rsvpNote}
              </p>
            </div>
          </div>
        </article>
      );

    case "gerilim-afisi":
      return (
        <article
          className="relative overflow-hidden rounded-2xl border border-[#450a0a] bg-[#09090b] p-7 text-[#f4f4f5] shadow-[0_24px_56px_rgba(0,0,0,0.45)] sm:p-12"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 15%, rgba(185, 28, 28, 0.28), transparent 60%)",
          }}
        >
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <InvitationArtwork id="gerilim-afisi" />
            <span className="mt-2 font-mono text-xs font-bold tracking-[0.25em] text-[#f87171] uppercase">
              {design.badgeText}
            </span>
            <h1 className="mt-4 font-display text-3xl font-black tracking-tight text-white uppercase sm:text-5xl">
              {design.headline}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#d4d4d8] sm:text-lg">
              {design.lead}
            </p>

            <div className="mt-7 w-full rounded-xl border border-[#7f1d1d] bg-[#18181b]/90 p-5">
              <p className="font-mono text-xs font-bold tracking-widest text-[#f87171] uppercase">
                Senaryo Özeti (Tez Konusu)
              </p>
              <p className="mt-2 font-serif text-lg font-semibold text-white sm:text-xl">
                &ldquo;{THESIS_TITLE}&rdquo;
              </p>
            </div>

            <dl className="mt-6 grid w-full gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#27272a] bg-[#18181b] p-4">
                <dt className="font-mono text-xs text-[#a1a1aa] uppercase">
                  {design.metaPrimaryLabel}
                </dt>
                <dd className="mt-1 font-display text-2xl font-bold text-[#ef4444]">
                  {design.metaPrimaryValue}
                </dd>
              </div>
              <div className="rounded-xl border border-[#27272a] bg-[#18181b] p-4">
                <dt className="font-mono text-xs text-[#a1a1aa] uppercase">
                  {design.metaSecondaryLabel}
                </dt>
                <dd className="mt-1 text-base font-bold text-white">
                  {design.metaSecondaryValue}
                </dd>
              </div>
            </dl>

            <p className="mt-6 text-sm text-[#a1a1aa]">{design.details}</p>
            <p className="mt-4 border-t border-[#27272a] pt-4 font-mono text-[11px] tracking-[0.18em] text-[#71717a] uppercase">
              BAŞROL: SUNA &bull; KONUK: APOMORFİN &bull; {design.rsvpNote}
            </p>
          </div>
        </article>
      );

    case "resmi-tebligat":
      return (
        <article className="rounded-lg border-2 border-[#44403c] bg-[#fdfbf7] p-6 text-[#1c1917] shadow-[0_14px_34px_rgba(28,25,23,0.12)] sm:p-10">
          <div className="flex flex-col justify-between gap-4 border-b-2 border-[#1c1917] pb-5 sm:flex-row sm:items-center">
            <div>
              <p className="font-mono text-xs font-bold tracking-wider text-[#57534e] uppercase">
                T.C. SUNA SAVUNMA İŞLERİ BAŞKANLIĞI
              </p>
              <h1 className="mt-1 font-serif text-2xl font-black text-[#1c1917] sm:text-3xl">
                {design.headline}
              </h1>
            </div>
            <InvitationArtwork id="resmi-tebligat" />
          </div>

          <p className="mt-5 font-serif text-base leading-relaxed text-[#292524] sm:text-lg">
            {design.lead}
          </p>

          <div className="mt-6 border border-[#a8a29e] bg-white p-5">
            <p className="font-mono text-xs font-bold text-[#78716c] uppercase">
              Dava / Tez Konusu
            </p>
            <p className="mt-2 font-serif text-lg font-bold text-[#1c1917] sm:text-xl">
              {THESIS_TITLE}
            </p>
          </div>

          <dl className="mt-5 grid border border-[#a8a29e] bg-[#f5f5f4] sm:grid-cols-2">
            <div className="border-b border-[#a8a29e] p-4 sm:border-r sm:border-b-0">
              <dt className="font-mono text-xs font-bold text-[#57534e] uppercase">
                {design.metaPrimaryLabel}
              </dt>
              <dd className="mt-1 font-mono text-xl font-bold text-[#b91c1c]">
                {design.metaPrimaryValue}
              </dd>
            </div>
            <div className="p-4">
              <dt className="font-mono text-xs font-bold text-[#57534e] uppercase">
                {design.metaSecondaryLabel}
              </dt>
              <dd className="mt-1 font-serif text-base font-bold text-[#1c1917]">
                {design.metaSecondaryValue}
              </dd>
            </div>
          </dl>

          <p className="mt-5 font-serif text-sm text-[#44403c]">{design.details}</p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#d6d3d1] pt-4">
            <p className="font-mono text-xs font-bold text-[#b91c1c]">
              {design.rsvpNote}
            </p>
            <span className="border border-[#1c1917] px-3 py-1 font-mono text-xs font-bold">
              {design.badgeText}
            </span>
          </div>
        </article>
      );
  }
}

export function InvitationStage() {
  const [designIndex, setDesignIndex] = useState(0);
  const activeDesign = INVITATION_DESIGNS[designIndex];

  const handleNextDesign = () => {
    setDesignIndex((prev) => (prev + 1) % INVITATION_DESIGNS.length);
  };

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 sm:py-10">
      {/* Switcher Control Bar */}
      <section
        aria-label="Davetiye tasarımı seçici"
        className="mb-6 rounded-2xl border border-[#e7e1d8] bg-white p-4 shadow-sm sm:p-5"
      >
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="font-mono text-xs font-bold text-[#b91c1c] uppercase">
              Tasarım {designIndex + 1} / {INVITATION_DESIGNS.length} &bull;{" "}
              {activeDesign.name}
            </p>
            <p className="mt-0.5 text-sm text-[#57524d]">
              {activeDesign.buttonHint} &mdash; başka bir konsept görmek için butona bas.
            </p>
          </div>

          <button
            type="button"
            onClick={handleNextDesign}
            className="inline-flex min-h-12 shrink-0 cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#181615] px-6 py-3 text-sm font-bold text-[#faf7f2] shadow-sm transition-all duration-150 hover:bg-[#b91c1c] active:scale-[0.98]"
          >
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
              <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
              <path d="M16 16h5v5" />
            </svg>
            Tasarımı Değiştir
          </button>
        </div>

        {/* Direct 1-10 theme jumper */}
        <div className="mt-4 flex flex-wrap gap-1.5 border-t border-[#f0ebe3] pt-3">
          {INVITATION_DESIGNS.map((design, idx) => {
            const isSelected = idx === designIndex;
            return (
              <button
                key={design.id}
                type="button"
                onClick={() => setDesignIndex(idx)}
                aria-pressed={isSelected}
                className={`inline-flex min-h-9 cursor-pointer items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                  isSelected
                    ? "bg-[#b91c1c] text-white"
                    : "bg-[#f4efe6] text-[#57524d] hover:bg-[#e7dfd3] hover:text-[#181615]"
                }`}
              >
                {idx + 1}. {design.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* Active Invitation Card */}
      <DesignCard design={activeDesign} />

      {/* Action Bar to Survey & Results */}
      <section
        aria-label="Sonraki adımlar"
        className="mt-8 flex flex-col items-stretch justify-between gap-4 rounded-2xl border border-[#e7e1d8] bg-white p-6 shadow-sm sm:flex-row sm:items-center"
      >
        <div>
          <h2 className="font-serif text-xl font-bold text-[#181615]">
            Davetiyeyi beğendin mi? Şimdi sıra ankette!
          </h2>
          <p className="mt-1 text-sm text-[#57524d]">
            Savunmaya gelmeden önce Suna&apos;nın kritik 3 sorusunu yanıtlamak zorundasın.
          </p>
        </div>

        <div className="flex flex-col gap-2.5 sm:flex-row">
          <Link
            href="/anket"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#b91c1c] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#991b1b]"
          >
            Ankete Git
          </Link>
          <Link
            href="/sonuclar"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d6cfc4] bg-[#faf7f2] px-6 py-3 text-sm font-bold text-[#181615] transition-colors hover:bg-[#ede6db]"
          >
            Sonuçları Gör
          </Link>
        </div>
      </section>
    </div>
  );
}
