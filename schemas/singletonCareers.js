export default {
  title: 'Careers (Landing)',
  name: 'careersLanding',
  type: 'document',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'External Careers Link',
      name: 'externalCareersLink',
      description: 'The link to the external careers platform (eg: "Pinpoint")',
      type: 'url', 
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero Heading',
      name: 'heroHeading',
      description: 'The main heading text in the hero',
      type: 'string', 
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero Text',
      name: 'heroText',
      description: 'The text in the hero',
      type: 'text', 
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      title: 'Working At Field CTA Image',
      name: 'workingAtFieldCtaImage',
      description: 'The image within the yellow "Working At Field" CTA',
      type: 'defaultImage', 
      validation: Rule => Rule.required()
    },
    {
      title: 'Working At Field CTA Text',
      name: 'workingAtFieldCtaText',
      description: 'The text within the yellow "Working At Field" CTA',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Values',
      name: 'values',
      type: 'array',
      of: [
        {
          title: 'Item',
          name: 'item',
          type: 'object',
          fields: [
            {name: 'heading', type: 'string', title: 'Heading', validation: Rule => Rule.required()},
            {name: 'text', type: 'text', rows: 3, title: 'Text', validation: Rule => Rule.required()},
          ],
          preview: {
            select: {
              text: 'text',
              heading: 'heading',
            },
            prepare(selection) {
              const {text, heading} = selection
              return {
                title: heading,
                subtitle: `${text}`
              }
            }
          }
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      title: 'Company Benefits',
      name: 'companyBenefits',
      type: 'array',
      of: [
        {
          title: 'Item',
          name: 'item',
          type: 'object',
          fields: [
            {name: 'heading', type: 'string', title: 'Heading', validation: Rule => Rule.required()},
            {name: 'text', type: 'text', rows: 3, title: 'Text', validation: Rule => Rule.required()},
          ],
          preview: {
            select: {
              text: 'text',
              heading: 'heading',
            },
            prepare(selection) {
              const {text, heading} = selection
              return {
                title: heading,
                subtitle: `${text}`
              }
            }
          }
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      title: 'Supporting Image',
      name: 'supportingImage',
      description: 'The supporting image that sits towards the end of the content',
      type: 'defaultImage', 
      validation: Rule => Rule.required()
    },
    {
      title: 'Careers CTA Text',
      name: 'careersCtaText',
      description: 'The text for the CTA at the end of this page',
      type: 'text', 
      rows: 5,
      validation: Rule => Rule.required()
    },
    {
      title: 'Testimonials',
      name: 'testimonials',
      type: 'array',
      of: [
        {
          title: 'Item',
          name: 'item',
          type: 'object',
          fields: [
            {name: 'authorName', type: 'string', title: 'Author Name', validation: Rule => Rule.required()},
            {name: 'authorJobTitle', type: 'string', title: 'Author Job Title'},
            {name: 'quote', type: 'text', rows: 3, title: 'Quote', validation: Rule => Rule.required()},
            {title: 'Image', name: 'image', type: 'defaultImage', validation: Rule => Rule.required()},
          ],
          preview: {
            select: {
              quote: 'quote',
              authorName: 'authorName',
              authorJobTitle: 'authorJobTitle',
            },
            prepare(selection) {
              const {quote, authorName, authorJobTitle} = selection
              return {
                title: `${authorName} - ${authorJobTitle}`,
                subtitle: `${quote}`,
              }
            }
          }
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      return {
        title
      }
    }
  }
}