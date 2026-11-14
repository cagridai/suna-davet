"use client";

import Link from "next/link";
import { useActionState, useEffect, useId, useRef, useState } from "react";
import {
  submitSurveyAction,
  type SubmitSurveyState,
} from "@/app/anket/actions";
import {
  OUTFIT_MAX_LENGTH,
  SLUG_OPTIONS,
  validateSurveyInput,
  type SurveyValidationErrors,
} from "@/lib/validation";

const INITIAL_STATE: SubmitSurveyState = { status: "idle" };

export function SurveyForm() {
  const [state, formAction, isPending] = useActionState(
    submitSurveyAction,
    INITIAL_STATE
  );

  const [fullName, setFullName] = useState("");
  const [fullNameTouched, setFullNameTouched] = useState(false);

  const [loveScore, setLoveScore] = useState(5);
  const [loveTouched, setLoveTouched] = useState(false);

  const [slugAnswer, setSlugAnswer] = useState("");
  const [slugTouched, setSlugTouched] = useState(false);

  const [outfitAdvice, setOutfitAdvice] = useState("");
  const [outfitTouched, setOutfitTouched] = useState(false);

  const [submitAttempted, setSubmitAttempted] = useState(false);

  const fullNameRef = useRef<HTMLInputElement>(null);
  const loveSliderRef = useRef<HTMLInputElement>(null);
  const firstRadioRef = useRef<HTMLInputElement>(null);
  const outfitRef = useRef<HTMLTextAreaElement>(null);

  const fullNameId = useId();
  const fullNameErrorId = useId();
  const loveId = useId();
  const loveHintId = useId();
  const loveErrorId = useId();
  const slugErrorId = useId();
  const outfitId = useId();
  const outfitHintId = useId();
  const outfitErrorId = useId();

  // Keep native range slider CSS variables & custom validity in sync
  useEffect(() => {
    const el = loveSliderRef.current;
    if (!el) return;
    el.style.setProperty("--attr-min", el.min || "1");
    el.style.setProperty("--attr-max", el.max || "10");
    el.style.setProperty("--control-value", String(loveScore));
    if (loveScore !== 10) {
      el.setCustomValidity("Yalnızca 10 seçilebilir.");
    } else {
      el.setCustomValidity("");
    }
  }, [loveScore]);

  const liveValidation = validateSurveyInput({
    fullName,
    loveScore,
    slugAnswer,
    outfitAdvice,
  });

  const serverErrors: SurveyValidationErrors =
    state.status === "error" && state.errors ? state.errors : {};

  const showFullNameError =
    (fullNameTouched || submitAttempted) &&
    Boolean(liveValidation.errors.fullName || serverErrors.fullName);
  const fullNameErrorMsg =
    liveValidation.errors.fullName || serverErrors.fullName;

  const showLoveError =
    (loveTouched || submitAttempted) &&
    Boolean(liveValidation.errors.loveScore || serverErrors.loveScore);
  const loveErrorMsg =
    liveValidation.errors.loveScore || serverErrors.loveScore;

  const showSlugError =
    (slugTouched || submitAttempted) &&
    Boolean(liveValidation.errors.slugAnswer || serverErrors.slugAnswer);
  const slugErrorMsg =
    liveValidation.errors.slugAnswer || serverErrors.slugAnswer;

  const showOutfitError =
    (outfitTouched || submitAttempted) &&
    Boolean(liveValidation.errors.outfitAdvice || serverErrors.outfitAdvice);
  const outfitErrorMsg =
    liveValidation.errors.outfitAdvice || serverErrors.outfitAdvice;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setSubmitAttempted(true);
    setFullNameTouched(true);
    setLoveTouched(true);
    setSlugTouched(true);
    setOutfitTouched(true);

    if (!liveValidation.valid) {
      event.preventDefault();
      if (liveValidation.errors.fullName) {
        fullNameRef.current?.focus();
      } else if (liveValidation.errors.loveScore) {
        loveSliderRef.current?.focus();
      } else if (liveValidation.errors.slugAnswer) {
        firstRadioRef.current?.focus();
      } else if (liveValidation.errors.outfitAdvice) {
        outfitRef.current?.focus();
      }
    }
  };

  if (state.status === "success") {
    return (
      <output
        aria-live="polite"
        className="block rounded-3xl border-2 border-[#15803d]/40 bg-white p-8 text-center shadow-[0_18px_40px_rgba(21,128,61,0.1)] sm:p-12"
      >
        <div
          aria-hidden="true"
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#dcfce7] text-[#15803d]"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>

        <h2 className="mt-5 font-serif text-3xl font-black text-[#181615]">
          Teşekkürler, {state.submittedName}!
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-base text-[#57524d]">
          {state.message} Sevgi skorun tam 10/10 olarak kayıtlara geçti, sümüklüböcek sadakatin onaylandı.
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/sonuclar"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#181615] px-7 py-3 text-sm font-bold text-[#faf7f2] transition-colors hover:bg-[#b91c1c]"
          >
            Tüm Sonuçları Gör
          </Link>
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d6cfc4] bg-[#faf7f2] px-7 py-3 text-sm font-bold text-[#181615] transition-colors hover:bg-[#ede6db]"
          >
            Davetiyeye Dön
          </Link>
        </div>
      </output>
    );
  }

  return (
    <form
      action={formAction}
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-[#e7e1d8] bg-white p-6 shadow-[0_16px_40px_rgba(24,22,21,0.06)] sm:p-10"
    >
      <div className="space-y-8">
        {/* Mandatory Full Name */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor={fullNameId}
            className="text-base font-bold text-[#181615]"
          >
            Adınız Soyadınız{" "}
            <span className="text-[#b91c1c]" aria-hidden="true">
              *
            </span>
            <span className="visually-hidden"> (zorunlu)</span>
          </label>
          <input
            ref={fullNameRef}
            id={fullNameId}
            name="fullName"
            type="text"
            required
            minLength={2}
            maxLength={100}
            autoComplete="name"
            placeholder="Örn: Dr. Kardiyak Suna Hayranı"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            onBlur={() => setFullNameTouched(true)}
            aria-invalid={showFullNameError ? "true" : "false"}
            aria-describedby={showFullNameError ? fullNameErrorId : undefined}
            className={`survey-input min-h-12 w-full rounded-xl border bg-[#faf7f2] px-4 py-3 text-base text-[#181615] placeholder:text-[#78716c] ${
              showFullNameError
                ? "user-invalid-fallback border-[#dc2626] bg-[#fef2f2]"
                : "border-[#d6cfc4]"
            }`}
          />
          {showFullNameError && fullNameErrorMsg && (
            <p
              id={fullNameErrorId}
              className="mt-1 flex items-start gap-2 text-sm font-semibold text-[#b91c1c]"
            >
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                className="mt-0.5 shrink-0"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>
                <span className="visually-hidden">Hata: </span>
                {fullNameErrorMsg}
              </span>
            </p>
          )}
        </div>

        {/* Question 1: Love scale 1 to 10 (only 10 allowed) */}
        <div className="rounded-2xl border border-[#e7e1d8] bg-[#faf7f2] p-5 sm:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <label
              htmlFor={loveId}
              className="text-base font-bold text-[#181615] sm:text-lg"
            >
              1. 1&apos;den 10&apos;a kadar beni ne kadar seviyorsun?{" "}
              <span className="text-[#b91c1c]" aria-hidden="true">
                *
              </span>
            </label>
            <span
              className={`rounded-full px-3 py-1 font-mono text-sm font-extrabold tabular-nums ${
                loveScore === 10
                  ? "bg-[#dcfce7] text-[#15803d]"
                  : "bg-[#fee2e2] text-[#b91c1c]"
              }`}
            >
              {loveScore} / 10
            </span>
          </div>

          <p id={loveHintId} className="mt-1.5 text-sm text-[#57524d]">
            Kaydırıcıyı istediğin yere çekebilirsin ama sadece tek bir doğru cevap var.
          </p>

          <div className="mt-4">
            <input
              ref={loveSliderRef}
              id={loveId}
              name="loveScore"
              type="range"
              min={1}
              max={10}
              step={1}
              value={loveScore}
              onChange={(e) => {
                setLoveTouched(true);
                setLoveScore(Number(e.target.value));
              }}
              onBlur={() => setLoveTouched(true)}
              aria-invalid={showLoveError ? "true" : "false"}
              aria-valuetext={`${loveScore} üzerinden 10`}
              aria-describedby={
                showLoveError ? `${loveHintId} ${loveErrorId}` : loveHintId
              }
              className={`love-slider ${loveScore === 10 ? "is-perfect" : ""}`}
            />
            <div
              aria-hidden="true"
              className="mt-1 flex justify-between px-1 font-mono text-xs font-bold text-[#78716c] tabular-nums"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <span
                  key={num}
                  className={
                    num === loveScore
                      ? loveScore === 10
                        ? "text-[#15803d]"
                        : "text-[#b91c1c]"
                      : undefined
                  }
                >
                  {num}
                </span>
              ))}
            </div>
          </div>

          {showLoveError && loveErrorMsg ? (
            <p
              id={loveErrorId}
              role="alert"
              className="mt-3 flex items-start gap-2 rounded-xl border border-[#fecaca] bg-[#fef2f2] p-3 text-sm font-semibold text-[#b91c1c]"
            >
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                className="mt-0.5 shrink-0"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
              <span>{loveErrorMsg}</span>
            </p>
          ) : loveScore === 10 ? (
            <p className="mt-3 flex items-center gap-2 rounded-xl border border-[#bbf7d0] bg-[#f0fdf4] p-3 text-sm font-semibold text-[#15803d]">
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>10/10 — Jüri ve Suna tarafından tam notla onaylandı!</span>
            </p>
          ) : null}
        </div>

        {/* Question 2: Slug question (3 radio options, 1 selectable) */}
        <fieldset
          aria-invalid={showSlugError ? "true" : "false"}
          aria-describedby={showSlugError ? slugErrorId : undefined}
          className="rounded-2xl border border-[#e7e1d8] bg-[#faf7f2] p-5 sm:p-6"
        >
          <legend className="px-1 text-base font-bold text-[#181615] sm:text-lg">
            2. Bir sümüklüböcek olsaydım yine de beni sever miydin?{" "}
            <span className="text-[#b91c1c]" aria-hidden="true">
              *
            </span>
          </legend>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {SLUG_OPTIONS.map((option, index) => {
              const checked = slugAnswer === option;
              const optionId = `${loveId}-slug-${index}`;
              return (
                <label
                  key={option}
                  htmlFor={optionId}
                  className={`flex min-h-13 cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm font-semibold transition-colors ${
                    checked
                      ? "border-[#b91c1c] bg-[#fef2f2] text-[#7f1d1d]"
                      : "border-[#d6cfc4] bg-white text-[#181615] hover:bg-[#f4efe6]"
                  }`}
                >
                  <input
                    ref={index === 0 ? firstRadioRef : undefined}
                    id={optionId}
                    type="radio"
                    name="slugAnswer"
                    value={option}
                    required
                    checked={checked}
                    onChange={(e) => {
                      setSlugTouched(true);
                      setSlugAnswer(e.target.value);
                    }}
                    className="h-4 w-4 shrink-0 accent-[#b91c1c]"
                  />
                  <span>{option}</span>
                </label>
              );
            })}
          </div>

          {showSlugError && slugErrorMsg && (
            <p
              id={slugErrorId}
              className="mt-3 flex items-start gap-2 text-sm font-semibold text-[#b91c1c]"
            >
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                className="mt-0.5 shrink-0"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>
                <span className="visually-hidden">Hata: </span>
                {slugErrorMsg}
              </span>
            </p>
          )}
        </fieldset>

        {/* Question 3: Outfit advice textarea (200 char limit) */}
        <div className="flex flex-col gap-1.5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <label
              htmlFor={outfitId}
              className="text-base font-bold text-[#181615] sm:text-lg"
            >
              3. Tez savunmamda ne giymeliyim?{" "}
              <span className="text-[#b91c1c]" aria-hidden="true">
                *
              </span>
            </label>
            <span
              aria-live="polite"
              className={`font-mono text-xs font-bold tabular-nums ${
                outfitAdvice.length >= OUTFIT_MAX_LENGTH
                  ? "text-[#b91c1c]"
                  : "text-[#57524d]"
              }`}
            >
              {outfitAdvice.length} / {OUTFIT_MAX_LENGTH} karakter
            </span>
          </div>

          <p id={outfitHintId} className="text-sm text-[#57524d]">
            Moda danışmanlığını en fazla 200 karakterle özetle.
          </p>

          <textarea
            ref={outfitRef}
            id={outfitId}
            name="outfitAdvice"
            required
            rows={4}
            maxLength={OUTFIT_MAX_LENGTH}
            placeholder="Örn: Beyaz önlük üstüne smokin ceketi, altına da rahat spor ayakkabı..."
            value={outfitAdvice}
            onChange={(e) =>
              setOutfitAdvice(e.target.value.slice(0, OUTFIT_MAX_LENGTH))
            }
            onBlur={() => setOutfitTouched(true)}
            aria-invalid={showOutfitError ? "true" : "false"}
            aria-describedby={
              showOutfitError
                ? `${outfitHintId} ${outfitErrorId}`
                : outfitHintId
            }
            className={`survey-input w-full resize-y rounded-xl border bg-[#faf7f2] px-4 py-3 text-base text-[#181615] placeholder:text-[#78716c] ${
              showOutfitError
                ? "user-invalid-fallback border-[#dc2626] bg-[#fef2f2]"
                : "border-[#d6cfc4]"
            }`}
          />

          {showOutfitError && outfitErrorMsg && (
            <p
              id={outfitErrorId}
              className="mt-1 flex items-start gap-2 text-sm font-semibold text-[#b91c1c]"
            >
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                className="mt-0.5 shrink-0"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>
                <span className="visually-hidden">Hata: </span>
                {outfitErrorMsg}
              </span>
            </p>
          )}
        </div>

        {state.status === "error" && state.message && (
          <output
            aria-live="polite"
            className="block rounded-xl border border-[#fecaca] bg-[#fef2f2] p-3 text-sm font-semibold text-[#b91c1c]"
          >
            {state.message}
          </output>
        )}

        <div className="flex flex-col items-stretch justify-between gap-3 border-t border-[#e7e1d8] pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-[#57524d]">
            Gönderdiğin cevap herkesin görebileceği sonuç panosuna eklenecek.
          </p>
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full bg-[#b91c1c] px-8 py-3 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#991b1b] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isPending ? "Kaydediliyor..." : "Cevabımı Gönder"}
          </button>
        </div>
      </div>
    </form>
  );
}
