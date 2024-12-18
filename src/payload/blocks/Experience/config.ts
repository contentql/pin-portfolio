import { Block } from 'payload'

const ExperienceConfig: Block = {
  slug: 'Experience',
  interfaceName: 'ExperienceType',
  imageURL: '/images/blocks/experiences.png',
  labels: {
    singular: 'Experiences Block',
    plural: 'Experiences Blocks',
  },
  fields: [
    {
      name: 'experiencesHeading',
      label: 'Experiences Heading',
      type: 'text',
    },
    {
      name: 'experiencesDescription',
      label: 'Experiences Description',
      type: 'text',
    },
    {
      name: 'experiences',
      label: 'Experiences',
      type: 'array',
      fields: [
        {
          name: 'designation',
          label: 'Designation',
          type: 'text',
        },
        {
          name: 'location',
          label: 'Location',
          type: 'text',
        },
        {
          name: 'tenure',
          label: 'Tenure',
          type: 'text',
        },
        {
          name: 'companyName',
          label: 'Company Name',
          type: 'text',
        },
        {
          name: 'companyLogo',
          label: 'Company Logo',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'companyWebsiteUrl',
          label: 'Company Website URL',
          type: 'text',
        },
        {
          name: 'aboutYourWork',
          label: 'About Your Work',
          type: 'array',
          fields: [
            {
              name: 'workDescription',
              label: 'Work Description',
              type: 'text',
            },
          ],
        },
        {
          name: 'techStack',
          label: 'Tech Stack',
          type: 'array',
          fields: [
            {
              name: 'techStackName',
              label: 'Tech Stack Name',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'achievementsHeading',
      label: 'Achievements Heading',
      type: 'text',
    },
    {
      name: 'achievementsDescription',
      label: 'Achievements Description',
      type: 'text',
    },
    {
      name: 'achievements',
      label: 'Achievements',
      type: 'array',
      fields: [
        {
          name: 'achievement',
          label: 'Achievement',
          type: 'text',
        },
      ],
    },
  ],
}

export default ExperienceConfig
