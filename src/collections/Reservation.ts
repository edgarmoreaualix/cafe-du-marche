import type { CollectionConfig } from 'payload'

export const Reservation: CollectionConfig = {
  slug: 'reservations',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['date', 'time', 'name', 'guests', 'status'],
  },
  fields: [
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'time',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'HH:MM (ex: 12:30)',
      },
    },
    {
      name: 'guests',
      type: 'number',
      required: true,
      min: 1,
      max: 20,
      admin: {
        placeholder: 'Nombre de personnes (max 20)',
      },
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      minLength: 2,
      admin: {
        placeholder: 'Nom complet',
      },
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'Numéro de téléphone',
      },
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      admin: {
        placeholder: 'Adresse email',
      },
    },
    {
      name: 'message',
      type: 'textarea',
      maxLength: 500,
      admin: {
        placeholder: 'Message (allergies, demandes spéciales...)',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'pending',
      options: [
        { label: 'En attente', value: 'pending' },
        { label: 'Confirmée', value: 'confirmed' },
        { label: 'Annulée', value: 'cancelled' },
      ],
    },
  ],
}
