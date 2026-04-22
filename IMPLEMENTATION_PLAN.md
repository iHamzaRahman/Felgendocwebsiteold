# FelgenDoc Göttingen - Complete Website Implementation Plan

## Overview
Transform the current single-page application into a multi-page website with proper routing, following the master document specifications exactly. All pages will maintain the premium dark theme with bronze-gold gradient accents from the logo.

---

## Phase 1: Routing Infrastructure Setup
**Goal:** Set up React Router and page structure foundation

### Tasks:
1. Configure React Router DOM with BrowserRouter
2. Create `/src/app/pages/` directory structure
3. Create route configuration file
4. Update App.tsx to use routing instead of single-page sections
5. Update Header navigation to use React Router Links
6. Create a Layout component for shared header/footer
7. Ensure smooth scroll behavior is maintained

### Files to Create/Modify:
- `src/app/routes.tsx` - Route definitions
- `src/app/pages/HomePage.tsx` - Move current homepage content
- `src/app/components/Layout.tsx` - Shared layout wrapper
- `src/app/App.tsx` - Update to use routing

### Success Criteria:
- Navigation between pages works smoothly
- Header and footer appear on all pages
- WhatsApp floating button persists across pages
- URLs update correctly (/, /felgenreparatur, etc.)

---

## Phase 2: Homepage Optimization
**Goal:** Finalize homepage with all required sections from master document

### Current Status:
✅ Hero section
✅ Trust Stats (500+ repairs, 100% satisfaction, Göttingen)
✅ Services Overview
✅ Leasing Return Section
✅ Before/After Gallery preview
✅ Testimonials/Reviews
✅ Why Us section
✅ CTA Banner
✅ Contact section
✅ Footer

### Tasks:
1. Review all homepage sections against master document
2. Ensure all copy matches German text from document
3. Verify all gradient applications are consistent
4. Add any missing trust elements
5. Optimize mobile responsiveness
6. Test all scroll anchors and smooth scrolling

### Files to Modify:
- `src/app/pages/HomePage.tsx`
- Individual component files as needed

### Success Criteria:
- All 9 sections from master document present
- German copy matches exactly
- Gradient consistently applied
- Mobile-responsive on all screen sizes
- All CTAs link correctly

---

## Phase 3: Felgenreparatur & Oberflächen Page
**Goal:** Create dedicated service page for wheel repair services

### Content Requirements (from master document):
- Page header with hero image
- Introduction paragraph about damaged wheels
- 6 service cards with icons:
  1. Felgenreparatur
  2. Felgen abdrehen (CNC-Technik)
  3. Sandstrahlen
  4. Pulverbeschichtung von Felgen
  5. Pulverbeschichtung von Motorradteilen
  6. Entfernung von Bordsteinschäden
- Each service has detailed description
- CTA section at bottom (Call + Contact form button)
- Before/After gallery specific to wheel repairs

### Tasks:
1. Create FelgenreparaturPage component
2. Create ServiceDetailCard component (reusable)
3. Implement service icon system with gradient styling
4. Add wheel repair specific before/after images
5. Create page-specific hero section
6. Add SEO meta tags (title, description from document)
7. Implement CTAs at bottom

### Files to Create:
- `src/app/pages/FelgenreparaturPage.tsx`
- `src/app/components/ServiceDetailCard.tsx`
- `src/app/components/PageHero.tsx` (reusable hero component)

### Success Criteria:
- All 6 services displayed with descriptions
- Premium visual design consistent with homepage
- CTAs functional
- Page loads smoothly from navigation
- Meta tags properly set

---

## Phase 4: Fahrzeugaufbereitung Page
**Goal:** Create dedicated page for vehicle detailing services

### Content Requirements (from master document):
- Page header with hero
- Introduction about vehicle detailing
- 8 service cards:
  1. Nano-Lackversiegelung
  2. Keramik-Lackversiegelung
  3. Lackbehandlung
  4. Innenraumreinigung
  5. Lederaufbereitung
  6. Smart Repair
  7. Teilfolierung
  8. Dellendoktor
- Each with detailed description
- CTA section at bottom

### Tasks:
1. Create FahrzeugaufbereitungPage component
2. Reuse ServiceDetailCard component
3. Add detailing-specific imagery
4. Implement service descriptions from document
5. Add CTAs (same structure as Felgenreparatur page)
6. Set page-specific meta tags

### Files to Create:
- `src/app/pages/FahrzeugaufbereitungPage.tsx`

### Success Criteria:
- All 8 services displayed
- Consistent design with other service pages
- German copy accurate
- CTAs functional

---

## Phase 5: Galerie Page
**Goal:** Create comprehensive before/after gallery with filtering

### Content Requirements (from master document):
- Page header
- Filter tabs: Alle, Felgenreparatur, Pulverbeschichtung, Fahrzeugaufbereitung, Motorrad
- Masonry or grid layout for before/after pairs
- Interactive before/after sliders (already implemented)
- Service labels on each image pair
- Minimum 15-20 high-quality image pairs
- CTA to contact at bottom

### Tasks:
1. Create GaleriePage component
2. Implement filter tab system with animations
3. Create gallery data structure
4. Integrate existing BeforeAfterCard component
5. Implement masonry/grid layout (use react-responsive-masonry - already installed)
6. Add image lazy loading
7. Create lightbox/modal for fullscreen view (optional enhancement)
8. Add CTA section

### Files to Create:
- `src/app/pages/GaleriePage.tsx`
- `src/app/components/GalleryFilter.tsx`
- `src/data/galleryData.ts` - Gallery image data

### Success Criteria:
- Filter system works smoothly
- Before/after sliders interactive
- Responsive grid layout
- Images load efficiently
- Premium visual presentation

---

## Phase 6: Über Uns Page
**Goal:** Create company about page with team info

### Content Requirements (from master document):
- Page header
- Company introduction paragraphs
- Why FelgenDoc is different (specialist positioning)
- Team section featuring Burim Shashivari
- Company values/approach
- CTA to contact

### Tasks:
1. Create UeberUnsPage component
2. Create team member card component
3. Implement company story section
4. Add owner quote section
5. Create values/differentiators section
6. Add CTA at bottom
7. Consider adding company timeline or milestones

### Files to Create:
- `src/app/pages/UeberUnsPage.tsx`
- `src/app/components/TeamMemberCard.tsx`
- `src/app/components/CompanyValues.tsx`

### Success Criteria:
- Professional about page design
- Clear company positioning
- Team section present
- Engaging and trustworthy presentation
- CTA functional

---

## Phase 7: Standalone Kontakt Page
**Goal:** Create dedicated contact page with enhanced features

### Content Requirements (from master document):
- Two-column layout
- Left: Contact information (phone, email, address, hours)
- Right: Contact form
- Google Maps embed
- WhatsApp and Call buttons
- Opening hours clearly displayed
- Form fields: Name*, Phone*, Email, Service dropdown, Message
- GDPR checkbox

### Tasks:
1. Create KontaktPage component
2. Enhance existing Contact component or create new version
3. Integrate Google Maps embed (Rudolf-Winkel-Straße 11, 37081 Göttingen)
4. Add opening hours display
5. Ensure form validation
6. Add form submission handling (placeholder)
7. Style map integration

### Files to Create:
- `src/app/pages/KontaktPage.tsx`
- `src/app/components/GoogleMap.tsx`

### Success Criteria:
- Form fully functional
- Map displays correct location
- Contact info clearly presented
- Mobile responsive
- GDPR compliant

---

## Phase 8: SEO & Meta Tags
**Goal:** Implement proper SEO for all pages

### Tasks:
1. Install react-helmet-async or use document.title
2. Create SEO component for meta tags
3. Add meta tags to all pages:
   - Title (from master document)
   - Description (from master document)
   - Open Graph tags
   - Favicon
4. Implement structured data (LocalBusiness schema)
5. Add sitemap.xml
6. Add robots.txt

### Files to Create:
- `src/app/components/SEO.tsx`
- `public/sitemap.xml`
- `public/robots.txt`

### Success Criteria:
- Each page has unique title and description
- Schema markup present on homepage and contact
- Social sharing works with proper previews

---

## Phase 9: Performance & Polish
**Goal:** Optimize performance and add final touches

### Tasks:
1. Optimize images (compress, lazy loading)
2. Add loading states for page transitions
3. Implement error boundaries
4. Add 404 page
5. Test all animations on slower devices
6. Verify all gradients render correctly
7. Test on multiple browsers (Chrome, Firefox, Safari, Edge)
8. Mobile testing on real devices
9. Accessibility audit (keyboard navigation, ARIA labels)
10. Performance audit (Lighthouse)

### Files to Create:
- `src/app/pages/NotFoundPage.tsx`
- `src/app/components/ErrorBoundary.tsx`
- `src/app/components/PageLoader.tsx`

### Success Criteria:
- Lighthouse score >90 on all metrics
- No console errors
- Smooth animations on mobile
- All links work
- Proper error handling

---

## Phase 10: Content Integration & Final Review
**Goal:** Ensure all content matches master document exactly

### Tasks:
1. Compare all German text with master document
2. Verify all service descriptions are complete
3. Ensure all phone numbers, emails, addresses correct
4. Check all CTAs link properly
5. Verify brand consistency (logo, gradients, colors)
6. Test complete user journeys:
   - Landing → Service page → Contact
   - Landing → Gallery → Contact
   - Landing → About → Contact
7. Final spell-check and grammar review
8. Client review preparation

### Success Criteria:
- 100% match with master document content
- All user journeys smooth
- No broken links
- Professional, premium presentation
- Ready for client approval

---

## Technical Specifications

### Routing Structure:
```
/ - HomePage
/felgenreparatur - FelgenreparaturPage
/fahrzeugaufbereitung - FahrzeugaufbereitungPage
/galerie - GaleriePage
/ueber-uns - UeberUnsPage
/kontakt - KontaktPage
```

### Shared Components:
- Layout (Header + Footer wrapper)
- PageHero (reusable hero section)
- ServiceDetailCard (service display)
- GradientButton (already created)
- SEO (meta tags)
- WhatsAppButton (floating, persistent)

### Design System:
- Colors: #0A0A0A (bg), #111111 (sections), #1A1A1A (cards)
- Gradient: linear-gradient(135deg, #8B6914, #C9A84C, #E8C068)
- Fonts: Barlow Condensed (headings), Inter (body)
- Animations: Motion/React with scroll triggers
- Responsive: Mobile-first approach

### Key Features:
- Smooth page transitions
- Gradient accents throughout
- Interactive before/after sliders
- Scroll-triggered animations
- Mobile-responsive design
- WhatsApp integration
- Contact forms
- Google Maps integration

---

## Execution Order

Each phase will be executed sequentially after approval:

**Step 1:** Routing Infrastructure (get website ready for multiple pages)
**Step 2:** Homepage Optimization (finalize current content)
**Step 3:** Felgenreparatur Page (first service page)
**Step 4:** Fahrzeugaufbereitung Page (second service page)
**Step 5:** Galerie Page (showcase work)
**Step 6:** Über Uns Page (build trust)
**Step 7:** Kontakt Page (conversion page)
**Step 8:** SEO Setup (discoverability)
**Step 9:** Performance & Polish (quality assurance)
**Step 10:** Final Review (client-ready)

**Total Estimated Steps:** 10 phases
**Current Status:** Phase 0 complete (Homepage sections built)
**Ready to begin:** Phase 1 - Routing Infrastructure

---

## Notes
- All content in German as per master document
- Premium positioning throughout
- Focus on lead generation (calls, WhatsApp, forms)
- Mobile-first, responsive design
- Fast loading times
- Professional, trustworthy presentation
