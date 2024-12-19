import { Block } from 'payload'

const ContactConfig: Block = {
  slug: 'Contact',
  interfaceName: 'ContactType',
  imageURL: '/images/blocks/contact.png',

  labels: {
    singular: 'Contact Block',
    plural: 'Contact Blocks',
  },
  fields: [
    {
      name: 'contactHeading',
      label: 'Contact Heading',
      type: 'text',
      admin: {
        description: 'The main heading for the Contact section.',
      },
    },
    {
      name: 'contactDescription',
      label: 'Contact Description',
      type: 'text',
      admin: {
        description:
          'A brief description or introduction for the Contact section.',
      },
    },
    {
      name: 'contactReasons',
      label: 'Contact Reasons',
      type: 'array',
      admin: {
        description:
          'A list of reasons for contacting, each with a description.',
      },
      fields: [
        {
          name: 'reason',
          label: 'Reason',
          type: 'text',
          admin: {
            description: 'The title or main reason for contacting.',
          },
        },
        {
          name: 'description',
          label: 'Description',
          type: 'text',
          admin: {
            description:
              'A detailed explanation or additional information about the reason.',
          },
        },
      ],
    },
  ],
}

export default ContactConfig
