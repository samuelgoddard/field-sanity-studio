export default {
  title: 'Team (Landing Page)',
  name: 'teamLandingNew',
  type: 'document',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
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
      title: 'Join The Team CTA Text',
      name: 'joinTheTeamCtaText',
      description: 'The text for the join the team CTA towards the end of the page',
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