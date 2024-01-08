import { FiVideo } from 'react-icons/fi'

export default {
  title: 'Modular Sanity Video',
  type: 'object',
  name: 'modularSanityVideoBlock',
  icon: FiVideo,
  fields: [
    {
      title: 'Video File',
      name: 'videoFile',
      type: 'file',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Sanity Video Block'
      }
    }
  }
}