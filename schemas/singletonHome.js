export default {
  title: 'Home',
  name: 'home',
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
      title: 'Intro Text',
      name: 'introText',
      description: 'The introductory text in the right column of the hero',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Chapter 1 Title',
      name: 'chapter1Title',
      description: 'The title of the first chapter, eg: "New Generation"',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Chapter 1 Text',
      name: 'chapter1Text',
      description: 'The text of the first chapter, eg: "Field. Smart, investable solutions towards net zero."',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Pictogram Blocks',
      name: 'pictogramBlocks',
      description: 'The columned pictogram blocks',
      type: 'array',
      of: [{type: 'pictogram', title: 'Pictogram Block'}],
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