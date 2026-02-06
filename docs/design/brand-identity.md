# Brand Identity — Le Café du Marché

## Essence
Generous French brasserie. Homemade everything. Two friends who love food, wine, and their city.
The site should feel: **warm, authentic, inviting, slightly playful, proudly Nantais.**

## Color Palette

### From the Logo (starting point)
- Olive green: `#8B8B3E` (approximate from logo background)
- Cream: `#E8DFC0` (approximate from logo text)

### Expanded Palette (to be refined during design phase)
```
Primary:
  --olive-deep:    #5C5C28    /* Dark olive — headers, accents */
  --olive:         #8B8B3E    /* Logo olive — primary brand */
  --olive-light:   #A8A85C    /* Lighter olive — hover states */

Neutral Warm:
  --cream:         #E8DFC0    /* Logo cream — backgrounds */
  --cream-light:   #F5F0E1    /* Lighter cream — page bg */
  --parchment:     #FAF7F0    /* Near-white warm — cards */
  --wood-dark:     #3E2723    /* Varnished wood — text, contrast */
  --wood-medium:   #5D4037    /* Medium wood — secondary text */

Accent:
  --wine-red:      #722F37    /* Bordeaux — CTAs, links */
  --wine-light:    #8B4049    /* Lighter wine — hover */
  --gold:          #C4A44A    /* Warm gold — highlights, stars */

Functional:
  --success:       #4A7C59    /* Confirmation green */
  --error:         #B44040    /* Error red */
```

### Usage Rules
- **Backgrounds**: cream-light, parchment (never pure white)
- **Text**: wood-dark for body, olive-deep for headings
- **CTAs**: wine-red buttons on cream backgrounds
- **Accents**: gold for special elements (daily special badge, wine ratings)
- **Cards/Sections**: alternate between cream and parchment

## Typography

### Direction
Pair a serif display font (warmth, tradition) with a clean sans-serif (readability, modernity).

### Candidates (to evaluate)
**Display / Headings:**
- **DM Serif Display** — elegant, warm, very readable
- **Playfair Display** — classic editorial feel
- **Fraunces** — playful soft serif (matches "bon vivant" energy)

**Body / UI:**
- **Inter** — clean, highly legible, great for forms
- **DM Sans** — pairs well with DM Serif
- **Source Sans 3** — neutral, professional

### Font Loading
- Self-host on VPS (no Google Fonts dependency)
- Use `next/font` for automatic optimization
- Subset to Latin + French characters (é, è, ê, ë, à, ç, ù, etc.)

## Imagery Style
- **Dish photography**: warm lighting, close-up, shallow depth of field, natural tones
- **Restaurant ambiance**: candid, lived-in, not overly staged
- **Nantes touches**: subtle — a glimpse of Tour Lu, the market, the neighborhood
- All images optimized via Next.js Image component

## Textures & Materials (CSS/design)
- Subtle paper/linen texture on backgrounds (not heavy — barely perceptible)
- Varnished wood could appear as section dividers or card backgrounds
- Avoid: gradients, glass morphism, anything that screams "tech startup"

## Nantes Identity
Subtle, not tourist-brochure level:
- Tour Lu as a possible illustration element or easter egg
- The "Marché" in their name comes from the old MIN (Marché d'Intérêt National) — not Talensac
- The neighborhood near Cité des Congrès — urban but charming

## Logo Usage
- The existing logo works well on the olive background
- For the site: use it in the header, possibly simplified (text only variant for small sizes)
- Consider creating a favicon version (simplified icon: the cloche or wine glass)

## Mood
Think: a handwritten chalkboard menu, a glass of natural wine catching the light, bread still warm from the oven, laughter from the kitchen. Digital, but with soul.
