export default {
  title: 'Team (Landing Page)',
  name: 'teamLanding',
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
      title: "Intro Image",
      name: "introImage",
      description: "The image that appears just after the hero",
      type: "image",
      validation: Rule => Rule.required()
    },
    {
      title: 'Chapter 1 Title',
      name: 'chapter1Title',
      description: 'The title of the first chapter, eg: "Our Team"',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Chapter 1 Text',
      name: 'chapter1Text',
      description: 'The text of the first chapter, eg: "We believe systemic changes can be made, and we’re determined to make them happen fast."',
      type: 'string',
      validation: Rule => Rule.required().min(10).max(90)
    },
    {
      title: 'Chapter 2 Title',
      name: 'chapter2Title',
      description: 'The title of the second chapter, eg: "Career Opportunities"',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Chapter 2 Heading',
      name: 'chapter2Heading',
      description: 'The title of the second chapter, eg: "Take the field."',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Chapter 2 Text',
      name: 'chapter2Text',
      description: 'The text block of the second chapter',
      type: 'array', 
      of: [{type: 'block'}],
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