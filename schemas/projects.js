// import slugify from '../utils/slugify'

export default {
  title: "Projects",
  name: 'projects',
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      description: "The name of this team member",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: 'Country',
      name: 'country',
      type: 'reference',
      to: [{type: 'country'}]
    },
    {
      title: 'Status',
      name: 'status',
      type: 'reference',
      to: [{type: 'status'}]
    },
    {
      title: 'Storage',
      name: 'storage',
      type: 'reference',
      to: [{type: 'storage'}]
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'country.name'
    }
  }
}