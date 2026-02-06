import type { CollectionConfig } from 'payload'

export const WineCard: CollectionConfig = {
  slug: 'wine-categories',
  admin: {
    useAsTitle: 'categoryName',
    defaultColumns: ['categoryName', 'order'],
  },
  fields: [
    {
      name: 'categoryName',
      type: 'select',
      required: true,
      options: [
        { label: 'Vins Rouges', value: 'rouge' },
        { label: 'Vins Blancs', value: 'blanc' },
        { label: 'Rosés', value: 'rose' },
        { label: 'Bulles & Champagnes', value: 'bulles' },
        { label: 'Vins Naturels', value: 'naturel' },
        { label: 'Digestifs & Autres', value: 'autres' },
      ],
    },
    {
      name: 'wines',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Nom du vin',
        },
        {
          name: 'domaine',
          type: 'text',
          label: 'Domaine / Producteur',
        },
        {
          name: 'region',
          type: 'text',
          label: 'Région',
        },
        {
          name: 'year',
          type: 'number',
          label: 'Millésime',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Notes de dégustation',
        },
        {
          name: 'priceGlass',
          type: 'number',
          label: 'Prix au verre (€)',
        },
        {
          name: 'priceBottle',
          type: 'number',
          required: true,
          label: 'Prix à la bouteille (€)',
        },
        {
          name: 'coupDeCoeur',
          type: 'checkbox',
          label: 'Coup de cœur',
          defaultValue: false,
        },
      ],
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
