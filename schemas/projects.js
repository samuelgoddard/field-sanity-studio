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
      title: "MWh",
      name: "mwh",
      description: "The amount of MWh (eg: '200')",
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
    {
      title: 'Google Maps URL',
      name: 'googleMapsUrl',
      description: '(Optional) The Google Maps URL for this project',
      type: 'url'
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'country.name'
    }
  }
}