export default {
  title: 'Pictogram',
  type: 'object',
  name: 'pictogram',
  fields: [
    {
      title: "Icon",
      name: "image",
      type: 'image',
      validation: Rule => Rule.required()
    },
    {
      title: "Heading",
      name: "heading",
      description: 'The heading of this pictogram block, eg: "Network"',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: "Text",
      name: "text",
      description: 'A short text block about this pictogram item"',
      type: 'text',
      validation: Rule => Rule.required()
    }
  ]
}
