# NextGen Academy — Website Redesign Plan (from 2025 Prospectus PDF)

Source: `NextGen Brousher 2025 Updated @nd Version.pdf` (7 pages)
Extracted assets: `brochure-assets/` (38 images pulled from the PDF)

---

## 1. Color Theme (extracted from brochure)

The brochure uses a **warm cream + amber/orange** system with red accent frames.

| Token | Hex (approx) | Where it appears in the brochure |
|---|---|---|
| `--brand-cream` | `#FAF3E3` | Page background on every content page (cream/off-white) |
| `--brand-orange` | `#F5A623` | Main wave shapes, circles, chevron arrows |
| `--brand-orange-deep` | `#E8941A` | Darker wave layer behind the main orange |
| `--brand-red` | `#E03131` | Accent frames around text cards (red/white panels) |
| `--brand-dark` | `#1A1A1A` | Headings / body text |
| `--brand-white` | `#FFFFFF` | Card surfaces inside red frames |

**Decorative language:** flowing orange waves top-left and bottom-right of each page, thin outline circles with solid orange dots, and `»»»` chevron arrows. The site currently uses a muted gold (`#7a5900` / `#ffdea3`); the brochure is brighter — amber `#F5A623` on cream `#FAF3E3`.

### Proposed CSS variable update
```css
--color-cream: #faf3e3;        /* page background (replaces #fbf9f8) */
--color-amber: #f5a623;        /* primary accent (waves, buttons, highlights) */
--color-amber-deep: #e8941a;   /* hover / secondary wave layer */
--color-red-accent: #e03131;   /* card frames, small accents only */
--color-ink: #1a1a1a;          /* text */
```
Keep `#7a5900` as a darker companion for text-on-cream contrast (amber alone fails WCAG on cream for small text).

---

## 2. Brochure Page → Website Section Mapping (exact sequence)

### Page 1 — Cover  →  **Home Hero**
- Headline: **“Nurturing Academic Leaders Who Will Lead Classrooms and Congregations”**
  (current hero title must change to this)
- Curved/arc text: *“Where Minds Graduate with Honors, and Hearts Graduate with IMAN”*  → hero eyebrow/subtitle
- Address: NextGen Academy, Near AMU Fort, Fort Enclave Colony, Aligarh, UP, India
- Phones: +91 7037511306, +91 6398874753 · Email: nextgeneacademy.ims@gmail.com
- Cover art: dark dramatic image (`img-38`) — hero may keep light style but adopt cover headline

### Page 2 — Towards a Vishwa Guru  →  **Home section #2 (after hero)**
- Title: **“Towards a Vishwa Guru: The Pivotal Role of Muslim Academic Leadership”**
- Body (3 paragraphs, in this order):
  1. “Indian Muslims, as an integral part of India's social fabric… essential—for the community's progress, for India's democratic strength, and for the nation's collective advancement.”
  2. “The need for great Muslim academic leaders is not a ‘Muslim issue’ but an Indian imperative… embodying the composite Indian identity that is both rooted and global.”
  3. Quote block: *“A nation's greatness is not measured by its resources or military might alone, but by the depth of its knowledge…”* + “India stands at a decisive moment…” + “A nation that intentionally cultivates ethical, visionary, and effective academic leaders is investing in the very engine of its own progress.”
- Footer strip: **“Building Academic Leadership for New India”** (keep as tagline banner)
- Image beside text: `img-04` (hand writing + glowing globe + tasbih)

### Page 3 — Mission / Vision / About  →  **Home section #3 + About page top**
Sequence on the page:
1. **Mission Statement** (left card): “Our mission is to nurture a generation of young leaders who see themselves as trustees of the future… architects of a more beautiful world.”
2. **Vision Statement** (right card): “To empower learners to become compassionate architects of a more just, sustainable and beautiful world by transforming them into Academic Leaders.”
3. **About us** (IMS story): sister organization of Islamic Mission School (IMS), value-based ICSE school founded 2008… labs (Physics, Chemistry, Biology, CS, Robotics & STEM), enhancement classes (English communication, Arabic Communication, Financial Literacy, Life Skills, Robotics & STEM), Integrated NEET/JEE Schooling Program.
4. **Leadership Program teaser**: “We are embarking on a transformative journey, selecting students at the pivotal Middle School age… forging of future Academic Leaders and Scholars of Islam—in one person.”
5. Tagline: **“Where Minds Graduate with Honors, and Hearts Graduate with IMAN.”**
- Images: `img-07` (child holding holographic city — vision), `img-08` (sapling in hands — mission/IMS growth), `img-14` (faith + skills rays graphic — integrated education)

### Page 4 — The Dual Pathway, Path 1  →  **Programs page top**
- Section title: **“The Dual Pathway — Excellence in Academia, Mastery in Faith”**
- Intro: “Our revolutionary model synchronizes two prestigious tracks into one seamless journey:”
- **1. The Path of Academic Leadership** — intro text: “Great schools are built by great educators. Leadership is not a position one attains, but a craft one cultivates over a lifetime…”
- **5 Phases displayed as a descending ladder (5 → 1 top-to-bottom in PDF; show 1 → 5 on web):**
  | Phase | Stage | Tagline |
  |---|---|---|
  | 1 | The Foundation (Grades 5–8) | “The Curious Mentor” |
  | 2 | The Apprentice (Grades 9–10) | “The Emerging Practitioner” |
  | 3 | The Practitioner (Grades 11–12) | “The Student Educator” |
  | 4 | The Scholar (Graduation & B.Ed) | “The Teacher-In-Training” |
  | 5 | The Academic Leader (PG & Beyond) | “Leading the Learning Community” |
  - **NOTE: Phase 1 is Grades 5–8 (site currently says 6–8 in places — verify & update).**
- Subtitle: “NextGen Academic Leadership Program spanning from Middle School to Post-Graduation.”
- Image: `img-03` (graduate walking between modern university & mosque architecture)

### Page 5 — Path 2 + The NextGen Graduate  →  **Programs page bottom**
1. **2. The Path of Islamic Scholarship**: “Parallel to their academic studies, students will immerse themselves in a comprehensive Islamic curriculum like Tafseer, Hadith & Islamic Studies, Seerah, Fiqh, Arabic Language etc. They will gain the profound knowledge and spiritual maturity to deliver the Khutbah at Jumu'ah Prayers, provide religious guidance, and teach Islamic sciences.”
   - Image: `img-22` (boy reading Qur'an in mosque)
2. **The NextGen Graduate: A Uniquely Empowered Academic Leader**
   - “Imagine a future where your local school principal is also a respected community scholar…”
   - “A NextGen graduate embodies this powerful synthesis:”
     - An **Educational Visionary** with certified credentials to shape institutions.
     - A **Community Scholar** with the depth of knowledge to guide spiritual and ethical development.
   - “We are nurturing well-rounded individuals who will:”
     - Lead classrooms and congregations.
     - Author academic papers and deliver impactful sermons.
     - Manage educational institutions while nurturing the moral fabric of their communities.
   - Closing: “This program is more than an academy; it's an investment in a future where leadership is defined by both intellectual prowess and unwavering faith.”
   - Images: `img-06` (boy with vision goggles), `img-17` (boy between mosque & city skyline), `img-10` (scale balancing books & heart — minds/hearts synthesis)

### Page 6 — Residential + Admission  →  **Residential page + Admissions page**
1. **The Residential Program: A Home Away from Home, A Foundation for Life**
   - Intro: “At NextGen Academy, we believe that education extends far beyond the classroom… preparing them not just for the next grade, but for life.”
2. **The Four Pillars of the Residential Program** (exact order & copy):
   1. **Pillar of Intellect (Aql)** — Curriculum: surpassing international standards, project-based learning and research methodology.
   2. **Pillar of Spirit (Ruh)** — Pathway: structured progression from Hifz to Hifz with Tajweed & Tafsir, into foundational Usul al-Fiqh.
   3. **Pillar of Character (Khuluq)** — Model: the Seerah of the Prophet (PBUH) as the ultimate leadership manual.
   4. **Pillar of Leadership (Qiyadah)** — Laboratory: the residential community as a living laboratory; rotating roles — Academic Prefect, Prayer Imam, Hospitality Coordinator, Sustainability Lead.
   - Closing: “This is the investment that yields a return beyond university placements… the sword of intellect against the tide of mediocrity.”
3. **ADMISSION CRITERIA**
   - **Grades 5th to 8th (Age 10–14 years)** — “transformative educational experience for students aged 10–14 years (Grades 5–8)… rigorous academics with holistic development.”
   - **Hifz Plus Students** — specialized program for Hifz-completed students aged 10–14 with age-grade misalignment; structured, compassionate, accelerated pathway; tailored admission & integration process.
   - Image: `img-19` (young child in hooded jacket)

### Page 7 — Assessment + IMS Legacy  →  **Admissions page (process) + About/Gallery**
1. **Assessment Process** (3 steps, exact copy):
   - **Step 1: Initial Screening** — Submission of completed application form; Hifz certification document and/or previous school reports (if any).
   - **Step 2: Diagnostic Evaluation** — Standardized diagnostic tests in: English Language & Literacy; Mathematics & Numerical Reasoning; General Science Concepts & Logical Reasoning.
   - **Step 3: Family Interview** — Meeting with parents/guardians and student; family support structure; daily routine, interests, non-academic strengths; motivation for accelerated program.
   - Image: `img-24` (assessment hexagon graphic)
2. **Islamic Mission School, the Parent Organization**
   - “NextGen Academy is proud to be the pioneering sister institution of the renowned Islamic Mission School (IMS) – a celebrated ICSE K-12 school…”
   - “NextGen Academy is the next Chapter in the Legacy of Excellence of IMS.”
   - “Where IMS established the gold standard for integrated education… NextGen Academy is the natural evolution.”
3. **GLIMPSES OF IMS** — photo gallery grid: `img-26` … `img-37` (12 real campus photos: assembly ground, science exhibition, classrooms, events)

---

## 3. Image Inventory (brochure-assets/ → usage)

| File | Content | Use on site |
|---|---|---|
| `img-38-1655x2340.jpg` | Dark cover art | (optional) Home hero bg flavor |
| `img-04-1024x1024.jpg` | Hand writing + glowing globe + tasbih | Vishwa Guru section |
| `img-07-985x863.jpg` | Child holding holographic city | Vision statement |
| `img-08-1024x1024.jpg` | Sapling in cupped hands + media icons | Mission / IMS story |
| `img-14-1223x1148.jpg` | FAITH core + skill rays (STEM, etc.) | Integrated education / curriculum |
| `img-03-1024x1024.jpg` | Graduate between university & mosque | Dual Pathway / Programs hero |
| `img-22-369x252.jpg` | Boy reading Qur'an in mosque | Islamic Scholarship path |
| `img-06-1024x1024.jpg` | Boy with future-vision goggles | NextGen Graduate |
| `img-17-474x474.jpg` | Boy between mosque & modern city | NextGen Graduate / dual identity |
| `img-10-1024x1024.jpg` | Scale balancing books & heart | “Minds + Hearts” tagline section |
| `img-19-1120x744.jpg` | Young child portrait | Residential / Admissions |
| `img-24-612x434.jpg` | Assessment graphic | Admissions assessment process |
| `img-26…37 (446x317)` | Real IMS campus photos (12) | GLIMPSES OF IMS gallery + LegacySection |
| `img-01/02/13/21` | Orange wave + cream decorative bg | Section background pattern (theme) |
| `img-05/09/11/12/16/18/20/23/25` | Red/white frame bg | Accent card backgrounds (optional) |
| `img-15-186x1148.jpg` | Tall side strip | (decorative, skip) |

**Action:** copy chosen images into `public/images/brochure/` with semantic names before wiring in.

---

## 4. Concrete Change List

### Theme (global)
- [ ] `src/index.css`: update `@theme` — cream bg `#faf3e3`, amber `#f5a623`, deep amber `#e8941a`; keep `#7a5900` for small-text contrast.
- [ ] Add orange-wave decorative background (CSS or `img-01` as section bg) to major light sections.
- [ ] Update `why-page.css`, `home-page.css`, `about-*.css`, `admissions-page.css` variable values to match.

### Home page (new sequence to mirror brochure)
1. Hero — new headline **“Nurturing Academic Leaders Who Will Lead Classrooms and Congregations”**, sub: “Where Minds Graduate with Honors, and Hearts Graduate with IMAN.” CTA unchanged.
2. **Vishwa Guru section** (currently on About/Why pages — bring a condensed version to Home, position #2) with `img-04` + “Building Academic Leadership for New India” banner.
3. Mission + Vision cards (exact brochure copy) with `img-07` / `img-08`.
4. About IMS teaser (sister org, founded 2008, labs, NEET/JEE) with campus photo.
5. Dual Pathway teaser (2 paths) with `img-03` → links to Programs.
6. Phases timeline (update Phase 1 to **Grades 5–8**).
7. Residential teaser (4 Pillars condensed).
8. Admissions CTA (Grades 5th–8th, age 10–14, Hifz Plus mention).

### About page
- [ ] Reorder: Mission → Vision → About IMS story → Vishwa Guru (full text incl. quote block) → tagline.
- [ ] Insert exact mission/vision copy from page 3 (current copy is close; align word-for-word).

### Programs page
- [ ] Header: “The Dual Pathway — Excellence in Academia, Mastery in Faith”.
- [ ] Path 1 intro (“Great schools are built by great educators…”), then 5 phases — **fix Phase 1 to Grades 5–8**.
- [ ] Path 2 Islamic Scholarship with `img-22`.
- [ ] NextGen Graduate section: visionary/scholar duo + the 3 “will” bullets + `img-06`/`img-17`/`img-10`.

### Residential page
- [ ] Title: “A Home Away from Home, A Foundation for Life”.
- [ ] 4 Pillars with Arabic names (Aql, Ruh, Khuluq, Qiyadah) and exact descriptors — verify current copy matches.
- [ ] Closing “investment that yields a return…” quote.

### Admissions page
- [ ] Criteria: **Grades 5th to 8th (Age 10–14)** — currently 6–8 in places; update everywhere (siteContent, seo, schema).
- [ ] Hifz Plus section copy — already exists, align word-for-word with page 6.
- [ ] Assessment Process — 3 steps exactly as page 7 (current Process component: verify steps & wording).
- [ ] Parent organization blurb (IMS legacy) + link to Gallery.

### Gallery page
- [ ] Add “Glimpses of IMS” section with the 12 brochure campus photos (`img-26`–`img-37`).

### Contact / Footer
- [ ] Address: “Near AMU Fort, Fort Enclave Colony, Aligarh, UP, India” (brochure says **AMU Fort**; site says “Near Fort” — align).
- [ ] Phones: +91 7037511306, +91 6398874753 · Email: nextgeneacademy.ims@gmail.com — verify these are what's in `siteContent.js`.

### Data files to touch
- `src/lib/siteContent.js` (most copy), `src/lib/homeContent.js`, `src/lib/seo.js`, `src/lib/schema.js`, `src/lib/navigation.js` (if section order changes), `src/lib/images.js` (new brochure images).

---

## 5. Open Questions (answer before implementation)

1. **Grades 5–8 vs 6–8** — brochure says 5th–8th; the site says 6–8 in some places. Use 5–8 everywhere?
2. **Theme strength** — switch fully to bright amber `#f5a623` + cream `#faf3e3`, or keep the current muted gold and only add wave decorations? (Full switch recommended for brochure fidelity.)
3. **Red accent** (`#e03131`) — use it (sparingly, e.g. admission criteria cards) or skip?
4. AI-generated brochure images (`img-03`, `img-06`, etc.) — okay to use on the live site alongside real campus photos?
