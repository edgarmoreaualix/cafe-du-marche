# Feature: Daily Menu CMS

## Overview
The core feature. Paul & Matthias change their menu every day based on market produce.
Updating the menu must be **dead simple** — ideally under 5 minutes on a phone.

## User Story
> As Paul or Matthias, I want to update today's menu from my phone before the lunch service,
> so that customers can see what we're serving today.

## Payload CMS Collection: DailyMenu

### Fields
```typescript
{
  slug: 'daily-menus',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['date', 'title', 'status'],
  },
  fields: [
    {
      name: 'date',
      type: 'date',
      required: true,
      unique: true,
      admin: {
        date: { pickerAppearance: 'dayOnly' }
      }
    },
    {
      name: 'title',
      type: 'text',
      admin: { placeholder: 'ex: Menu du Vendredi 7 Février' }
    },
    {
      name: 'sections',
      type: 'array',
      fields: [
        {
          name: 'sectionName',
          type: 'select',
          options: [
            { label: 'Entrées', value: 'entrees' },
            { label: 'Plats', value: 'plats' },
            { label: 'Desserts', value: 'desserts' },
            { label: 'Formule Midi', value: 'formule-midi' },
            { label: 'Formule Complète', value: 'formule-complete' },
          ]
        },
        {
          name: 'items',
          type: 'array',
          fields: [
            { name: 'name', type: 'text', required: true },
            { name: 'description', type: 'textarea' },
            { name: 'price', type: 'number' },
            {
              name: 'tags',
              type: 'select',
              hasMany: true,
              options: ['végétarien', 'végan', 'sans gluten', 'fait maison', 'nouveau']
            }
          ]
        }
      ]
    },
    {
      name: 'note',
      type: 'richText',
      admin: { placeholder: 'Note du jour (optionnel)' }
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Brouillon', value: 'draft' },
        { label: 'Publié', value: 'published' }
      ],
      defaultValue: 'draft'
    }
  ]
}
```

## UX Optimizations for Paul/Matthias

### Duplicate Yesterday's Menu
- Custom Payload admin button: "Dupliquer le menu d'hier"
- Pre-fills today's form with yesterday's content
- They just tweak what changed (common pattern: 80% stays, 20% changes)

### Quick Edit on Mobile
- Payload admin is responsive, but test thoroughly on phone
- Consider a simplified custom admin view if default is too cluttered

### Draft → Publish Workflow
- Create menu as draft in the morning
- Publish when ready (before lunch service)
- On the public site: show published menus only

### Formula Display
- Formule Midi: "Entrée + Plat ou Plat + Dessert — 16€" (example)
- Formule Complète: "Entrée + Plat + Dessert — 22€"
- These are common patterns in French daily menus

## Frontend Display

### Menu Page (`/menu`)
- Fetch today's published menu
- If none: show last available + "Le menu du jour arrive bientôt"
- Group by sections
- Classic French menu typography: dish name left, price right, dotted line between
- Tags as subtle badges

### Homepage Preview
- Show today's menu in a compact card
- 1-2 items per section max
- CTA to full menu page

## API
```
GET /api/daily-menus?where[date][equals]=2026-02-06&where[status][equals]=published
```
- Use Payload's built-in REST API or local API for server components
