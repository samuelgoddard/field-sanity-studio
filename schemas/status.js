export default {
  title: "Status",
  name: 'status',
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      description: "The name of this Status",
      type: "string",
      validation: Rule => Rule.required()
    }
  ]
}