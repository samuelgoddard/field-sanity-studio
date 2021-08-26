export default {
  title: 'Bar',
  type: 'object',
  name: 'bar',
  fields: [
    {
      title: "Year",
      name: "year",
      description: 'The year stat for this bar, eg: "2022"',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: "Meta Info",
      name: "metaInfo",
      description: 'The meta info of this bar, eg: "1.3GW UK & EU batteries"',
      type: 'string',
      validation: Rule => Rule.required()
    }
  ]
}
