import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Paramètres du site',
  fields: [
    {
      name: 'restaurantName',
      type: 'text',
      defaultValue: 'Le Café du Marché',
      label: 'Nom du restaurant',
    },
    {
      name: 'address',
      type: 'text',
      label: 'Adresse complète',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Numéro de téléphone',
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email de contact',
    },
    {
      name: 'hours',
      type: 'array',
      label: "Heures d'ouverture",
      fields: [
        {
          name: 'day',
          type: 'select',
          required: true,
          options: [
            { label: 'Lundi', value: 'lundi' },
            { label: 'Mardi', value: 'mardi' },
            { label: 'Mercredi', value: 'mercredi' },
            { label: 'Jeudi', value: 'jeudi' },
            { label: 'Vendredi', value: 'vendredi' },
            { label: 'Samedi', value: 'samedi' },
            { label: 'Dimanche', value: 'dimanche' },
          ],
        },
        {
          name: 'open',
          type: 'text',
          label: 'Ouverture',
          admin: {
            placeholder: 'ex: 12:00',
          },
        },
        {
          name: 'close',
          type: 'text',
          label: 'Fermeture',
          admin: {
            placeholder: 'ex: 14:30',
          },
        },
        {
          name: 'closed',
          type: 'checkbox',
          label: 'Fermé ce jour',
          defaultValue: false,
        },
      ],
    },
    {
      name: 'instagramUrl',
      type: 'text',
      label: 'Lien Instagram',
    },
    {
      name: 'googleMapsEmbedUrl',
      type: 'text',
      label: 'URL Google Maps Embed',
    },
  ],
}
