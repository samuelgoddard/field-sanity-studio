export default {
  title: 'Mission',
  name: 'missionNew',
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
      title: 'Hero Heading',
      name: 'heroHeading',
      description: 'The main heading text in the hero',
      type: 'string', 
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero Image',
      name: 'heroImage',
      type: 'defaultImage', 
      validation: Rule => Rule.required()
    },
    {
      title: 'The Challenge Text',
      name: 'theChallengeText',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'The Challenge CTA Image',
      name: 'theChallengeCtaImage',
      type: 'defaultImage', 
      validation: Rule => Rule.required()
    },
    {
      title: 'The Challenge CTA Text',
      name: 'theChallengeCTAText',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      title: 'Our Plan Text',
      name: 'ourPlanText',
      type: 'array', 
      of: [{type: 'block'}],
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      title: 'Roadmap Text',
      name: 'roadmapText',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      title: 'Roadmap Bars',
      name: 'roadmapBars',
      description: 'The bars in roadmap area',
      type: 'array',
      of: [{type: 'bar', title: 'Bar'}],
      validation: Rule => Rule.required().min(5).max(5)
    },
    {
      title: 'Impact Number',
      name: 'impactNumber',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Impact Text',
      name: 'impactText',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      title: 'How We Do It Cards',
      name: 'howWeDoItCards',
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