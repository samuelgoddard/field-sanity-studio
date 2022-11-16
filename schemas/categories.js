export default {
  title: "Categories",
  name: 'categories',
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      description: "The name of this Category",
      type: "string",
      validation: Rule => Rule.required()
    }
  ]
}