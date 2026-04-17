-- ============================================================
-- TABLE : demandes_inscription
-- ============================================================
create table if not exists public.demandes_inscription (
  id            uuid primary key default gen_random_uuid(),
  prenom        text not null,
  nom           text not null,
  email         text not null,
  telephone     text not null,
  experience    text,
  forfait       text,
  message       text,
  plateformes   text[] not null default '{}',
  statut        text not null default 'en_attente',
  created_at    timestamptz not null default now()
);

-- Index pour les recherches par email et statut
create index if not exists idx_demandes_email  on public.demandes_inscription (email);
create index if not exists idx_demandes_statut on public.demandes_inscription (statut);

-- ============================================================
-- RLS
-- ============================================================
alter table public.demandes_inscription enable row level security;

-- Seul l'anon peut insérer (formulaire public), pas lire
create policy "anon peut insérer une demande"
  on public.demandes_inscription
  for insert
  to anon
  with check (true);

-- Les utilisateurs authentifiés (admin) peuvent tout lire
create policy "auth peut lire les demandes"
  on public.demandes_inscription
  for select
  to authenticated
  using (true);

-- ============================================================
-- STORAGE BUCKET : documents-inscription
-- ============================================================
insert into storage.buckets (id, name, public)
values ('documents-inscription', 'documents-inscription', false)
on conflict (id) do nothing;

-- Anon peut uploader dans son propre dossier (chemin = {demande_id}/*)
create policy "anon peut uploader ses documents"
  on storage.objects
  for insert
  to anon
  with check (bucket_id = 'documents-inscription');

-- Auth peut lire tous les documents
create policy "auth peut lire les documents"
  on storage.objects
  for select
  to authenticated
  using (bucket_id = 'documents-inscription');
