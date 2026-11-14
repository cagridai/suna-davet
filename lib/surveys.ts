import { promises as fs } from "node:fs";
import path from "node:path";
import type { SurveyEntry } from "@/lib/validation";

const SEED_SURVEYS: SurveyEntry[] = [
  {
    id: "seed-1",
    fullName: "Kardiyomiyosit Hayranı",
    loveScore: 10,
    slugAnswer: "Seni sevmemek mümkün mü?",
    outfitAdvice:
      "Bembeyaz ütülü laboratuvar önlüğü altına parlak neon spor ayakkabı giy, jüri dikkatini dağıtsın.",
    createdAt: "2026-11-10T10:15:00.000Z",
  },
  {
    id: "seed-2",
    fullName: "Apomorfin Reseptörü",
    loveScore: 10,
    slugAnswer: "Tabii ki",
    outfitAdvice:
      "Tam takım elbise üstüne 'p < 0.05' rozeti tak. Sol ventrikülün bile gurur duyar.",
    createdAt: "2026-11-11T14:30:00.000Z",
  },
  {
    id: "seed-3",
    fullName: "Suna'nın Kahve Makinesi",
    loveScore: 10,
    slugAnswer: "Evet",
    outfitAdvice:
      "Üzerinde 'Bana zor soru sorana kafein yok' yazan şık bir blazer ceket mutlaka olmalı.",
    createdAt: "2026-11-12T18:45:00.000Z",
  },
];

const PRIMARY_PATH = path.join(process.cwd(), "data", "surveys.json");
const FALLBACK_PATH = "/tmp/suna-savunma-surveys.json";

let writeQueue: Promise<unknown> = Promise.resolve();

async function resolveReadablePath(): Promise<string | null> {
  for (const candidate of [PRIMARY_PATH, FALLBACK_PATH]) {
    try {
      await fs.access(candidate);
      return candidate;
    } catch {
      // try next path
    }
  }
  return null;
}

async function writeAtomic(filePath: string, data: SurveyEntry[]): Promise<void> {
  const dir = path.dirname(filePath);
  await fs.mkdir(dir, { recursive: true });
  const tempPath = `${filePath}.${Date.now()}.tmp`;
  await fs.writeFile(tempPath, JSON.stringify(data, null, 2), "utf8");
  await fs.rename(tempPath, filePath);
}

async function writeSurveys(data: SurveyEntry[]): Promise<void> {
  try {
    await writeAtomic(PRIMARY_PATH, data);
  } catch {
    await writeAtomic(FALLBACK_PATH, data);
  }
}

export async function readSurveys(): Promise<SurveyEntry[]> {
  const existingPath = await resolveReadablePath();
  if (!existingPath) {
    try {
      await writeSurveys(SEED_SURVEYS);
    } catch {
      // ignore if read-only in static env
    }
    return [...SEED_SURVEYS];
  }

  try {
    const raw = await fs.readFile(/*turbopackIgnore: true*/ existingPath, "utf8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed as SurveyEntry[];
    }
  } catch {
    // fallback to seeds if corrupted
  }
  return [...SEED_SURVEYS];
}

export async function appendSurvey(
  entry: Omit<SurveyEntry, "id" | "createdAt">
): Promise<SurveyEntry> {
  const created: SurveyEntry = {
    ...entry,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };

  const run = writeQueue.then(async () => {
    const current = await readSurveys();
    const updated = [created, ...current];
    await writeSurveys(updated);
    return created;
  });

  writeQueue = run.catch(() => undefined);
  return run;
}
