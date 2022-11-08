export default {
  title: "Team Departments",
  name: 'departments',
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      description: "The name of this Department",
      type: "string",
      validation: Rule => Rule.required()
    }
  ]
}