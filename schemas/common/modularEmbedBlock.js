import { FiCode } from 'react-icons/fi'

export default {
  title: 'Modular Embed',
  type: 'object',
  name: 'modularEmbedBlock',
  icon: FiCode,
  fields: [
    {
      title: 'Embed Code',
      name: 'embedCode',
      type: 'text',
      rows: 10,
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Embed Block'
      }
    }
  }
}