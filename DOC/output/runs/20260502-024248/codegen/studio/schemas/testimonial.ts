import { defineType, defineField } from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Customer Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'suburb', title: 'Suburb', type: 'string' }),
    defineField({ name: 'body', title: 'Review', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({ name: 'rating', title: 'Rating (1–5)', type: 'number', validation: (r) => r.required().min(1).max(5) }),
    defineField({ name: 'service', title: 'Service', type: 'reference', to: [{ type: 'service' }] }),
    defineField({ name: 'approved', title: 'Approved', type: 'boolean', initialValue: false }),
    defineField({ name: 'source', title: 'Source (e.g. Google)', type: 'string' }),
  ],
})
