create table if not exists public.surveys (
  id uuid primary key default gen_random_uuid(),
  full_name text not null check (char_length(trim(full_name)) between 2 and 100),
  love_score smallint not null check (love_score = 10),
  slug_answer text not null check (
    slug_answer in ('Evet', 'Tabii ki', 'Seni sevmemek mümkün mü?')
  ),
  outfit_advice text not null check (char_length(trim(outfit_advice)) between 1 and 200),
  created_at timestamptz not null default now()
);

create index if not exists surveys_created_at_idx
  on public.surveys (created_at desc);

alter table public.surveys enable row level security;

grant usage on schema public to anon, authenticated;
grant select, insert on table public.surveys to anon, authenticated;

create policy "Anyone can read survey results"
  on public.surveys
  for select
  to anon, authenticated
  using (true);

create policy "Anyone can submit valid survey"
  on public.surveys
  for insert
  to anon, authenticated
  with check (
    love_score = 10
    and char_length(trim(full_name)) between 2 and 100
    and slug_answer in ('Evet', 'Tabii ki', 'Seni sevmemek mümkün mü?')
    and char_length(trim(outfit_advice)) between 1 and 200
  );

insert into public.surveys (id, full_name, love_score, slug_answer, outfit_advice, created_at)
values
  (
    '11111111-1111-4111-8111-111111111111',
    'Kardiyomiyosit Hayranı',
    10,
    'Seni sevmemek mümkün mü?',
    'Bembeyaz ütülü laboratuvar önlüğü altına parlak neon spor ayakkabı giy, jüri dikkatini dağıtsın.',
    '2026-11-10T10:15:00.000Z'
  ),
  (
    '22222222-2222-4222-8222-222222222222',
    'Apomorfin Reseptörü',
    10,
    'Tabii ki',
    'Tam takım elbise üstüne ''p < 0.05'' rozeti tak. Sol ventrikülün bile gurur duyar.',
    '2026-11-11T14:30:00.000Z'
  ),
  (
    '33333333-3333-4333-8333-333333333333',
    'Suna''nın Kahve Makinesi',
    10,
    'Evet',
    'Üzerinde ''Bana zor soru sorana kafein yok'' yazan şık bir blazer ceket mutlaka olmalı.',
    '2026-11-12T18:45:00.000Z'
  )
on conflict (id) do nothing;
