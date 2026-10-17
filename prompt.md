IMPLEMENTATION PROMPT — HOME CLEANING WEBSITE
You are a senior product designer, creative developer, and frontend engineer. Build a complete, production-quality website for HOME CLEANING, a cleaning service in Buleleng, Bali.
Mandatory first step
1. Inspect the existing project structure and identify the current framework, scripts, dependencies, and conventions.
2. Read design.md completely before making design or implementation decisions.
3. If present, also read system.md and antislop.md completely and follow them. If a file is missing, continue using the available files; do not invent its contents.
4. Reuse the existing stack and project setup. Do not replace the framework or rewrite the project architecture without a clear technical reason.
5. Then implement the actual website. Do not stop at a plan, mockup, or list of suggestions.
Goal
Create an elegant, responsive, memorable cleaning-service website with an award-level level of art direction and motion. It should feel carefully designed for a real local business—not like a generic AI-generated template.
Use design.md as the source of truth for visual identity, page sections, content, placeholder imagery, motion, accessibility, SEO, and functional requirements.
Brand and verified supplied data
- Business: HOME CLEANING
- Category: Cleaning service / jasa tukang
- Address: Jl. Gajah Mada No.77b, Banjar Jawa, Kec. Buleleng, Kabupaten Buleleng, Bali 81112
- Phone: 0822-4575-8655
- WhatsApp: https://wa.me/6282245758655
- Hours: listed as open 24 hours
- Rating: 5.0/5 from 12 reviews (supplied listing data)
- Plus Code: V3PV+7M Banjar Jawa, Kabupaten Buleleng, Bali
- Listing identifies the business as women-owned.
- Review themes include thorough work, friendly service, professional attitude, and recommendations for deep cleaning.
Do not invent prices, packages, certifications, years in business, team size, guarantees, service-area coverage, social accounts, or booking systems. Make it clear that customers should contact the business to confirm service scope, availability, and scheduling.
Required image handling
This is a strict requirement:
- Do not fetch, generate, or insert real photos.
- Do not use remote image URLs, stock images, random Unsplash URLs, or AI-generated imagery.
- Every image area must be a polished placeholder with visible text such as [HERO IMAGE — FOTO PETUGAS MEMBERSIHKAN RUANGAN].
- Create a reusable ImagePlaceholder component (or equivalent) that accepts a label, aspect ratio/class, and optional visual variant.
- Use different labels for the hero, each service, deep-cleaning feature, gallery, and about/team areas.
- Placeholders should look intentional and premium: pale sage/cream surface, quiet border, readable label, consistent alignment, and a restrained visual treatment. They must never look like broken images.
- Make it easy to replace a placeholder with a real image later without rebuilding the layout.
Design direction
Follow design.md precisely:
- Deep forest green + warm white as the main palette.
- Pale sage as a secondary surface.
- Restrained yellow for primary CTA accents.
- Editorial typography, deliberate whitespace, precise alignment, nuanced layouts, and varied section compositions.
- Strong hero composition with confident typography and a large labeled image placeholder.
- Avoid generic repeated cards, excessive rounding, excessive shadows, decorative icon clutter, gradients, glassmorphism, and giant headings in every section.
- Use Bahasa Indonesia for the main content.
- The result should feel premium, friendly, meticulous, trustworthy, and appropriate for a real local cleaning service.
Required page sections
Implement the complete one-page website:
1. Slim location/availability announcement strip.
2. Responsive header and navigation.
3. Hero with headline “Ruang bersih. Pikiran lebih tenang.”, service description, primary WhatsApp CTA, secondary services CTA, rating summary, and hero image placeholder.
4. Trust band using truthful review themes.
5. Services section with distinct layouts for Home Cleaning, Deep Cleaning, Cleaning Area Dapur & Kamar Mandi, and Cleaning Tempat Usaha. Treat area-specific/commercial services as options to confirm directly, not guaranteed packages.
6. Featured deep-cleaning editorial section.
7. Four-step “Cara Kerja” consultation process.
8. Gallery with labeled placeholders only.
9. Customer reviews using only the supplied reviews and accurate attributions.
10. About/contact section with supplied address, phone, hours, and an image placeholder.
11. Strong final WhatsApp CTA.
12. Footer with useful navigation and contact details.
Do not omit sections simply to save time. Adapt the layouts responsively while preserving the intended visual rhythm.
Animation and interaction quality
Build motion that feels choreographed, premium, and purposeful:
- A refined hero entrance with a short stagger.
- Restrained section reveals on scroll.
- Subtle image-placeholder reveal.
- Thoughtful hover/focus states on service links and buttons.
- Small directional movement on CTA arrows.
- Header background/border transition on scroll.
- Optional timeline reveal if it can be implemented cleanly.
- Respect prefers-reduced-motion.
- Avoid constant movement, exaggerated parallax, bouncing, excessive stagger, or animating every item.
- Prefer CSS transitions and keyframes; use an animation dependency only if the project already includes it or there is a clear reason.
- Ensure content remains visible if animation code fails or reduced motion is enabled.
- Animation should improve hierarchy and feel, not delay access to content.
Functional requirements
- All navigation links must target real section IDs.
- All WhatsApp buttons must open https://wa.me/6282245758655 with an appropriate URL-encoded prefilled message. For service CTAs, include the service name in the message. Never auto-send a message.
- The phone number must link using tel:+6282245758655.
- The address may link to a Google Maps search for HOME CLEANING and its supplied address. Do not pretend it is a verified direct listing link if it is not.
- Mobile navigation must work with pointer and keyboard, expose its expanded state accessibly, and close after selecting a link.
- Do not use dead href="#" links or decorative controls that do nothing.
- Do not create a fake contact form submission. Prefer WhatsApp consultation unless a real backend already exists.
- Ensure all controls have visible focus states and usable tap targets.
Content integrity
Use the supplied business details and review excerpts in design.md. Do not fabricate reviews, reviewer profile images, dates, ratings, or customer counts. Label the rating as supplied listing information (5.0/5 from 12 reviews). Do not create a fake Google Maps embed.
Technical quality
- Match the existing project stack and conventions.
- Use reusable components for repeated patterns without flattening the design into identical cards.
- Keep code readable, component boundaries sensible, and styles maintainable.
- Avoid unnecessary dependencies.
- Use semantic HTML and accessible labels.
- Include appropriate title, meta description, lang="id", Open Graph text metadata, and truthful LocalBusiness structured data where appropriate.
- Make the layout responsive at mobile, tablet, and desktop widths.
- Prevent horizontal overflow.
- Keep images as placeholders; do not add image assets.
- Do not leave TODOs for core functionality.
- Do not remove unrelated existing project functionality.
Implementation workflow
1. Inspect files and read the design/system/anti-slop docs.
2. Briefly determine the implementation approach from the actual stack.
3. Implement all sections, styling, interactions, responsive behavior, and animations.
4. Run the available lint/build/test commands from the project scripts.
5. Fix errors caused by your changes. If a command cannot run because of the environment, state that accurately.
6. Review the finished result for mobile overflow, placeholder labels, dead links, reduced-motion behavior, and visual consistency.
7. Summarize what was implemented, list changed files, and provide exact commands to run the site.
Do not return only a plan. Make the changes in the project.