import { defineType, defineField } from 'sanity'

export const serviceAreaType = defineType({
  name: 'serviceArea',
  title: 'Service Area',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'suburb', title: 'Suburb Name', type: 'string' }),
    defineField({ name: 'region', title: 'Region', type: 'string' }),
    defineField({ name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
  ],
})
