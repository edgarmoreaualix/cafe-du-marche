import type { GlobalConfig } from 'payload'

export const About: GlobalConfig = {
  slug: 'about',
  label: 'À Propos',
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      defaultValue: 'Notre Histoire',
      label: 'Titre',
    },
    {
      name: 'story',
      type: 'richText',
      localized: true,
      label: 'Histoire',
    },
    {
      name: 'images',
      type: 'array',
      label: 'Photos',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
          localized: true,
          label: 'Légende',
        },
      ],
    },
  ],
}
