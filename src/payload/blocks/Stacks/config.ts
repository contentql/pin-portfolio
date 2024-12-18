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
    },
    {
      name: 'stacksDescription',
      label: 'Stacks Description',
      type: 'text',
    },
    {
      name: 'technologies',
      label: 'Technologies',
      type: 'array',
      fields: [
        {
          name: 'techHeading',
          label: 'Tech Heading',
          type: 'text',
        },
        {
          name: 'techStacks',
          label: 'Tech Stacks',
          type: 'array',
          fields: [
            {
              type: 'text',
              name: 'color',
              admin: { components: { Field: '@/payload/fields/ColorField' } },
              required: true,
            },
            {
              name: 'techName',
              label: 'Tech Name',
              type: 'text',
            },
            {
              name: 'techImage',
              label: 'Tech Image',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
      ],
    },
  ],
}
export default StacksConfig
