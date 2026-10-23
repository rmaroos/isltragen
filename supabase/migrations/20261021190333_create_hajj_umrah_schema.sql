/*
# Hajj & Umrah Travel Agency — Core Schema

## Purpose
Stores published pilgrimage packages, travel guide articles, FAQs, and customer inquiries for a public-facing Hajj & Umrah travel agency website. This is an inquiry-first, no-auth public website: visitors browse packages and submit inquiries without signing in.

## New Tables
1. `packages` — Published travel packages (Umrah, Hajj, Ramadan Umrah, etc.) with pricing, itinerary, inclusions, exclusions, hotel info, and availability status.
2. `inquiries` — Customer booking/quote requests submitted from the public site, with a generated reference number and status tracking.
3. `articles` — Travel guide articles with review dates and related package links.
4. `faqs` — Frequently asked questions, optionally scoped to a category.

## Security
- This is a no-auth public website. RLS is enabled on all tables.
- `packages`, `articles`, `faqs`: publicly readable (anon + authenticated SELECT only). Writes are restricted to authenticated (staff) — not used by the public frontend.
- `inquiries`: public INSERT (anyone can submit an inquiry), but SELECT/UPDATE/DELETE restricted to authenticated (staff) so visitors cannot read other people's inquiries.
*/

-- ============================================================
-- PACKAGES
-- ============================================================
CREATE TABLE IF NOT EXISTS packages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  category text NOT NULL DEFAULT 'umrah', -- umrah | hajj | ramadan-umrah | ziyarat
  short_description text NOT NULL,
  long_description text NOT NULL,
  hero_image text NOT NULL,
  gallery jsonb NOT NULL DEFAULT '[]'::jsonb, -- array of image URLs
  departure_city text NOT NULL,
  start_date date NOT NULL,
  end_date date NOT NULL,
  duration_days integer NOT NULL,
  price_from numeric(10,2) NOT NULL,
  price_basis text NOT NULL DEFAULT 'Per person, sharing',
  currency text NOT NULL DEFAULT 'USD',
  hotel_category text NOT NULL DEFAULT '4 Star',
  hotel_name_makkah text,
  hotel_distance_makkah text,
  hotel_name_madinah text,
  hotel_distance_madinah text,
  inclusions jsonb NOT NULL DEFAULT '[]'::jsonb, -- array of strings
  exclusions jsonb NOT NULL DEFAULT '[]'::jsonb, -- array of strings
  itinerary jsonb NOT NULL DEFAULT '[]'::jsonb, -- array of { day, title, description }
  availability_status text NOT NULL DEFAULT 'available', -- available | limited | fully_booked | closed
  is_featured boolean NOT NULL DEFAULT false,
  is_published boolean NOT NULL DEFAULT false,
  meta_description text,
  last_reviewed_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE packages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_packages" ON packages;
CREATE POLICY "public_read_packages"
  ON packages FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

DROP POLICY IF EXISTS "staff_insert_packages" ON packages;
CREATE POLICY "staff_insert_packages"
  ON packages FOR INSERT
  TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "staff_update_packages" ON packages;
CREATE POLICY "staff_update_packages"
  ON packages FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "staff_delete_packages" ON packages;
CREATE POLICY "staff_delete_packages"
  ON packages FOR DELETE
  TO authenticated USING (true);

-- ============================================================
-- INQUIRIES
-- ============================================================
CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  reference text NOT NULL UNIQUE,
  full_name text NOT NULL,
  email text,
  phone text NOT NULL,
  preferred_contact text NOT NULL DEFAULT 'phone', -- phone | email | whatsapp
  pilgrimage_type text NOT NULL DEFAULT 'umrah', -- umrah | hajj | ramadan-umrah | custom
  package_id uuid REFERENCES packages(id) ON DELETE SET NULL,
  departure_city text,
  preferred_month text,
  number_of_travelers integer NOT NULL DEFAULT 1,
  budget text,
  accommodation_preference text,
  group_or_family_details text,
  accessibility_request text,
  message text,
  status text NOT NULL DEFAULT 'new', -- new | assigned | contacted | awaiting_customer | qualified | converted | lost | spam
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Public can submit inquiries (INSERT only, no reading other people's data)
DROP POLICY IF EXISTS "public_insert_inquiries" ON inquiries;
CREATE POLICY "public_insert_inquiries"
  ON inquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only staff (authenticated) can read/manage inquiries
DROP POLICY IF EXISTS "staff_read_inquiries" ON inquiries;
CREATE POLICY "staff_read_inquiries"
  ON inquiries FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "staff_update_inquiries" ON inquiries;
CREATE POLICY "staff_update_inquiries"
  ON inquiries FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "staff_delete_inquiries" ON inquiries;
CREATE POLICY "staff_delete_inquiries"
  ON inquiries FOR DELETE
  TO authenticated USING (true);

-- ============================================================
-- ARTICLES (Travel Guides)
-- ============================================================
CREATE TABLE IF NOT EXISTS articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  summary text NOT NULL,
  content text NOT NULL,
  category text NOT NULL DEFAULT 'general', -- getting-started | hajj-preparation | documents | packing | ihram | travel | makkah-madinah | family | accessibility | health
  hero_image text NOT NULL,
  reading_time_minutes integer NOT NULL DEFAULT 5,
  author text,
  is_published boolean NOT NULL DEFAULT false,
  published_at timestamptz,
  last_reviewed_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_articles" ON articles;
CREATE POLICY "public_read_articles"
  ON articles FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

DROP POLICY IF EXISTS "staff_insert_articles" ON articles;
CREATE POLICY "staff_insert_articles"
  ON articles FOR INSERT
  TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "staff_update_articles" ON articles;
CREATE POLICY "staff_update_articles"
  ON articles FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "staff_delete_articles" ON articles;
CREATE POLICY "staff_delete_articles"
  ON articles FOR DELETE
  TO authenticated USING (true);

-- ============================================================
-- FAQs
-- ============================================================
CREATE TABLE IF NOT EXISTS faqs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question text NOT NULL,
  answer text NOT NULL,
  category text NOT NULL DEFAULT 'general', -- packages | booking | payments | documents | travel | general
  sort_order integer NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_faqs" ON faqs;
CREATE POLICY "public_read_faqs"
  ON faqs FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

DROP POLICY IF EXISTS "staff_insert_faqs" ON faqs;
CREATE POLICY "staff_insert_faqs"
  ON faqs FOR INSERT
  TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "staff_update_faqs" ON faqs;
CREATE POLICY "staff_update_faqs"
  ON faqs FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "staff_delete_faqs" ON faqs;
CREATE POLICY "staff_delete_faqs"
  ON faqs FOR DELETE
  TO authenticated USING (true);

-- ============================================================
-- INDEXES
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_packages_category ON packages(category);
CREATE INDEX IF NOT EXISTS idx_packages_published ON packages(is_published);
CREATE INDEX IF NOT EXISTS idx_packages_featured ON packages(is_featured);
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON inquiries(status);
CREATE INDEX IF NOT EXISTS idx_articles_category ON articles(category);
CREATE INDEX IF NOT EXISTS idx_articles_published ON articles(is_published);
CREATE INDEX IF NOT EXISTS idx_faqs_category ON faqs(category);
CREATE INDEX IF NOT EXISTS idx_faqs_published ON faqs(is_published);
