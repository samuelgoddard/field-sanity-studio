export default {
  title: "Country",
  name: 'country',
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      description: "The name of this Country",
      type: "string",
      validation: Rule => Rule.required()
    }
  ]
}