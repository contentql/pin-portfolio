import { Block } from 'payload'

const AboutConfig: Block = {
  slug: 'About',
  interfaceName: 'AboutType',
  labels: {
    singular: 'About Block',
    plural: 'About Blocks',
  },
  fields: [
    {
      name: 'aboutHeading',
      label: 'About Heading',
      type: 'text',
    },
    {
      name: 'aboutDescription',
      label: 'About Description',
      type: 'textarea',
    },
    {
      name: 'profileImage',
      label: 'Profile Image',
      type: 'upload',

      relationTo: 'media',
    },
    {
      name: 'aboutYourSelf',
      label: 'About Your Self',
      type: 'text',
    },
    {
      name: 'button',
      label: 'Button',
      type: 'text',
    },
    {
      name: 'buttonPath',
      label: 'Button Path',
      type: 'text',
    },
    {
      name: 'Details',
      label: 'Details',
      type: 'array',
      fields: [
        {
          name: 'detailsTitle',
          label: 'Details Title',
          type: 'text',
        },
        {
          name: 'detailsPoints',
          label: 'Details Points',
          type: 'array',
          fields: [
            {
              name: 'detailPoint',
              label: 'Detail Point',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}

export default AboutConfig
