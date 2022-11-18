export default {
  title: 'Views (Landing Page)',
  name: 'viewsLanding',
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
      title: 'Featured Article Image',
      name: 'featuredArticleImage',
      description: 'The image that displays on the views index page',
      type: 'defaultImage', 
      validation: Rule => Rule.required()
    },
    {
      title: 'Featured Article',
      name: 'featuredArticle',
      type: 'reference',
      to: [{type: 'views'}]
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