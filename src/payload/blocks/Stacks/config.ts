import { Block } from 'payload'

const StacksConfig: Block = {
  slug: 'Stacks',
  interfaceName: 'StacksType',
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
