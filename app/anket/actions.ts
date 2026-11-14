"use server";

import { revalidatePath } from "next/cache";
import { appendSurvey } from "@/lib/surveys";
import {
  validateSurveyInput,
  type SurveyValidationErrors,
} from "@/lib/validation";

export interface SubmitSurveyState {
  status: "idle" | "error" | "success";
  message?: string;
  errors?: SurveyValidationErrors;
  submittedName?: string;
}

function readTextField(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export async function submitSurveyAction(
  _prevState: SubmitSurveyState,
  formData: FormData
): Promise<SubmitSurveyState> {
  const fullName = readTextField(formData, "fullName");
  const loveScoreRaw = readTextField(formData, "loveScore");
  const slugAnswer = readTextField(formData, "slugAnswer");
  const outfitAdvice = readTextField(formData, "outfitAdvice");

  const validation = validateSurveyInput({
    fullName,
    loveScore: Number(loveScoreRaw),
    slugAnswer,
    outfitAdvice,
  });

  if (!validation.valid || !validation.cleaned) {
    return {
      status: "error",
      message: "Bazı cevaplar Suna'nın katı sevgi standartlarından geçemedi.",
      errors: validation.errors,
    };
  }

  await appendSurvey(validation.cleaned);
  revalidatePath("/sonuclar");

  return {
    status: "success",
    message: "Cevabın başarıyla kaydedildi! Artık savunma salonuna giriş iznin var.",
    submittedName: validation.cleaned.fullName,
  };
}
