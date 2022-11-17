export default {
  title: 'Projects (Landing Page)',
  name: 'projectsLanding',
  type: 'document',
  __experimental_actions: ['update',  'create', 'delete',  'publish'],
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
      title: 'Hero Text',
      name: 'heroText',
      description: 'The text in the hero',
      type: 'text', 
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      title: 'Pipeline CTA Text',
      name: 'pipelineCtaText',
      description: 'The text for the pipeline CTA in the yellow box',
      type: 'text', 
      rows: 4,
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
      title: 'Development CTA Text',
      name: 'developmentCtaText',
      description: 'The text for the development CTA towards the end of the page',
      type: 'text', 
      rows: 4,
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