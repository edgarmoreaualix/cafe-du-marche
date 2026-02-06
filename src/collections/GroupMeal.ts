import type { CollectionConfig } from 'payload'

export const GroupMeal: CollectionConfig = {
  slug: 'group-meals',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'minGuests', 'maxGuests', 'order'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      admin: {
        placeholder: 'ex: Formule Corporate',
      },
    },
    {
      name: 'description',
      type: 'richText',
      localized: true,
      label: 'Description',
    },
    {
      name: 'minGuests',
      type: 'number',
      label: 'Nombre minimum de personnes',
    },
    {
      name: 'maxGuests',
      type: 'number',
      label: 'Nombre maximum de personnes',
    },
    {
      name: 'menuOptions',
      type: 'array',
      label: 'Options de menu',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          localized: true,
          label: 'Nom de la formule',
        },
        {
          name: 'description',
          type: 'richText',
          localized: true,
          label: 'Description',
        },
        {
          name: 'pricePerPerson',
          type: 'number',
          required: true,
          label: 'Prix par personne (€)',
        },
        {
          name: 'includes',
          type: 'array',
          label: 'Ce qui est inclus',
          fields: [
            {
              name: 'item',
              type: 'text',
              localized: true,
              label: 'Élément',
            },
          ],
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image illustrative',
    },
    {
      name: 'order',
      type: 'number',
      label: "Ordre d'affichage",
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
