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
              name: 'color',
              label: 'Color',
              type: 'select',
              options: [
                {
                  label: 'Orange',
                  value: '#FF8A00',
                },
                {
                  label: 'Olive',
                  value: '#18A08B',
                },
                {
                  label: 'Violet',
                  value: '#7373E2',
                },
                {
                  label: 'Blue',
                  value: '#0099FF',
                },
                {
                  label: 'Red',
                  value: '#FA4000',
                },
                {
                  label: 'Pink',
                  value: '#E100FF',
                },
                {
                  label: 'Green',
                  value: '#009245',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

export default AboutConfig
