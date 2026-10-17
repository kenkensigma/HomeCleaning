DESIGN SYSTEM — HOME CLEANING
Premium Cleaning Service Website · Buleleng, Bali
Purpose: a distinctive, polished, conversion-focused website for HOME CLEANING.
Visual direction: deep forest green, warm white, restrained yellow accents, editorial typography, authentic service photography placeholders, and purposeful motion.
Reference principle: take inspiration from the supplied cleaning-service reference's contrast, generous whitespace, and strong hero composition. Do not copy its exact layout, wording, or component arrangement.

1. Product & Brand
Business information
- Business name: HOME CLEANING
- Category: Home cleaning / cleaning service
- Location: Jl. Gajah Mada No.77b, Banjar Jawa, Kec. Buleleng, Kabupaten Buleleng, Bali 81112
- Phone / WhatsApp: 0822-4575-8655
- Hours: Open 24 hours (as listed)
- Google rating: 5.0/5 from 12 reviews
- Plus Code: V3PV+7M Banjar Jawa, Kabupaten Buleleng, Bali
- Business note: Listing identifies the business as women-owned.
Positioning
A friendly, professional cleaning service for people who want a cleaner, fresher space without sacrificing their time. The site should communicate trust, care, thoroughness, and convenience.
Audience
- Homeowners and renters
- Busy families and professionals
- People preparing a property for guests or a new occupant
- Small offices and commercial spaces
- Customers looking for deep cleaning
Brand personality
- Fresh, calm, meticulous, approachable
- Professional without feeling corporate or cold
- Premium without making unsupported luxury claims
- Local and trustworthy
Language
Use Bahasa Indonesia for the primary interface. Keep the business name HOME CLEANING as supplied. Copy should sound natural, concise, and credible. Do not invent service prices, guarantees, certifications, service areas, team size, or years of experience.
Suggested brand line
“Ruang Bersih. Pikiran Lebih Tenang.”
Supporting copy:
“Layanan cleaning service untuk rumah dan tempat usaha, dengan pengerjaan yang teliti dan pelayanan yang ramah.”
CTA:
- Primary: Konsultasi via WhatsApp
- Secondary: Lihat Layanan
2. Art Direction
Core visual idea
A carefully art-directed cleaning brand site that feels like a real business with a strong design identity—not a generic SaaS landing page. The visual rhythm should alternate between dark-green brand moments and warm, bright editorial sections.
Use:
- Deep green as the signature surface
- Warm white for the majority of the page
- Pale sage for quiet supporting surfaces
- Yellow only for high-value actions and small visual punctuation
- Realistic photography placeholders with clear labels until real assets are supplied
- Large, confident headlines balanced by readable body text
- Thin dividers, precise alignment, restrained corner radii
- Intentional asymmetry rather than a grid of identical cards
Avoid:
- Purple/blue gradients
- Neon green
- Glassmorphism
- Huge headings in every section
- Excessive pills and rounded cards
- Repeated three-card sections
- Random floating icons, decorative blobs, or sparkles
- Excessive shadows
- Fake customer photos, fake logos, or fabricated testimonials
- Filling every section with animation
- Using generated stock images in place of the requested placeholders
3. Color Tokens
Use CSS custom properties. Suggested starting values:
:root {
  --color-forest: #073F38;
  --color-forest-deep: #052F2A;
  --color-forest-soft: #14574D;
  --color-sage: #E8F0E7;
  --color-sage-strong: #CFDFC9;
  --color-cream: #F8F8F3;
  --color-white: #FFFFFF;
  --color-ink: #172521;
  --color-muted: #66736D;
  --color-line: #E1E7E0;
  --color-accent: #F2D52E;
  --color-accent-hover: #DFC31E;
  --color-success: #267653;
}
Usage ratios
- Warm white / white: 55–65%
- Deep forest green: 25–35%
- Sage / neutral: 8–12%
- Yellow accent: 3–5%
Contrast rules
- White text on forest green
- Ink text on white/cream
- Forest text on pale sage
- Yellow buttons use dark-green/ink text
- Never use yellow for long paragraphs or tiny low-contrast text
4. Typography
Choose a deliberate, small type system. Recommended:
- Headlines: Manrope (600–700) or DM Sans (600–700)
- Body/UI: DM Sans (400–500)
Load fonts with a reliable font provider if network access is available, and provide system fallbacks. Do not use more than two font families.
Scale
- Hero headline: clamp(2.8rem, 6vw, 5.6rem); compact line-height around 0.98–1.06
- Section headline: clamp(2rem, 3.4vw, 3.25rem)
- Subheading: 1.15–1.35rem
- Body: 1rem–1.125rem; line-height 1.6–1.75
- Eyebrow: 0.72rem–0.8rem, uppercase, letter spacing 0.12em
- Small metadata: 0.8rem–0.9rem
Rules:
- Do not make every heading oversized.
- Use a clear hierarchy and keep paragraphs narrow enough to read.
- Avoid excessive bold text, gradient text, text shadows, and all-caps body copy.
- Use sentence case for most headings.
- Avoid long em-dash-heavy marketing copy.
5. Layout & Spacing
- Main content max width: 1280px–1360px
- Desktop side padding: clamp(24px, 5vw, 80px)
- Tablet side padding: 28px–36px
- Mobile side padding: 20px–24px
- Section vertical spacing: clamp(76px, 10vw, 144px)
- Compact section spacing: 48px–72px
- Use a 12-column grid on desktop, 6 columns on tablet, and 4 columns on mobile.
- Keep the header restrained; don't let navigation overpower the hero.
- Use border radius intentionally: 8–12px for controls, 16–24px for large image panels. Avoid rounding every element.
- Use fine borders and whitespace before adding shadows.
6. Image Placeholder System — Required
Do not source, generate, or fabricate photography. Use visual placeholders only. Each photo area must display an intentional placeholder block with a clear text label such as:
- [HERO IMAGE — FOTO PETUGAS MEMBERSIHKAN RUANGAN]
- [IMAGE PLACEHOLDER — DEEP CLEANING SOFA]
- [IMAGE PLACEHOLDER — PEMBERSIHAN DAPUR]
- [IMAGE PLACEHOLDER — PEMBERSIHAN KAMAR MANDI]
- [IMAGE PLACEHOLDER — TIM HOME CLEANING]
- [IMAGE PLACEHOLDER — HASIL SEBELUM / SESUDAH]
Placeholder design:
- Use a pale sage or muted green background, subtle border, and a small image icon if available.
- Show the label clearly in the center or bottom-left.
- Optional: use a faint abstract geometric texture made in CSS, but do not use fake photos.
- Keep a consistent aspect ratio per use case.
- Use semantic <figure> and <figcaption> when appropriate.
- Add useful aria-label or alt text that explains this is an image placeholder.
- Make placeholders easy to replace later by using a reusable ImagePlaceholder component or consistent component API.
- Do not make the placeholder look like a broken image.
- Do not put image URLs into the project.
Suggested aspect ratios:
- Hero image: 4 / 5 or 5 / 4 depending on layout
- Service feature: 4 / 3
- Gallery tiles: 1 / 1 or 4 / 3
- Team/about image: 5 / 4
- Before/after panels: equal 4 / 3 panels
7. Page Architecture
Build a polished, single-page marketing website with anchor navigation.
A. Announcement strip
A slim forest-green strip at the very top.
- Copy: “Layanan cleaning service di Buleleng, Bali”
- Optional small text: “Terbuka 24 jam” only if it remains readable and not cramped.
- No scrolling marquee by default.
B. Header / Navigation
- Wordmark: HOME CLEANING with a minimal leaf/sparkle-free typographic treatment or simple custom monogram.
- Links: Beranda, Layanan, Cara Kerja, Ulasan, Tentang
- Right-side action: Hubungi Kami
- Sticky on scroll, with a restrained background and thin border.
- Mobile menu must open/close accessibly, lock/unlock scrolling if needed, and close after choosing a link.
- Active navigation state should be subtle.
- Do not invent a logo asset; create a text-based wordmark.
C. Hero — strongest visual moment
Desktop: two-column composition, copy on left and a large photo placeholder on right, overlapping slightly with a forest-green panel or framed composition. Keep enough whitespace for a premium editorial feel.
Eyebrow: “HOME CLEANING · BULELENG, BALI”
Headline:
“Ruang bersih.
Pikiran lebih tenang.”
Body:
“Bantu jaga rumah dan tempat usaha tetap bersih dengan layanan yang teliti, praktis, dan ramah.”
Primary CTA: “Konsultasi via WhatsApp”
Secondary CTA: “Jelajahi layanan”
Trust micro-row:
- 5.0/5 rating
- 12 ulasan Google
- Buka 24 jam
Use only supplied business facts. Rating should be clearly contextualized as “berdasarkan 12 ulasan” and should not imply an independently verified live feed.
Hero image placeholder label:
[HERO IMAGE — PETUGAS HOME CLEANING SEDANG MEMBERSIHKAN RUANGAN]
Possible art direction: a large photo placeholder with a smaller forest-green info tag at the edge. Avoid too many floating UI badges.
D. Trust / Proof band
A clean horizontal band between hero and services.
- Heading: “Detail kecil. Hasil yang terasa.”
- Use three proof points based on the supplied reviews:
  1. Pengerjaan teliti
  2. Tim ramah
  3. Layanan direkomendasikan pelanggan
- Phrase these as review themes, not guaranteed outcomes.
- A small rating summary may read 5.0/5 · 12 ulasan with a link to the review section.
E. Services
Section intro:
Eyebrow: “LAYANAN KAMI”
Heading: “Bersih menyeluruh, sesuai kebutuhan ruangmu.”
Body: “Ceritakan area yang ingin dibersihkan, lalu konsultasikan kebutuhanmu dengan tim HOME CLEANING.”
Show 3–4 service entries with distinctive editorial layouts, not identical cards:
1. Home Cleaning — placeholder image for general home cleaning.
2. Deep Cleaning — placeholder image for detailed cleaning.
3. Cleaning Area Dapur & Kamar Mandi — present as an area-specific cleaning option to discuss, not a confirmed package.
4. Cleaning Tempat Usaha — based on customer reviews mentioning homes and business premises; label it as a service to confirm with the business.
Each service:
- One sentence of neutral descriptive copy.
- A text CTA: “Konsultasikan layanan”
- A clear WhatsApp action that includes the selected service in the prefilled message.
- No fabricated prices, duration, package details, or guarantees.
- Clearly communicate that availability/scope should be confirmed directly.
F. Featured service / deep-cleaning editorial section
An asymmetrical split layout with a large placeholder and a text block.
Heading: “Untuk sudut yang butuh perhatian ekstra.”
Copy should explain that customers can ask about detailed/deep cleaning for areas that need extra attention, without promising specific techniques or outcomes.
CTA: “Diskusikan kebutuhanmu”
Image placeholder:
[IMAGE PLACEHOLDER — DETAIL PEMBERSIHAN PERMUKAAN / DEEP CLEANING]
Use a forest-green background or forest-green typography, not both for every section. This is a visual pause between white sections.
G. How it works
Heading: “Mudah dari awal sampai selesai.”
Use a horizontal timeline on desktop and vertical numbered steps on mobile:
1. Hubungi kami — Jelaskan ruang dan kebutuhanmu lewat WhatsApp.
2. Konsultasikan detail — Diskusikan area, kebutuhan, dan ketersediaan layanan.
3. Konfirmasi jadwal — Sepakati jadwal dan detail pekerjaan langsung dengan tim.
4. Tim mulai bekerja — Pelaksanaan mengikuti detail yang telah disepakati.
Do not claim online booking automation or instant confirmation. This is a consultation flow.
H. Results / gallery
Heading: “Ruang yang lebih nyaman dimulai dari perawatan yang tepat.”
Use a visually varied gallery with 3–4 placeholder tiles.
Labels:
- [IMAGE PLACEHOLDER — LIVING ROOM CLEANING]
- [IMAGE PLACEHOLDER — DAPUR BERSIH]
- [IMAGE PLACEHOLDER — KAMAR MANDI]
- [IMAGE PLACEHOLDER — DETAIL PERMUKAAN]
Do not use a fake before-and-after comparison unless actual matched images are provided. If showing before/after as a future slot, label both sides as placeholders and do not imply a real result.
I. Customer reviews
Heading: “Dipercaya lewat pengalaman pelanggan.”
Summary: 5.0/5 · 12 ulasan Google based on supplied information.
Use only the following customer-provided excerpts, preserving their meaning and avoiding fabricated names/quotes:
1. “Rekomended..kerja bagus dan benar2 profesional..🙏pokoknya benar2 clean”
2. “Operatornya sangat ramah dan recomended bagi yg punya masalah deep cleaning!”
3. “Rekomended..pelayanan memuaskan.”
4. Review excerpt attributed to Alvian Adi suryana: “Tempat cleaning service Recomendasi buat kalian yg gak sempat bersih² rumah dan tenpat usaha... Pengerjaan sangat bersih dan bagus...teliti dan sangat terstruktur... Team home clening juga ramah dan baik...sangat oke lah”
5. Review excerpt attributed to Random: “Jasa cleaning ini recomended banget, kerjanya cepat dan hasilnya sangat memuaskan...pokoknya pas banget buat kalian yg ingin bersih2 properti tapi ga punya waktu dan tenaga.”
6. Review excerpt attributed to Ateng Sgr: “Recommended ...pelayanan bagus dan petugasnya GK pelit utk berbagi ilmu cleaning👌🙏🙏🙏”
Rules:
- Do not invent review dates, profile photos, extra reviewer identities, or additional quotes.
- Do not fabricate a Google embed. A simple text link/button to Google Maps is acceptable if a valid URL is created from the supplied business address and checked before use. If a verified direct listing URL is unavailable, use a Maps search URL based on the business name and address rather than claiming it is the official listing.
- Present long reviews as shortened excerpts only if the shortened copy stays faithful; ellipses may indicate truncation.
- Make the section accessible and readable. Do not force an auto-advancing carousel; use a grid, horizontal scroller with controls, or static editorial review layout.
J. About the business
Heading: “Perawatan ruang dengan perhatian pada detail.”
Copy:
“HOME CLEANING melayani kebutuhan kebersihan di kawasan Buleleng, Bali. Hubungi kami untuk mendiskusikan kebutuhan ruang, jenis pembersihan, serta jadwal yang sesuai.”
Include:
- Address
- Phone number
- Listed hours: Open 24 hours
- Optional note: listing identifies the business as women-owned
- Image placeholder: [IMAGE PLACEHOLDER — TIM HOME CLEANING / SUASANA KERJA]
Do not invent a company founding year, staff count, certification, equipment, eco-friendly claim, or insurance coverage.
K. Final CTA
A strong dark-green section with an editorial layout.
Heading: “Siap bikin ruang terasa lebih segar?”
Copy: “Ceritakan kebutuhanmu. Kita mulai dari konsultasi singkat.”
Button: “Chat HOME CLEANING”
Secondary text: “0822-4575-8655”
Use a quiet background pattern only if made with CSS and kept subtle. Do not add fake floating chat windows.
L. Footer
- HOME CLEANING wordmark
- Short brand line
- Anchor links
- Address
- Phone / WhatsApp
- Listed hours: Buka 24 jam
- Copyright with current year generated dynamically
- Small “Kembali ke atas” link
- No fake social links. Only show social icons if real URLs are provided.
8. Functional Requirements
WhatsApp links
Use https://wa.me/6282245758655 (country code format, no leading 0 or punctuation). Add URL-encoded prefilled messages, for example:
Halo HOME CLEANING, saya ingin konsultasi layanan cleaning service. Saya ingin membersihkan [jenis area]. Bisa info detail layanan dan ketersediaannya?
Service-specific messages should include the relevant service label. Do not auto-send messages; open WhatsApp for the user to review and send.
Contact interactions
- Phone number should use tel:+6282245758655.
- WhatsApp buttons should open in a new tab/window safely where applicable.
- Address can link to a Google Maps search URL built from the supplied name and address.
- All buttons and links must have real destinations or working interactions. No dead href="#" links.
- Form (if included) must validate fields and provide a usable fallback. Do not pretend a message was sent if there is no backend. Prefer direct WhatsApp contact rather than a nonfunctional form.
Navigation
- Anchor links should scroll to the correct section.
- Sticky header should not cover section headings; use scroll-margin-top.
- Mobile menu needs keyboard support and accessible expanded state.
Accessibility
- Semantic landmarks: header, nav, main, section, footer.
- Correct heading hierarchy.
- Visible keyboard focus styles.
- Accessible color contrast.
- Descriptive accessible labels.
- Respect prefers-reduced-motion.
- Never rely on color alone to communicate state.
- All interactive elements must be keyboard accessible.
SEO
- Title: HOME CLEANING | Cleaning Service di Buleleng, Bali
- Meta description: Konsultasikan kebutuhan home cleaning dan deep cleaning di Buleleng, Bali. Hubungi HOME CLEANING untuk detail layanan dan ketersediaan jadwal.
- Set language to id.
- Use Open Graph title/description; do not invent an OG photo.
- Add LocalBusiness structured data only for known facts. Use appropriate type such as HouseCleaning if supported by the chosen schema vocabulary, otherwise LocalBusiness or ProfessionalService. Include name, address, telephone, opening hours, and URL only when valid. Do not invent geo coordinates, price range, or social profiles.
- Keep metadata truthful and consistent with visible content.
9. Motion Direction — Award-Level, Not Distracting
Motion should feel choreographed and intentional. Prioritize composition, timing, and easing over quantity.
Motion principles
- One coherent motion language across the whole site.
- Mostly transform and opacity; avoid expensive layout animations.
- Use cubic-bezier(0.22, 1, 0.36, 1) or similarly smooth easing.
- No constant movement, bouncing, flashing, or unnecessary parallax.
- Avoid animating every word, icon, card, and paragraph independently.
- Never make content inaccessible while waiting for an animation.
- Disable or simplify motion when prefers-reduced-motion: reduce.
Suggested sequence
1. Hero entrance: eyebrow fades upward slightly, headline reveals by line or clipped mask, body and CTA follow with short stagger, hero placeholder settles into place.
2. Header: subtle transition from transparent/cream to a solid warm-white background with a thin border on scroll.
3. Section reveal: section headings and main media reveal once when entering viewport; use small vertical offset (12–24px) and opacity.
4. Image placeholders: a restrained masked reveal or subtle scale from 0.985 to 1, never an artificial shimmer that implies loading.
5. Service interaction: image placeholder scales slightly on hover; title/arrow shifts subtly; whole card should not jump.
6. How-it-works timeline: line draws in on scroll if it can be implemented accessibly; numbered steps fade in with small stagger.
7. Review interaction: simple hover/focus border or background shift; no auto-advancing carousel.
8. CTA: button has a clear hover/pressed state, tiny directional arrow movement, and visible focus ring.
9. Back to top: smooth scroll only when reduced motion is not requested.
Timing guide
- Micro-interaction: 160–240ms
- Button/link hover: 180–260ms
- Section reveal: 500–800ms
- Hero stagger interval: 80–140ms
- Stagger cap: 4–5 items
- Once-only viewport reveals by default
Implementation choices
- Use CSS transitions and keyframes for small effects.
- If the project already uses Framer Motion / Motion, use it consistently for the hero and scroll reveals.
- Do not install a heavy animation library just to animate a few fades.
- If using IntersectionObserver, unobserve elements after reveal where suitable and ensure content remains visible without JavaScript.
- Do not use smooth-scroll behavior without respecting reduced-motion preferences.
- Ensure the page looks complete if animation scripts fail.
10. Responsive Behavior
Desktop (>= 1024px)
- Two-column hero with strong visual balance.
- Spacious editorial sections and asymmetric service layouts.
- Horizontal process timeline.
- Review layout can use 2–3 columns depending on content length.
Tablet (768–1023px)
- Reduce hero type size and side padding.
- Keep hero image large enough to read as a focal point.
- Allow service layouts to stack selectively.
- Avoid narrow columns with long review text.
Mobile (< 768px)
- Compact header with working menu and a clear WhatsApp CTA.
- Hero becomes one column; copy appears before image.
- Do not crop the placeholder label or important content.
- Buttons become full-width where helpful.
- Timeline becomes vertical.
- Review content is a simple stack or manually controlled horizontal list.
- No horizontal page overflow.
- Keep tap targets around 44px or larger.
- If a sticky bottom WhatsApp CTA is used, it must not cover footer text or keyboard focus; provide enough bottom padding. Use only if it improves the experience rather than cluttering it.
11. Quality Bar / Acceptance Checklist
Before calling the design complete:
- [ ] Looks like a bespoke local service brand, not a generic SaaS template.
- [ ] Deep green, warm white, sage, and yellow are used consistently.
- [ ] Hero composition has a clear focal point and confident typography.
- [ ] Every photo area is a labeled placeholder, never a fake photo.
- [ ] Spacing and typography have deliberate rhythm.
- [ ] Sections vary in composition; not every section is a grid of cards.
- [ ] Animations feel smooth and purposeful, not excessive.
- [ ] Reduced-motion preference is supported.
- [ ] All WhatsApp, phone, map, and navigation actions work.
- [ ] Rating and reviews are accurately attributed to supplied information.
- [ ] No invented price, certification, guarantee, business history, or review.
- [ ] Mobile layout is polished and fully usable.
- [ ] No console errors, broken links, or horizontal overflow.
- [ ] SEO and accessibility basics are implemented.