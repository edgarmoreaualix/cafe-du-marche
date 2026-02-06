# Feature: Wine Card

## Overview
The wine card changes frequently (not daily, but regularly). Paul & Matthias should be
able to update it easily through the CMS.

## Payload CMS Collection: WineCard

### Structure Option: Single Global vs Collection
**Recommended: Global** (single document with nested arrays)
- The wine card is one document, not many individual entries
- Easier to manage as a whole list
- Reorder by drag-and-drop

```typescript
// globals/WineCard.ts
{
  slug: 'wine-card',
  label: 'Carte des Vins',
  fields: [
    {
      name: 'categories',
      type: 'array',
      fields: [
        {
          name: 'categoryName',
          type: 'select',
          options: [
            { label: 'Vins Rouges', value: 'rouge' },
            { label: 'Vins Blancs', value: 'blanc' },
            { label: 'Rosés', value: 'rose' },
            { label: 'Bulles & Champagnes', value: 'bulles' },
            { label: 'Vins Naturels', value: 'naturel' },
            { label: 'Digestifs & Autres', value: 'autres' },
          ]
        },
        {
          name: 'wines',
          type: 'array',
          fields: [
            { name: 'name', type: 'text', required: true },
            { name: 'domaine', type: 'text' },
            { name: 'region', type: 'text' },
            { name: 'year', type: 'number' },
            { name: 'description', type: 'textarea' },
            { name: 'priceGlass', type: 'number' },
            { name: 'priceBottle', type: 'number', required: true },
            { name: 'coupDeCoeur', type: 'checkbox' },
          ]
        }
      ]
    },
    {
      name: 'note',
      type: 'richText',
      label: 'Note (affichée en bas de la carte)',
    }
  ]
}
```

## Frontend Display

### Layout
- Page title: "La Carte des Vins"
- Category tabs or sections (Rouge, Blanc, Rosé, etc.)
- Each wine:
  ```
  Domaine de la Pépière — Muscadet Sèvre et Maine    Verre 5€ | Bouteille 24€
  Loire · 2023
  "Frais et minéral, parfait avec les fruits de mer."
  ```
- "Coup de coeur" wines get a subtle gold accent (star or badge)
- Last updated date at bottom

### Design Notes
- Elegant, understated — like a real wine list
- Category icons could be nice (grape, bubble, etc.) but keep it subtle
- Mobile: single column, categories as accordion or tabs
