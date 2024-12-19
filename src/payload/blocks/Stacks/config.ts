import { Block } from 'payload'

const StacksConfig: Block = {
  slug: 'Stacks',
  interfaceName: 'StacksType',
  imageURL: '/images/blocks/stacks.png',
  labels: {
    singular: 'Stacks Block',
    plural: 'Stacks Blocks',
  },
  fields: [
    {
      name: 'stacksHeading',
      label: 'Stacks Heading',
      type: 'text',
      admin: {
        description: 'The main heading for the Stacks section.',
      },
    },
    {
      name: 'stacksDescription',
      label: 'Stacks Description',
      type: 'text',
      admin: {
        description: 'A brief description for the Stacks section.',
      },
    },
    {
      name: 'technologies',
      label: 'Technologies',
      type: 'array',
      admin: {
        description: 'A list of technologies to showcase in this section.',
      },
      fields: [
        {
          name: 'techHeading',
          label: 'Tech Heading',
          type: 'text',
          admin: {
            description: 'The heading for a specific technology group.',
          },
        },
        {
          name: 'techStacks',
          label: 'Tech Stacks',
          type: 'array',
          admin: {
            description: 'An array of technologies within this group.',
          },
          fields: [
            {
              type: 'text',
              name: 'color',
              admin: {
                components: { Field: '@/payload/fields/ColorField' },
                description: 'The color associated with this technology.',
              },
              required: true,
            },
            {
              name: 'techName',
              label: 'Tech Name',
              type: 'text',
              admin: {
                description: 'The name of the technology.',
              },
            },
            {
              name: 'techImage',
              label: 'Tech Image',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description:
                  'An image representing the technology, uploaded from the media library.',
              },
            },
          ],
        },
      ],
    },
  ],
}
export default StacksConfig
