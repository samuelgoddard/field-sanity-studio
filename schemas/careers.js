import slugify from '../utils/slugify'

export default {
  title: "Careers",
  name: 'careers',
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      description: "The title of this Career Opportunity eg: 'FP&A Manager'",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Post Date",
      description: "Press the button to the right to pick a date.",
      name: "date",
      type: "date",
      options: {
        dateFormat: "MMMM Do YYYY",
      },
      validation: Rule => Rule.required()
    },
    {
      title: "Role Type",
      name: "roleType",
      description: "The type of role, eg: 'Full Time Role / Part Time Role'",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Working Type",
      name: "workingType",
      description: "The working type, eg: 'Hybrid Working / Remote Working'",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: 'Text',
      name: 'text',
      description: 'The text description of this Career Opportunity',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'This is required for page routing and can be auto-generated by pressing "generate"',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: title => slugify(title)
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ]
}