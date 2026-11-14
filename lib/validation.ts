export const SLUG_OPTIONS = [
  "Evet",
  "Tabii ki",
  "Seni sevmemek mümkün mü?",
] as const;

export type SlugAnswer = (typeof SLUG_OPTIONS)[number];

export interface SurveyInput {
  fullName: string;
  loveScore: number;
  slugAnswer: string;
  outfitAdvice: string;
}

export interface SurveyEntry {
  id: string;
  fullName: string;
  loveScore: 10;
  slugAnswer: SlugAnswer;
  outfitAdvice: string;
  createdAt: string;
}

export interface SurveyValidationErrors {
  fullName?: string;
  loveScore?: string;
  slugAnswer?: string;
  outfitAdvice?: string;
}

export const OUTFIT_MAX_LENGTH = 200;

export function isSlugAnswer(value: string): value is SlugAnswer {
  return (SLUG_OPTIONS as readonly string[]).includes(value);
}

export function validateSurveyInput(input: SurveyInput): {
  valid: boolean;
  errors: SurveyValidationErrors;
  cleaned?: Omit<SurveyEntry, "id" | "createdAt">;
} {
  const errors: SurveyValidationErrors = {};
  const fullName = input.fullName.trim();
  const outfitAdvice = input.outfitAdvice.trim();
  const loveScore = Number(input.loveScore);

  if (fullName.length < 2) {
    errors.fullName =
      "Adını ve soyadını yazmadan kaçamazsın! Jüri yoklama alacak.";
  } else if (fullName.length > 100) {
    errors.fullName = "Ad soyad en fazla 100 karakter olabilir.";
  }

  if (!Number.isInteger(loveScore) || loveScore !== 10) {
    errors.loveScore = `Hata: ${
      Number.isFinite(loveScore) ? loveScore : "?"
    }/10 kabul edilemez! Sistem yalnızca 10 puanı onaylamaktadır.`;
  }

  if (!isSlugAnswer(input.slugAnswer)) {
    errors.slugAnswer =
      "Sümüklüböcek sadakat testini boş bırakamazsın; üç doğru şıktan birini seç.";
  }

  if (outfitAdvice.length === 0) {
    errors.outfitAdvice =
      "Kıyafet önerisi yazmadan olmaz! Eşofman mı takım elbise mi söyle.";
  } else if (outfitAdvice.length > OUTFIT_MAX_LENGTH) {
    errors.outfitAdvice = `Kıyafet önerin en fazla ${OUTFIT_MAX_LENGTH} karakter olabilir.`;
  }

  if (
    Object.keys(errors).length > 0 ||
    !isSlugAnswer(input.slugAnswer) ||
    loveScore !== 10
  ) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    errors: {},
    cleaned: {
      fullName,
      loveScore: 10,
      slugAnswer: input.slugAnswer,
      outfitAdvice,
    },
  };
}
