export default {
  title: "Team Locations",
  name: 'locations',
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      description: "The name of this Location",
      type: "string",
      validation: Rule => Rule.required()
    }
  ]
}