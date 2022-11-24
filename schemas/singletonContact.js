export default {
  title: 'Contact',
  name: 'contact',
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
      title: 'Email Address',
      name: 'emailAddress',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Company Number',
      name: 'companyNumber',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Social Links',
      name: 'socialLinks',
      type: 'array',
      of: [
        {
          title: 'Item',
          name: 'item',
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Title', validation: Rule => Rule.required()},
            {name: 'url', type: 'url', title: 'Url', validation: Rule => Rule.required()},
          ],
          preview: {
            select: {
              title: 'title',
              url: 'url',
            },
            prepare(selection) {
              const {title, url} = selection
              return {
                title: title,
                subtitle: `${url}`
              }
            }
          }
        }
      ]
    },
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