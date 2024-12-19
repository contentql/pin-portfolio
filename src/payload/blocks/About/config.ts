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
      admin: {
        description: 'The main heading for the About section.',
      },
    },
    {
      name: 'aboutDescription',
      label: 'About Description',
      type: 'textarea',
      admin: {
        description: 'A detailed description for the About section.',
      },
    },
    {
      name: 'profileImage',
      label: 'Profile Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description:
          'An image that represents the profile, uploaded from the media library.',
      },
    },
    {
      name: 'aboutYourSelf',
      label: 'About Your Self',
      type: 'text',
      admin: {
        description: 'A short text describing yourself.',
      },
    },
    {
      name: 'button',
      label: 'Button',
      type: 'text',
      admin: {
        description: 'The text to display on the call-to-action button.',
      },
    },
    {
      name: 'buttonPath',
      label: 'Button Path',
      type: 'text',
      admin: {
        description: 'The URL or path that the button links to.',
      },
    },
    {
      name: 'Details',
      label: 'Details',
      type: 'array',
      admin: {
        description: 'An array of detailed information items.',
      },
      fields: [
        {
          name: 'detailsTitle',
          label: 'Details Title',
          type: 'text',
          admin: {
            description: 'The title for this details section.',
          },
        },
        {
          name: 'detailsPoints',
          label: 'Details Points',
          type: 'array',
          admin: {
            description: 'A list of points under this detail section.',
          },
          fields: [
            {
              name: 'detailPoint',
              label: 'Detail Point',
              type: 'text',
              admin: {
                description: 'A single point of detail.',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'codeProfiles',
      label: 'Code Profiles',
      type: 'array',
      admin: {
        description: 'A list of code profiles for showcasing your work.',
      },
      fields: [
        {
          name: 'Heading',
          label: 'Heading',
          type: 'text',
          admin: {
            description: 'The heading for the code profiles section.',
          },
        },
        {
          name: 'codeProfile',
          label: 'Code Profile',
          type: 'array',
          admin: {
            description: 'An array of individual code profiles.',
          },
          fields: [
            {
              name: 'codeProfileTitle',
              label: 'Code Profile Title',
              type: 'text',
              admin: {
                description: 'The title of the code profile.',
              },
            },
            {
              name: 'codeProfileUrl',
              label: 'Code Profile Url',
              type: 'text',
              admin: {
                description: 'The URL to the code profile.',
              },
            },
            {
              name: 'codeProfileImage',
              label: 'Code Profile Image',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description:
                  'An image representing the code profile, uploaded from the media library.',
              },
            },
            {
              type: 'text',
              name: 'color',
              admin: {
                components: { Field: '@/payload/fields/ColorField' },
                description: 'The color associated with this code profile.',
              },
              required: true,
            },
          ],
        },
      ],
    },
  ],
}

export default AboutConfig
