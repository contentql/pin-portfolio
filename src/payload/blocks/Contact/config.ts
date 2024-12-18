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
    },
    {
      name: 'contactDescription',
      label: 'Contact Description',
      type: 'text',
    },
    {
      name: 'contactReasons',
      label: 'Contact Reasons',
      type: 'array',
      fields: [
        {
          name: 'reason',
          label: 'Reason',
          type: 'text',
        },
        {
          name: 'description',
          label: 'Description',
          type: 'text',
        },
      ],
    },
  ],
}

export default ContactConfig
