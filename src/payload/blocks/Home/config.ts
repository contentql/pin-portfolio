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
      admin: {
        description: 'The greeting text displayed on the home page.',
      },
    },
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      required: true,
      admin: {
        description: 'The name to be displayed prominently on the home page.',
      },
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      admin: {
        description:
          'A short description or tagline to describe yourself or your site.',
      },
    },
    {
      name: 'profilePicture',
      label: 'Profile Picture',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'A profile picture to display on the home page.',
      },
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Links',
      admin: {
        description:
          'A list of social media links to display on the home page.',
      },
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
          admin: {
            description: 'Select the social media platform for this link.',
          },
        },
        {
          name: 'socialIconLink',
          type: 'text',
          label: 'Social Icon Link',
          required: true,
          admin: {
            description: 'The URL to the social media profile.',
          },
        },
      ],
    },
    {
      name: 'button',
      label: 'Button',
      type: 'text',
      admin: {
        description:
          'The text for the main call-to-action button on the home page.',
      },
    },
    {
      name: 'buttonPath',
      label: 'Button Path',
      type: 'text',
      admin: {
        description: 'The URL or path the button navigates to.',
      },
    },
  ],
}

export default HomeConfig
