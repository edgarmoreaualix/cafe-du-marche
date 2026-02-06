# Page-by-Page Specifications

## 1. Homepage (`/`)

### Purpose
First impression. Must convey: this place is warm, the food is great, come eat here.

### Sections (top to bottom)
1. **Hero**
   - Full-width atmospheric photo (restaurant interior or signature dish)
   - Overlay: restaurant name, one-line tagline
   - Primary CTA: "Réserver une table"
   - Secondary: "Découvrir la carte du jour"

2. **Daily Menu Preview**
   - Pull today's menu from CMS
   - Show appetizer/main/dessert at a glance
   - "Voir la carte complète" link
   - If no menu for today: show "Menu du jour bientôt disponible"

3. **About Teaser**
   - Short paragraph: who are Paul & Matthias, what makes this place special
   - A warm photo (the two of them, or the restaurant)
   - "En savoir plus" link

4. **Reservation CTA Block**
   - Standalone section with warm background
   - "Réservez votre table" with inline form or link to reservation page

5. **Gallery Strip**
   - Horizontal scroll or grid of 4-6 dish photos
   - No captions needed — purely atmospheric

6. **Practical Info (pre-footer)**
   - Opening hours
   - Address with mini map
   - Phone number (clickable on mobile)

### Mobile
- Hero: slightly shorter, CTA buttons stacked
- Menu preview: simplified, card layout
- Gallery: horizontal scroll

---

## 2. La Carte du Jour (`/menu`)

### Purpose
Show today's menu. This is the page Paul/Matthias update daily.

### Content Model (Payload CMS)
```
DailyMenu {
  date: Date (indexed, unique per day)
  title: String (optional — e.g., "Menu du Vendredi 7 Février")
  sections: Array [
    {
      name: String ("Entrées", "Plats", "Desserts", "Formules")
      items: Array [
        {
          name: String
          description: String (optional)
          price: Number
          tags: Array ["végétarien", "maison", "nouveau"] (optional)
        }
      ]
    }
  ]
  note: RichText (optional — "Tous nos plats sont faits maison")
  status: "draft" | "published"
}
```

### Layout
- Date prominently displayed
- Sections visually separated (Entrées → Plats → Desserts)
- Prices right-aligned, classic French menu style
- "Fait maison" badges where applicable
- If no menu for today: friendly message + show last available menu

### UX for Paul/Matthias
- Admin panel: simple form, duplicate yesterday's menu as starting point
- Preview before publish
- Schedule for next day (optional, future feature)

---

## 3. La Carte des Vins (`/vins`)

### Purpose
Showcase the wine selection. Changes frequently.

### Content Model
```
WineCard {
  category: "Rouge" | "Blanc" | "Rosé" | "Bulles" | "Autres"
  items: Array [
    {
      name: String
      region: String (optional — "Loire", "Bourgogne")
      description: String (optional — tasting notes)
      glass_price: Number (optional)
      bottle_price: Number
      natural: Boolean (if they care about this distinction)
    }
  ]
  updated_at: Date (auto)
}
```

### Layout
- Categorized by type (Rouge, Blanc, etc.)
- Elegant list format — name, region, price (glass/bottle)
- Possibly a featured "coup de coeur" wine

---

## 4. Réserver (`/reservation`)

### Purpose
Simple reservation form with auto-confirmation.

### Form Fields (matching current form + improvements)
- Date souhaitée (date picker)
- Heure d'arrivée (time picker — constrained to service hours)
- Nombre de personnes (number input or selector)
- Nom (text)
- Numéro de téléphone (tel input)
- E-mail (email input)
- Message (textarea — optional, for allergies/special requests)

### Behavior
1. Client-side validation
2. Submit → API route → save to Payload `Reservation` collection
3. Trigger confirmation email (and/or SMS)
4. Show success message with reservation summary
5. Paul/Matthias see new reservation in admin panel

### Design
- Clean, spacious form
- Not a cold corporate form — warm background, friendly copy
- "Nous vous confirmerons votre réservation dans les plus brefs délais"
- Below form: phone number as alternative ("Vous préférez appeler ?")

---

## 5. Repas de Groupe (`/groupe`)

### Purpose
Information and booking for group meals (corporate events, celebrations).

### Content
- Introduction: what they offer for groups
- Formulas/packages (CMS-managed):
  - Number of guests (min/max)
  - Menu options (custom or pre-set)
  - Pricing
- Photos of group events
- Contact form (variant of reservation form with extra fields):
  - Event type
  - Estimated number of guests
  - Preferred date(s)
  - Budget range (optional)
  - Message

### Layout
- Hero image (table set for a group)
- Formula cards
- Testimonials (if available, future)
- Contact form at bottom

---

## 6. À Propos (`/a-propos`)

### Purpose
Tell the story. Make people connect with Paul & Matthias before they walk in.

### Content (CMS-managed via Payload Global)
- Their story: how they met, why this restaurant
- Philosophy: homemade, fresh from the market, generous
- The team
- Photos: the kitchen, the owners, the restaurant

### Layout
- Narrative format, generous spacing
- Alternating text/image blocks
- Quote block for a key philosophy statement
- Warm, personal tone

---

## 7. Footer (all pages)

### Content
- Logo (simplified)
- Address: near Cité des Congrès, Nantes
- Phone (clickable)
- Opening hours
- Social links (Instagram)
- "Réserver" quick link
- Legal mentions link
- Language switcher (FR/EN)
- Small map or link to Google Maps
