import type { CollectionConfig } from 'payload'

export const DailyMenu: CollectionConfig = {
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
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'title',
      type: 'text',
      admin: {
        placeholder: 'ex: Menu du Vendredi 7 Février',
      },
    },
    {
      name: 'sections',
      type: 'array',
      fields: [
        {
          name: 'sectionName',
          type: 'select',
          required: true,
          options: [
            { label: 'Entrées', value: 'entrees' },
            { label: 'Plats', value: 'plats' },
            { label: 'Desserts', value: 'desserts' },
            { label: 'Formule Midi', value: 'formule-midi' },
            { label: 'Formule Complète', value: 'formule-complete' },
          ],
        },
        {
          name: 'items',
          type: 'array',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
            },
            {
              name: 'price',
              type: 'number',
            },
            {
              name: 'tags',
              type: 'select',
              hasMany: true,
              options: [
                { label: 'Végétarien', value: 'vegetarien' },
                { label: 'Végan', value: 'vegan' },
                { label: 'Sans gluten', value: 'sans-gluten' },
                { label: 'Fait maison', value: 'fait-maison' },
                { label: 'Nouveau', value: 'nouveau' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'note',
      type: 'richText',
      label: 'Note du jour (optionnel)',
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Brouillon', value: 'draft' },
        { label: 'Publié', value: 'published' },
      ],
    },
  ],
}
