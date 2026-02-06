# Feature: Repas de Groupe

## Overview
Le Café du Marché offers tailor-made group meal packages for corporate events,
celebrations, and other occasions. The old site has a gallery page for this at
lecafedumarche.com/gallery (403'd, but we know it exists).

## Content (CMS-managed)

### Payload Collection: GroupMeal
```typescript
{
  slug: 'group-meals',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'richText' },
    { name: 'minGuests', type: 'number' },
    { name: 'maxGuests', type: 'number' },
    {
      name: 'menuOptions',
      type: 'array',
      fields: [
        { name: 'name', type: 'text' },
        { name: 'description', type: 'richText' },
        { name: 'pricePerPerson', type: 'number' },
        { name: 'includes', type: 'array', fields: [
          { name: 'item', type: 'text' }
        ]}
      ]
    },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'order', type: 'number' },
  ]
}
```

## Page Layout

### Sections
1. **Hero**: atmospheric photo of a set group table
2. **Introduction**: "Privatisez notre restaurant pour vos événements..."
3. **Formula Cards**: each group meal option as a card
   - Title, description, guest range, price/person
   - Menu highlights
4. **Contact Form**: variant of reservation form
   - Event type (dropdown: corporate, birthday, wedding, other)
   - Estimated guests
   - Preferred date(s)
   - Budget indication (optional)
   - Name, email, phone
   - Message
5. **Practical Info**: capacity, availability, what's included

### Design
- Slightly more premium feel than regular pages
- Larger images, more whitespace
- Trust-building: "Nous personnalisons chaque événement"
