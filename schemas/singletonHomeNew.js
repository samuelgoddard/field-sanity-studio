export default {
  title: 'Home',
  name: 'homeNew',
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
      title: 'Page Links',
      name: 'pageLinks',
      type: 'array',
      of: [
        {
          title: 'Item',
          name: 'item',
          type: 'object',
          fields: [
            {name: 'metaHeading', type: 'string', title: 'Meta Heading', validation: Rule => Rule.required()},
            {name: 'text', type: 'text', rows: 3, title: 'Text', validation: Rule => Rule.required()},
            {name: 'buttonText', type: 'string', title: 'Button Text', validation: Rule => Rule.required()},
            {
              title: 'Page To Link',
              name: 'pageToLink',
              type: 'string',
              options: {
                list: [
                  {title: 'Mission', value: '/mission'},
                  {title: 'Projects', value: '/projects'},
                  {title: 'Development', value: '/development'},
                  {title: 'Team', value: '/team'},
                  {title: 'Careers', value: '/careers'},
                  {title: 'Views', value: '/views'}
                ],
              }
            },
            {
              title: 'Image',
              name: 'image',
              type: 'defaultImage', 
              validation: Rule => Rule.required()
            },
          ],
          preview: {
            select: {
              text: 'text',
              metaHeading: 'metaHeading',
            },
            prepare(selection) {
              const {text, metaHeading} = selection
              return {
                title: metaHeading,
                subtitle: `${text}`
              }
            }
          }
        }
      ],
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