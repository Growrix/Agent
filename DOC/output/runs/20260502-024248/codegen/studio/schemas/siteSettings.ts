import { defineType, defineField } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({ name: 'siteName', title: 'Site Name', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
    defineField({ name: 'email', title: 'Email Address', type: 'string' }),
    defineField({ name: 'address', title: 'Address', type: 'text', rows: 3 }),
    defineField({ name: 'licenceNumber', title: 'Plumber Licence No.', type: 'string' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'defaultSeo', title: 'Default SEO', type: 'seo' }),
  ],
})
