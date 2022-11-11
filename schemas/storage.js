export default {
  title: "Storage",
  name: 'storage',
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      description: "The name of this Storage",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: 'tagColor',
      title: 'Tag Colour',
      type: 'color'
    }
  ]
}