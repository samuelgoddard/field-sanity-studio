import { FiCamera } from 'react-icons/fi'

export default {
  title: 'Modular ContentImage',
  type: 'object',
  name: 'modularContentImageBlock',
  icon: FiCamera,
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Content Image Block'
      }
    }
  }
}