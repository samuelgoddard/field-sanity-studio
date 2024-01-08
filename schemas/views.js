import slugify from '../utils/slugify'

export default {
  title: "Views",
  name: 'views',
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      description: "The name of this Article",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Publish Date",
      description: "Press the button to the right to pick a date.",
      name: "publishDate",
      type: "date",
      options: {
        dateFormat: "MMMM Do YYYY",
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: [{type: 'categories'}]
    },
    // {
    //   title: 'Author',
    //   name: 'author',
    //   type: 'reference',
    //   to: [{type: 'team'}]
    // },
    {
      title: 'Authors',
      name: 'authors',
      type: 'array',
      of: [
        {
          title: 'Author',
          name: 'author',
          type: 'reference',
          to: [{type: 'team'}]
        },
      ]
    },
    {
      title: 'Content Blocks',
      name: 'contentBlocks',
      description: 'The modular content blocks for this article',
      type: 'array',
      of: [
        {type: 'textBlock', title: 'Text'},
        {type: 'modularImageBlock', title: 'Full Width Image'},
        {type: 'modularContentImageBlock', title: 'Content Image'},
        {type: 'modularQuoteBlock', title: 'Quote'},
        {type: 'modularEmbedBlock', title: 'Embed (External Video etc.)'},
        {type: 'modularSanityVideoBlock', title: 'Video (Internal Sanity Video)'},
      ],
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'This is required for page routing and can be auto-generated by pressing "generate"',
      options: {
        source: (doc) => {
          let titleSlug = ''
          let campaignSlug = ''
          if (doc.title) {
            titleSlug = `${doc.title}`
          } else {
            titleSlug = ''
          }

          if (doc.campaignTitle) {
            campaignSlug = `-${doc.campaignTitle}`
          } else {
            campaignSlug = ''
          }

          return `${titleSlug}${campaignSlug}`;
        },
        maxLength: 96,
        slugify: (input) => slugify(`${input}`)
      },
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
      title: 'title',
      featured: 'featured',
      publishDate: 'publishDate'
    },
    prepare(selection) {
      const {featured, title, publishDate} = selection
      return {
        title: title,
        subtitle: `${publishDate}${featured ? ' - FEATURED' : '' }`
      }
    }
  }
}