export default {
  title: 'Development',
  name: 'development',
  type: 'document',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero Heading',
      name: 'heroHeading',
      description: 'The main heading text in the hero',
      type: 'string', 
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero Text',
      name: 'heroText',
      description: 'The text in the hero',
      type: 'text', 
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      title: 'Intro Text',
      name: 'introText',
      type: 'array', of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Audiences',
      name: 'audiences',
      type: 'array',
      of: [
        {
          title: 'Item',
          name: 'item',
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Title', description: 'The title of this audience, eg: "Landowners"', validation: Rule => Rule.required()},
            {
              title: 'Why Work With Us',
              name: 'whyWorkWithUs',
              type: 'array',
              of: [
                {
                  title: 'Item',
                  name: 'item',
                  type: 'object',
                  fields: [
                    {name: 'title', type: 'string', title: 'Title'},
                    {name: 'text', type: 'text', rows: 3, title: 'Text', validation: Rule => Rule.required()},
                    
                  ],
                  preview: {
                    select: {
                      text: 'text',
                      title: 'title',
                    },
                    prepare(selection) {
                      const {text, title} = selection
                      return {
                        title: title,
                        subtitle: `${text}`
                      }
                    }
                  }
                }
              ],
            },
            {
              title: 'FAQs',
              name: 'faqs',
              type: 'array',
              of: [
                {
                  title: 'Item',
                  name: 'item',
                  type: 'object',
                  fields: [
                    {name: 'question', type: 'string', title: 'Question', validation: Rule => Rule.required()},
                    {name: 'answer', type: 'array', of: [{type: 'block'}], title: 'Answer', validation: Rule => Rule.required()},
                    
                  ],
                  preview: {
                    select: {
                      question: 'question',
                      answer: 'answer',
                    },
                    prepare(selection) {
                      const {question, answer} = selection
                      return {
                        title: question
                      }
                    }
                  }
                }
              ],
            },      
          ],
          preview: {
            select: {
              title: 'title',
            },
            prepare(selection) {
              const {title} = selection
              return {
                title: title,
              }
            }
          }
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      title: 'Orange CTA Image',
      name: 'orangeCtaImage',
      type: 'defaultImage', 
      validation: Rule => Rule.required()
    },
    {
      title: 'Orange CTA Heading',
      name: 'orangeCtaHeading',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required()
    },
    {
      title: 'Orange CTA Text',
      name: 'orangeCtaText',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      title: 'Contact CTA Text',
      name: 'contactCTAText',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      title: 'Contact Email Links',
      name: 'contactEmailLinks',
      type: 'array',
      of: [
        {
          title: 'Item',
          name: 'item',
          type: 'object',
          fields: [
            {name: 'country', type: 'string', title: 'Country', validation: Rule => Rule.required()},
            {name: 'emailAddress', type: 'string', title: 'Email Address', validation: Rule => Rule.required()},
          ],
          preview: {
            select: {
              country: 'country',
              emailAddress: 'emailAddress',
            },
            prepare(selection) {
              const {country, emailAddress} = selection
              return {
                title:  country,
                subtitle: `${emailAddress}`
              }
            }
          }
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      return {
        title
      }
    }
  }
}