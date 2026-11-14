import { createClient, getSupabaseConfig } from "@/lib/supabase/server";
import { isSlugAnswer, type SurveyEntry } from "@/lib/validation";

interface SurveyRow {
  id: string;
  full_name: string;
  love_score: number;
  slug_answer: string;
  outfit_advice: string;
  created_at: string;
}

function mapRow(row: SurveyRow): SurveyEntry {
  return {
    id: row.id,
    fullName: row.full_name,
    loveScore: 10,
    slugAnswer: isSlugAnswer(row.slug_answer) ? row.slug_answer : "Evet",
    outfitAdvice: row.outfit_advice,
    createdAt: row.created_at,
  };
}

function hasSupabaseConfig(): boolean {
  const { url, key } = getSupabaseConfig();
  return Boolean(url && key);
}

export async function readSurveys(): Promise<{
  entries: SurveyEntry[];
  error?: string;
}> {
  if (!hasSupabaseConfig()) {
    return {
      entries: [],
      error: "Supabase ortam değişkenleri eksik.",
    };
  }

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("surveys")
    .select("id, full_name, love_score, slug_answer, outfit_advice, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return {
      entries: [],
      error: error.message,
    };
  }

  const rows = (data ?? []) as SurveyRow[];
  return {
    entries: rows.map(mapRow),
  };
}

export async function appendSurvey(
  entry: Omit<SurveyEntry, "id" | "createdAt">
): Promise<SurveyEntry> {
  if (!hasSupabaseConfig()) {
    throw new Error("Supabase ortam değişkenleri eksik.");
  }

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("surveys")
    .insert({
      full_name: entry.fullName,
      love_score: entry.loveScore,
      slug_answer: entry.slugAnswer,
      outfit_advice: entry.outfitAdvice,
    })
    .select("id, full_name, love_score, slug_answer, outfit_advice, created_at")
    .single();

  if (error || !data) {
    throw new Error(error?.message ?? "Anket yanıtı veritabanına kaydedilemedi.");
  }

  return mapRow(data as SurveyRow);
}
