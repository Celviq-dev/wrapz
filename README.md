# Wrapped Moments

# Sneha's Wrapzz Luxury Gifting Website — Antigravity Design Brief

**A comprehensive creative direction document for building a premium, emotionally-engaging gifting experience.**

---

## DESIGN READ

**Reading this as:** Premium consumer luxury gifting landing page for affluent, design-conscious professionals (ages 22–45) who view gift-giving as an emotional experience, not a transaction. Visual language: Modern Luxury + Editorial Minimalism + Handcrafted Sophistication. Leaning toward: Tailwind v4 + Motion (Framer) + bespoke micro-interactions that prioritize storytelling over features.

---

## CORE DIALS (Global Configuration)

These values drive every layout, animation, and density decision below:

- **`DESIGN_VARIANCE: 8`** — Intentional asymmetry, editorial layout breaks, non-repeating card patterns
- **`MOTION_INTENSITY: 7`** — Soft, physics-inspired, sensory (ribbon unfolding, paper reveal, blur fade)
- **`VISUAL_DENSITY: 3`** — Airy, gallery-like, generous whitespace, never overcrowded
- **`ART_DIRECTION: 9`** — Premium, art-directed imagery; no stock photography defaults
- **`SPACING_GENEROSITY: 9`** — Massive margins, breathing room between sections
- **`LAYOUT_VARIATION: 9`** — Every section has unique composition; no cloned cards

---

## BRAND ESSENCE

**Company:** Sneha's Wrapzz — Luxury Gift Wrapping, Customized Hampers, Corporate Gifting, Wedding Gifts, Festival Gifts, Personalized Gifts

**Mission:** Transform every gift into an unforgettable memory.

**Brand Personality:**
- Elegant & Warm (never cold, never corporate)
- Premium & Personal (bespoke, not mass-market)
- Minimal & Modern (clutter-free, intentional)
- Emotional & Timeless (speaks to sentiment, not trends)
- Luxury without showiness (whispered elegance)

**Tone of Voice:**
- No marketing buzzwords or clichés
- Short, warm, human headlines
- Natural, conversational language
- Emotionally intelligent copy
- Elegant simplicity

---

## EMOTIONAL INTENT

Visitors should **never feel like they're shopping.**

Visitors should feel like **opening a beautifully wrapped gift.**

- Scrolling = discovering memories
- Animations = soft anticipation
- Transitions = building emotional momentum
- Every section = emotional before transactional

The website is an *experience*, not a store.

---

## COLOR PALETTE

**Primary Backgrounds:**
- `#FFFBF8` — Ivory (warm cream base)
- `#FFFEF9` — Soft cream (deep backgrounds)
- `#F9F7F4` — Warm white (accent backgrounds)

**Secondary Accents:**
- `#D4AF9F` — Champagne Gold (premium accent)
- `#C9A885` — Rose Gold (warmth accent)
- `#8B7355` — Warm Bronze (depth)

**Text & UI:**
- `#2D2623` — Deep Charcoal (primary text, headings)
- `#6B6360` — Warm Gray (secondary text, hints)
- `#7A8B6B` — Muted Olive (subtle accent)

**Functional:**
- `#6B9A6B` — Muted Green (success, CTAs)
- `#E8E3DD` — Warm Beige (dividers, borders)

**Avoid:**
- Pure black (`#000000`)
- Bright/saturated colors
- Cold grays
- High-contrast blacks

---

## TYPOGRAPHY

**Font Stack:**
- Headings: `Playfair Display` (serif, editorial grace)
- Body: `Poppins` (sans-serif, clean readability)
- Buttons: `Poppins Semi Bold` (weight 600)

**Scale & Hierarchy:**

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Headline | 56–72px | 600 (Bold) | 1.2 |
| Section Headline | 40–48px | 600 (Bold) | 1.3 |
| Subheading | 24–28px | 500 (Medium) | 1.4 |
| Body Text | 16–18px | 400 (Regular) | 1.6–1.7 |
| Button Text | 14–16px | 600 (Semi Bold) | 1.5 |
| Caption/Meta | 12–13px | 400 (Regular) | 1.5 |

**Guidelines:**
- Generous line heights (1.6+) for readability
- Wide letter spacing in headlines (0.02–0.03em)
- Never go below 16px for body text on any device
- Use Playfair for emotional beats; Poppins for clarity

---

## SPACING SYSTEM

**8pt Base Grid**

| Purpose | Value | Context |
|---------|-------|---------|
| Micro | 4–8px | Icon spacing, fine adjustments |
| Small | 12–16px | Padding within cards, small gaps |
| Medium | 24–32px | Section padding, component spacing |
| Large | 48–64px | Between major sections |
| Extra Large | 80–120px | Section spacing, hero breathing room |

**Content Width:**
- Max width: `1280px` (generous, not cramped)
- Desktop padding: `32–48px` lateral
- Tablet padding: `24–32px` lateral
- Mobile padding: `16–20px` lateral

**Section Spacing:**
- Between sections: minimum `96px` vertical (rarely less)
- Inside sections: `64–80px` between content blocks
- Card gaps: `24–32px` between cards

**Breathing Room:**
- Hero section: tall, spacious (300–500px+ min-height)
- Text blocks: max 65–75 characters per line
- Image containers: always have breathing room around them
- Never nest content densely

---

## DESIGN LANGUAGE & AESTHETIC RULES

**Visual Identity:**
1. Modern Luxury — sleek, refined, purposeful
2. Editorial Layout — asymmetric, intentional composition
3. Minimalism — every element serves a purpose
4. Softness — rounded corners (12–20px radius), soft shadows
5. Texture — subtle paper grain, warm textures, ribbon accents
6. Light & Shadow — warm, natural lighting (never harsh)
7. Glass morphism — only on hover states or modal overlays (restrained)

**Design Patterns to Embrace:**
- Generous whitespace (primary design tool)
- Asymmetric grids (not always centered/equal)
- Large typography as design element
- Subtle depth via elevation and shadow
- Warm color transitions
- Ribbon-inspired decorative elements
- Paper texture overlays (subtle)
- Soft focus imagery
- Layered compositions

**Patterns to Avoid:**
- Bright, saturated colors
- Excessive borders
- Decorative-only animations
- Clutter of small cards
- Loud CTAs
- Gradients as primary styling
- Stock photography defaults
- Generic ecommerce blocks
- Unnecessary complexity

---

## MICRO-INTERACTIONS & MOTION

**Philosophy:**
Motion should feel like opening a gift — anticipatory, soft, sensory, purposeful.

### Entrance Animations
- All sections fade in on scroll (not instantly)
- Ribbon elements should have gentle, physical movement
- Text should reveal with soft opacity + slight scale
- Images should blur-fade or scale-reveal
- Stagger child elements (20–50ms between each)

### Scroll-Based Storytelling
- Hero: on scroll, ribbon slowly unties, lid opens, soft particles appear
- Images: parallax effect (subtle, max 10–15% offset)
- Text blocks: fade in as they enter viewport
- Cards: scale slightly larger on hover, slight shadow depth

### Hover Effects (Desktop)
- Buttons: subtle background shift, slight scale (1.02–1.05x)
- Cards: shadow increase, image zoom slightly (1.03–1.05x)
- Links: underline appears with animation
- Images: soft blur fade on hover (2–3px blur)
- All hovers should feel tactile, not mechanical

### Loading Sequence
- Page entry should feel cinematic
- Loading animation inspired by unwrapping paper
- Smooth, physics-based easing
- Typically 400–800ms duration for macro animations
- Micro-interactions: 150–300ms

### Easing Curves
Use these for different movement types:
- **Anticipation & Reveal:** `cubic-bezier(0.34, 1.56, 0.64, 1)` (gentle spring)
- **Fade & Opacity:** `cubic-bezier(0.42, 0, 0.58, 1)` (ease-in-out)
- **Scale & Grow:** `cubic-bezier(0.34, 0.04, 0.68, 0.35)` (elastic)
- **Continuous motion:** Custom spring physics (dampening 0.8, stiffness 120)

### Specific Motion Techniques
1. **Ribbon Unfolding** — Use SVG path animations or layered transforms
2. **Paper Reveal** — Mask animations with clip-path or SVG mask
3. **Particle Effects** — Light, floating particles on gift opening
4. **Blur Transitions** — Backdrop-filter blur shifts (2–5px range)
5. **Parallax Depth** — Subtle layering (never more than 15% offset)
6. **Scroll Pinning** — Hero may pin briefly (200–300ms) as content reveals
7. **Cursor Tracking** — Optional: subtle parallax following cursor (very gentle)

---

## WEBSITE STRUCTURE & PAGES

### Core Pages
1. **Landing / Home** — Hero experience, emotional entry
2. **Gift Collections** — Gallery of curated gifting categories
3. **Customization** — Interactive gift builder / personalizer
4. **Wedding Gifts** — Dedicated, romantic section
5. **Corporate Gifting** — B2B, professional tone shift
6. **Occasions** — Festival, birthday, anniversary, etc.
7. **Gallery** — Customer stories, inspiration, flat lays
8. **About** — Brand story, mission, craftsmanship
9. **Testimonials** — Customer reviews, real stories (not generic quotes)
10. **FAQ** — Practical info with elegant styling
11. **Contact** — Simple, warm contact form
12. **Order / Cart** — Seamless checkout experience
13. **Instagram Feed** — Social proof via real customer photos

---

## COMPONENT SPECIFICATIONS

### Hero Section
**Experience:** User lands. Background slowly appears (fade in 600ms). Luxury wrapped gift sits center. Ribbon gently moves (subtle loop animation). On scroll, ribbon unties, lid opens, soft particles appear, typography fades upward. CTA emerges.

**Layout:** 
- Tall viewport (500–600px min)
- Centered composition with breathing room
- Gift image: 300–400px, center-right or center-left (asymmetric)
- Text: left-aligned or stacked, below or beside gift
- Particles: subtle floating elements, SVG-based or canvas

**Animation Timeline:**
1. Page load: Hero background fades in (0–600ms)
2. Scroll trigger: Ribbon animates untying (600–1200ms)
3. Further scroll: Lid opens with parallax (1000–1600ms)
4. Entrance: Particles float up gently (continuous)
5. CTA: Appears with scale + fade (800–1000ms)

### Navigation (Header)
- Minimal, floating or sticky (choice)
- Logo left, menu items right (desktop)
- Icon-only mobile menu, smooth slide-down on tap
- Background: glass morphism fade-in (light scrim on scroll)
- Active state: elegant underline (animated)
- Height: `60–70px`

### Cards (Product/Gift Display)
**Variation 1: Image-Led**
- Image: 280–400px wide, 1:1 or 4:3 ratio
- Overlay text on bottom (semi-transparent)
- No sharp borders; rounded `16px` radius
- Hover: Image zooms 1.05x, shadow deepens

**Variation 2: Text-First**
- Heading + descriptor text leading
- Image secondary, smaller (200px)
- Asymmetric layout (image right or left, alternating)
- Light background (ivory), no border

**Variation 3: Story Card**
- Large image (full width of card)
- Small text overlay (lower third, semi-transparent)
- No repeated layout — each story unique

**Spacing:** 
- Margin between cards: `32–48px`
- Padding inside cards: `24–32px`
- No "three equal cards" pattern — vary widths and layouts

### Buttons
**Primary CTA:**
- Background: Muted Green (`#6B9A6B`)
- Text: Ivory (`#FFFBF8`)
- Padding: `14–16px 32–40px`
- Border radius: `8px`
- Font weight: 600
- Hover: Slight background darken, scale 1.03x, shadow add
- Disabled: Opacity 0.5, no hover effect
- No rounded-pill style (too casual)

**Secondary Button:**
- Background: Transparent
- Border: 1px solid Warm Gray (`#6B6360`)
- Text: Deep Charcoal (`#2D2623`)
- Hover: Background fill to light ivory, border color shift

**Text Link:**
- Color: Muted Olive (`#7A8B6B`)
- Underline: animated in on hover (draw animation)
- No color change; relying on underline

### Image Galleries/Sliders
**Masonry Grid (4–6 items):**
- Asymmetric sizing: large (2x2 grid space) + small (1x1 items) mix
- No uniform card heights
- Gaps: `24–32px` between items
- Lazy load images with blur-up effect
- Hover: Slight zoom + soft shadow

**Carousel/Slider:**
- Fade between slides (not slide-left)
- Auto-advance disabled (user-driven navigation)
- Dots or arrows minimal, elegant
- Touch swipe on mobile; arrow keys on desktop

### Forms (Contact, Customization)
- Labels above inputs (not inside)
- Input padding: `12–16px`
- Border: light (Warm Beige `#E8E3DD`)
- Rounded: `8px`
- Focus state: border color change to Muted Olive + shadow
- Error messages: below field, Muted Green text
- Helper text: Warm Gray, smaller size (13px)
- Success: Icon + confirmation message
- No placeholder-only labels

### Testimonials Section
- Not generic card quotes
- Real customer photos + story narrative
- Layout: alternating left/right image + text
- Image: 300–400px, circular crop or square `16px` radius
- Quote: Italicized Playfair Display (22–28px)
- Name + role: Warm Gray text (14px)
- Star rating: if included, use icon rating (not emoji)

### FAQ Section
- Accordion with smooth open/close (150–250ms)
- Question: Playfair Display, 18–24px, bold
- Answer: Poppins, 16px, line-height 1.6
- Open indicator: animated chevron (rotate 180°)
- Background: light ivory panels between items

### Footer
- Content: organized into 3–4 columns (desktop), stacked (mobile)
- Logo + mission statement (left column)
- Quick links (center)
- Social icons (top right or bottom right)
- Copyright + policies (footer bar)
- Background: slightly darker ivory (`#F5F0EB`)
- Text: Deep Charcoal for headings, Warm Gray for links

### Instagram Feed / Social Proof
- Embedded feed showing real customer photos
- 6–9 images in grid (3x3 or 2x3)
- No borders, just gaps
- Link to Instagram profile CTA
- Hover: subtle overlay + follow icon

---

## IMAGE DIRECTION (Premium Art Direction)

**Critical Rule:** No stock photography. All images should feel art-directed, premium, intentional.

### Image Types

**1. Hero Gift Imagery**
- Beautifully wrapped luxury gift, centered
- Warm, natural lighting (not harsh)
- Gift should sit on neutral surface (pale wood or linen)
- Ribbon detail visible and elegant
- Photography angle: slight 3/4 view (not dead-on)
- Soft depth of field (background blurred slightly)
- Color grade: warm, saturated (no cool tones)

**2. Lifestyle Product Shots**
- Hands opening a gift (emotion focus)
- Flat lay compositions: gifts on linen, ribbon, flowers
- Detail shots: ribbon texture, paper grain, bow detail
- Desk styling: gift alongside flowers, candle, stationery
- Flat lays: must feel intentional, not cluttered
- Lighting: golden hour warmth, natural shadows

**3. Collection/Category Images**
- Hero image per collection (wedding, corporate, festival)
- Large, editorial-style photography (400–600px height)
- Composition: asymmetric, not centered
- Lifestyle context (not just product hero shots)

**4. Testimonial/Customer Photos**
- Real customer photos (user-generated content preferred)
- Variety: unboxing moments, gift receiving, parties
- Authentic, not overly staged
- High quality (no blurry phone camera)

**5. Texture & Background Accents**
- Subtle paper grain overlays (20–30% opacity)
- Ribbon patterns as design elements
- Linen texture backgrounds
- Warm gradient overlays (never harsh)

### Photography Guidelines
- **Lighting:** Warm, golden hour-inspired (3200–4000K color temp)
- **Shadows:** Soft, natural (never harsh black shadows)
- **Focus:** Sharp on gift/subject, soft background
- **Depth of Field:** Shallow to medium (f/1.8 – f/4 equivalent)
- **Composition:** Off-center, rule of thirds, asymmetric
- **Color Grade:** Warm, muted saturation, lifted blacks
- **Aspect Ratios:** Mix of square (1:1), landscape (16:9, 4:3), portrait (2:3)

---

## ACCESSIBILITY & WCAG AA COMPLIANCE

**Color Contrast:**
- All text vs. background: minimum 4.5:1 ratio
- Body text on cards: 4.5:1
- Secondary text: 3:1 minimum
- Test: Use WCAG AA checker before handoff

**Keyboard Navigation:**
- All interactive elements reachable via Tab key
- Focus order matches visual order (left-to-right, top-to-bottom)
- Visible focus indicator (min 2px, color contrast 3:1)
- Escape key closes modals/dropdowns

**ARIA Labels:**
- Icon-only buttons: `aria-label="..." `
- Images: descriptive alt text (not "image1.jpg")
- Form inputs: `<label>` with `for` attribute
- Modals: `role="dialog"` + `aria-modal="true"`
- Navigation: `<nav>` semantic HTML

**Motion & Animation:**
- Respect `prefers-reduced-motion` media query
- Disable automatic animations for users with reduced-motion enabled
- Animations should not trigger focus changes unexpectedly
- Any animation lasting >5s should be pausable

**Forms:**
- Labels outside, above inputs (not inside)
- Visible error messages near field
- Helper text for clarity
- Required fields marked clearly (asterisk, not just color)
- Form validation happens on blur/submit, not keystroke

**Image Optimization:**
- Use WebP/AVIF with fallback JPG
- Lazy load images below fold
- Responsive images (`srcset` for different sizes)
- Avoid image-only content; always provide text alternative

---

## TECHNICAL IMPLEMENTATION

### Stack
- **Framework:** React 18+
- **Build Tool:** Vite or Next.js (App Router for RSC)
- **Styling:** Tailwind CSS v4
- **Animation:** Motion (framer-motion)
- **Type Safety:** TypeScript (strict mode)
- **Icons:** Phosphor Icons (`@phosphor-icons/react`)
- **Code Quality:** ESLint, Prettier

### Architecture Patterns
- Component-based, reusable components
- Isolated motion components with `'use client'` (React Client Components)
- Server components for static layouts
- Custom hooks for animations (useScroll, useTransform)
- No global state for UI animations (use useMotionValue)

### Performance Targets
- Lighthouse Score: 90+
- First Contentful Paint (FCP): <1.5s
- Largest Contentful Paint (LCP): <2.5s
- Cumulative Layout Shift (CLS): <0.1
- No JavaScript render-blocking
- Lazy load images and components below fold

### Responsive Design
**Breakpoints:**
- Mobile: 320–640px
- Tablet: 640–1024px
- Desktop: 1024px+
- Large: 1280px+

**Mobile-First Approach:**
- Start with mobile layout
- Add complexity at larger breakpoints
- Touch targets: 44×44px minimum
- Spacing scale: reduce by 10–20% on mobile

---

## SECTION-BY-SECTION SPECIFICATIONS

### 1. Hero / Landing
**Emotional Goal:** User feels like they're opening a gift, not shopping.

**Layout:**
- Full viewport height (min 500px, ideally 600px+)
- Gift centered or slightly right-of-center
- Large headline left-aligned above/beside gift
- Subheading: warm, descriptive text (2–3 lines max)
- CTA: Floating, appears on scroll

**Content Example:**
- Headline: "Every gift tells a story."
- Subheading: "Handcrafted wrapping, personalized moments, unforgettable memories."
- CTA: "Explore Collections" (Primary Button)

**Animation:**
- Background + gift fade in (0–600ms)
- Ribbon subtle loop animation (continuous)
- On scroll: Ribbon unties, lid opens, particles float
- Text fades upward on scroll (parallax)
- CTA scale-in + fade (800ms)

### 2. Trust Bar / Social Proof
**Purpose:** Quick credibility without being salesy.

**Content:**
- 3–5 items (not more)
- Examples: "Handcrafted in India", "Used by 5,000+ customers", "100% Customizable", etc.
- Icons + text (icon left, text right)
- Single row (desktop), stacked (mobile)

**Layout:**
- Horizontal bar, 64px height
- No background, minimal styling
- Icons: Phosphor, 24px, Muted Olive
- Text: Poppins 14px, Warm Gray
- Spacing: 24–32px between items

### 3. Gift Collections / Categories
**Purpose:** Show the variety of gifting options without overwhelming.

**Variations:** Avoid repeating the same card layout.

**Collection 1: Image-Led Masonry**
- Large hero image (400×500px, 4:3 ratio)
- Smaller companion cards (200×250px)
- Mix of sizes: one large + 3–4 small
- Overlay text: collection name, hover reveals link

**Collection 2: Text-First Layout**
- Column 1: Text (heading, description, CTA)
- Column 2: Image (staggered slightly right)
- Alternating left/right per category
- No repeated composition

**Collection 3: Story Grid**
- 2–3 cards per row
- Each card unique width (not equal grid)
- Story-driven narrative (image + small text overlay)
- Hover: slight zoom, link appears

### 4. The Customization Experience
**Purpose:** Emotional connection through personalization.

**Layout:**
- Left side: Step-by-step guide (interactive progress)
- Right side: Preview of customized gift
- OR: Centered, tabbed interface (mobile)

**Steps:**
1. Choose Gift Type (hamper, wrapped box, etc.)
2. Select Size & Color Scheme
3. Add Items / Personalization
4. Review & Customize Packaging
5. Add Message / Ribbon Style

**Interaction:**
- Step indicator animated (progress bar)
- Preview updates in real-time as user selects
- "Back" / "Next" buttons smooth transitions
- Completed steps show checkmark icon

### 5. Wedding Gifting Section
**Tone Shift:** More romantic, ceremonial, luxurious.

**Layout:**
- Hero: couple exchanging gift (lifestyle photo)
- Headline: "Gifts for Life's Most Beautiful Moments"
- 3 sub-categories: Wedding Gifts, Bridal Party, Registry

**Cards:**
- Large emotional images
- Minimal text (let images speak)
- Hover reveals "Explore" link
- Alternating asymmetric layout

### 6. Corporate Gifting
**Tone Shift:** Professional, scalable, premium B2B.

**Layout:**
- Hero: corporate context (office desk, professional setting)
- Headline: "Premium Gifting for Teams & Clients"
- 3 tiers: Small Teams, Enterprise, Custom Solutions

**Content:**
- Bullet points: bulk discounts, personalization, scalability
- CTA: "Request Corporate Quote"
- Optional: Case study cards (before/after or client story)

### 7. Gallery / Social Proof
**Purpose:** Showcase real customer moments.

**Layout:**
- Masonry grid: 3–4 columns (desktop), 1–2 (mobile)
- Images vary in size (asymmetric, not uniform)
- Captions optional, minimal
- User-generated content (real customer photos)

**Content:**
- Unboxing moments
- Gift receiving celebrations
- Flat lay styling
- Detail shots (ribbon, paper, bow)

**Interaction:**
- Lazy load with blur-up effect
- Hover: slight zoom, caption opacity increase
- Click: modal view (lightbox)

### 8. About / Brand Story
**Purpose:** Build emotional connection to the brand.

**Layout:**
- Large intro image (full-width, split layout)
- Text left, image right
- Then: story narrative (editorial-style)
- Founder story (optional): small portrait + bio

**Content:**
- Mission statement
- Craftsmanship values
- Why handmade matters
- Team/founder narrative (authentic, not corporate)

### 9. Testimonials
**Purpose:** Social proof through real customer stories.

**Layout:** Not standard card grid. Unique per testimonial.

**Variation 1:**
- Left: Large customer photo (300×300px, circular crop)
- Right: Quote (Playfair, 28px, italicized) + name/role + star rating

**Variation 2:**
- Top: Full-width lifestyle photo (gift in context)
- Bottom: Customer name, quote, role, photo (small circular)

**Variation 3:**
- Video testimonial (optional): embed video with transcript below

**Count:** 3–5 testimonials (not more; quality over quantity)

### 10. FAQ
**Purpose:** Answer common questions without friction.

**Layout:**
- Centered, max width 800px
- Accordion-style (one open at a time)
- Q: Bold, Playfair, 18–20px
- A: Regular, Poppins, 16px, generous line-height

**Content Categories:**
- Customization & Timeline
- Shipping & Delivery
- Returns & Refunds
- Corporate Gifting
- Gift Registry (if applicable)

### 11. Contact / Get in Touch
**Purpose:** Seamless contact without form friction.

**Layout Option 1: Form + Info**
- Left: Contact form (name, email, subject, message)
- Right: Contact info + social links

**Layout Option 2: Minimal Form**
- Centered form (max width 600px)
- Subheading: "We'd love to hear from you."
- Fields: Name, Email, Subject, Message (all required)
- Button: "Send Message"
- Optional: Calendar link for consultation booking

**Form Styling:**
- Inputs: light border, rounded 8px, padding 12–16px
- Focus state: border color + subtle shadow
- Placeholder: none (use label only)
- Success: "Thank you! We'll be in touch soon."

### 12. Footer
**Layout:**
- Column 1: Logo + mission statement (4 lines max)
- Column 2: Quick Links (About, Collections, FAQ, Contact)
- Column 3: Social Icons (Instagram, Pinterest, LinkedIn)
- Bottom Bar: Copyright + Privacy Link + Terms Link

**Styling:**
- Background: Warm Beige (`#F5F0EB`)
- Text: Deep Charcoal headings, Warm Gray links
- Height: 300–350px (desktop), responsive stacking (mobile)
- Top border: light separator line

---

## COPY GUIDELINES

**Voice:**
- Warm, not corporate
- Elegant, not flowery
- Direct, not marketing-speak
- Emotional, not salesy

**Headlines:**
- Short (3–8 words)
- Emotional or narrative
- Examples:
  - "Every gift tells a story."
  - "Unbox the moment."
  - "Craft. Create. Celebrate."
  - "Memories wrapped in elegance."

**Subheadings:**
- Descriptive, 1–2 sentences
- Example: "Handcrafted wrapping, personalized touches, unforgettable unboxing moments."

**CTAs:**
- Action-oriented: "Explore", "Discover", "Create", "Order"
- Not: "Shop", "Buy", "Click Here", "Learn More"

**Product Descriptions:**
- Focus on emotion, not features
- Example (Good): "A gift that feels like a warm hug."
- Example (Bad): "High-quality wrapping paper with custom ribbon."

**Avoid:**
- Marketing jargon: "premium", "luxury", "exclusive" (show, don't tell)
- Clichés: "treat yourself", "gift yourself", "unbelievable deals"
- Salesy language: "limited time", "act now", "special offer"
- AI-sounding phrases: "innovative solutions", "cutting-edge", "best-in-class"

---

## PERFORMANCE OPTIMIZATION

### Image Optimization
- Format: WebP/AVIF with JPG fallback
- Size: max 400KB per image (hero), 200KB for cards
- Resolution: 2x density for high-DPI (avoid 3x unless necessary)
- Lazy load: below-fold images load on scroll
- Responsive: use `srcset` for mobile (30–50% smaller on mobile)

### Code Splitting
- Lazy load components below fold
- Animate on mount only if visible
- Defer non-critical animations until idle time

### CSS & JavaScript
- Minimal CSS (Tailwind purges unused styles)
- No JavaScript render-blocking
- Animation library (Motion) optimized (will-change, transform-only)
- Avoid layout thrashing (batch DOM reads/writes)

### Loading Sequence
- Skeleton screens for cards/images (while loading)
- Blur-up effect for images (show blurred preview while loading)
- No spinner; transition smoothly to final state
- Page feels fast even on 3G networks

---

## QUALITY ASSURANCE CHECKLIST

Before handoff to development or deployment:

### Visual Consistency
- [ ] All colors use defined palette (no ad-hoc hex values)
- [ ] Typography hierarchy consistent (font sizes, weights, line heights)
- [ ] Spacing uses 8pt grid system (no random pixel values)
- [ ] Card layouts are varied (no repeated pattern across page)
- [ ] Borders/shadows consistent with design system
- [ ] Images use art direction, not stock defaults

### Animation Quality
- [ ] All animations respect `prefers-reduced-motion`
- [ ] Micro-interactions are 150–300ms (not instant, not slow)
- [ ] Motion conveys meaning (not purely decorative)
- [ ] No animation stuttering or jank on 60fps devices
- [ ] Parallax max offset is 10–15% (not excessive)
- [ ] Entrance animations staggered (20–50ms delays)

### Accessibility
- [ ] All color contrasts pass WCAG AA (4.5:1 for text)
- [ ] Keyboard navigation works (Tab, Shift+Tab, Enter, Escape)
- [ ] Focus indicators visible on all interactive elements
- [ ] Form labels are visible (not placeholders only)
- [ ] Images have alt text (meaningful, not "image1.jpg")
- [ ] ARIA labels on icon buttons
- [ ] No motion animations auto-play without user consent

### Responsiveness
- [ ] Mobile: 320px, Tablet: 768px, Desktop: 1024px tested
- [ ] No horizontal scroll on any device
- [ ] Touch targets 44×44px minimum on mobile
- [ ] Font sizes responsive (not fixed pixel values)
- [ ] Images scale properly (no distortion)
- [ ] Spacing scales with viewport (no overcrowding on mobile)

### Performance
- [ ] Lighthouse score: 90+ (all categories)
- [ ] Images: WebP/AVIF + fallback
- [ ] LCP < 2.5s, FCP < 1.5s
- [ ] CLS < 0.1 (no layout shift)
- [ ] JavaScript: <100KB (minified, gzipped)
- [ ] No unused CSS or dead code

### Copy & Messaging
- [ ] No marketing clichés or buzzwords
- [ ] Tone is warm and authentic
- [ ] Headlines are short and emotional
- [ ] CTAs are action-oriented, not generic
- [ ] No AI-sounding language
- [ ] Spelling and grammar checked

---

## FINAL DIRECTIVES FOR ANTIGRAVITY

1. **Read the room first.** This is a premium, emotionally-driven brand. Start with the emotional journey, not the transaction flow.

2. **Prioritize storytelling.** Every section should answer "why does this matter emotionally?" before "what can I buy?"

3. **Embrace asymmetry.** Break the grid intentionally. Vary card sizes, layouts, and compositions. No repeating patterns.

4. **Animate with intention.** Motion should feel like opening a gift (anticipatory, soft, physical). Not like a modern SaaS product (snappy, instant, UIkit-default).

5. **Whitespace is luxury.** More breathing room = premium feeling. Less density = more expensive perceived value.

6. **Images over words.** Let photography do the emotional work. Minimal copy, maximum visual impact.

7. **Quality over quantity.** 3 beautiful testimonials beat 10 generic ones. 5 unique collection layouts beat repeating the same card 15 times.

8. **Warm, never cold.** Every color, shadow, and animation should feel warm, inviting, human—never harsh, never clinical.

9. **Handcrafted, not templated.** This should feel custom-designed, not like a website builder template. Every section should look intentional.

10. **Respect the audience.** These are design-conscious, affluent, emotionally intelligent people. They'll notice sloppy work. Ship polish.

---

## ANTI-PATTERNS (DO NOT DO)

- ❌ Generic ecommerce templates
- ❌ Stock photography (use art direction)
- ❌ Bright, saturated colors (stay in warm palette)
- ❌ Equal-sized card grids (vary sizes and layouts)
- ❌ Placeholder sections (every section is real content)
- ❌ Excessive animations (motion serves purpose)
- ❌ Generic CTA copy ("Shop Now", "Buy Here", "Click Here")
- ❌ Cold, corporate tone (stay warm and personal)
- ❌ Clutter and overcrowding (embrace whitespace)
- ❌ Rounded-pill buttons (use 8px radius minimum, not full-rounded)
- ❌ Purple/blue AI gradients (use warm palette only)
- ❌ Pure black text or backgrounds (use deep charcoal, warm tones)
- ❌ Blinking or auto-looping animations (user-driven only)
- ❌ Form placeholders instead of labels (label always visible)
- ❌ "Premium" or "luxury" in copy (show through design)

---

**This brief is your north star. Refer to it throughout development. When decisions conflict with typical design patterns, let the emotional intent and brand voice guide you.**

**Build something beautiful. Build something that feels like opening a gift.**

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://snehawrapzz.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6e0975c0-3100-4cb6-b498-8a8b6cefcf29).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
