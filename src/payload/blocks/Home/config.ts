import { Block } from 'payload'

const HomeConfig: Block = {
  slug: 'Home',
  interfaceName: 'HomeType',
  labels: {
    singular: 'Home Block',
    plural: 'Home Blocks',
  },
  imageURL: '/images/blocks/home.png',
  fields: [
    {
      name: 'greetText',
      type: 'text',
      label: 'Greet Text',
    },
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
    },
    {
      name: 'profilePicture',
      label: 'Profile Picture',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Links',
      fields: [
        {
          name: 'socialIcon',
          type: 'select',
          label: 'Social Icon',
          required: true,
          options: [
            {
              label: 'Facebook',
              value: 'facebook',
            },
            {
              label: 'Github',
              value: 'github',
            },
            {
              label: 'Gmail',
              value: 'gmail',
            },
            {
              label: 'Instagram',
              value: 'instagram',
            },
            {
              label: 'Linkedin',
              value: 'linkedin',
            },
            {
              label: 'Twitter',
              value: 'twitter',
            },
          ],
        },
        {
          name: 'socialIconLink',
          type: 'text',
          label: 'Social Icon Link',
          required: true,
        },
      ],
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
  ],
}

export default HomeConfig
