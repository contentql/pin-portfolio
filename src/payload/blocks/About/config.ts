import { Block } from 'payload'

const AboutConfig: Block = {
  slug: 'About',
  interfaceName: 'AboutType',
  imageURL: '/images/blocks/about.png',
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
    {
      name: 'codeProfiles',
      label: 'Code Profiles',
      type: 'array',
      fields: [
        {
          name: 'Heading',
          label: 'Heading',
          type: 'text',
        },
        {
          name: 'codeProfile',
          label: 'Code Profile',
          type: 'array',
          fields: [
            {
              name: 'codeProfileTitle',
              label: 'Code Profile Title',
              type: 'text',
            },
            {
              name: 'codeProfileUrl',
              label: 'Code Profile Url',
              type: 'text',
            },
            {
              name: 'codeProfileImage',
              label: 'Code Profile Image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              type: 'text',
              name: 'color',
              admin: { components: { Field: '@/payload/fields/ColorField' } },
              required: true,
            },
          ],
        },
      ],
    },
  ],
}

export default AboutConfig
