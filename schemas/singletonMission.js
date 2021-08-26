export default {
  title: 'Mission',
  name: 'mission',
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
      title: 'Chapter 1 Title',
      name: 'chapter1Title',
      description: 'The title of the first chapter, eg: "The challenge"',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Chapter 1 Text',
      name: 'chapter1Text',
      description: 'The text of the first chapter, eg: "We need a seismic shift in our energy systems - and we need it now."',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Chapter 2 Title',
      name: 'chapter2Title',
      description: 'The title of the second chapter, eg: "Our mission"',
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
      title: 'Chapter 3 Title',
      name: 'chapter3Title',
      description: 'The title of the third chapter, eg: "The Plan"',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Chapter 3 Text',
      name: 'chapter3Text',
      description: 'The text of the third chapter, eg: "We’ll begin with energy storage, then push into other infrastructure."',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Chapter 3 Bars',
      name: 'chapter3Bars',
      description: 'The bars in chapter 3s chart',
      type: 'array',
      of: [{type: 'bar', title: 'Bar'}],
      validation: Rule => Rule.required().min(3).max(3)
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