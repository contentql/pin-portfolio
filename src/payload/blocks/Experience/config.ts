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
      admin: {
        description: 'The main heading for the Experiences section.',
      },
    },
    {
      name: 'experiencesDescription',
      label: 'Experiences Description',
      type: 'text',
      admin: {
        description:
          'A brief description or introduction for the Experiences section.',
      },
    },
    {
      name: 'experiences',
      label: 'Experiences',
      type: 'array',
      admin: {
        description: 'A list of professional experiences.',
      },
      fields: [
        {
          name: 'designation',
          label: 'Designation',
          type: 'text',
          admin: {
            description: 'The job title or position held.',
          },
        },
        {
          name: 'location',
          label: 'Location',
          type: 'text',
          admin: {
            description: 'The geographical location of the job.',
          },
        },
        {
          name: 'tenure',
          label: 'Tenure',
          type: 'text',
          admin: {
            description: 'The duration of the job or position held.',
          },
        },
        {
          name: 'companyName',
          label: 'Company Name',
          type: 'text',
          admin: {
            description: 'The name of the company or organization.',
          },
        },
        {
          name: 'companyLogo',
          label: 'Company Logo',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description:
              'The logo of the company, uploaded from the media library.',
          },
        },
        {
          name: 'companyWebsiteUrl',
          label: 'Company Website URL',
          type: 'text',
          admin: {
            description: 'The URL to the company’s official website.',
          },
        },
        {
          name: 'aboutYourWork',
          label: 'About Your Work',
          type: 'array',
          admin: {
            description: 'Details about the work performed at the job.',
          },
          fields: [
            {
              name: 'workDescription',
              label: 'Work Description',
              type: 'text',
              admin: {
                description: 'A single point describing the work.',
              },
            },
          ],
        },
        {
          name: 'techStack',
          label: 'Tech Stack',
          type: 'array',
          admin: {
            description: 'A list of technologies used during the job.',
          },
          fields: [
            {
              name: 'techStackName',
              label: 'Tech Stack Name',
              type: 'text',
              admin: {
                description: 'The name of a technology or tool used.',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'achievementsHeading',
      label: 'Achievements Heading',
      type: 'text',
      admin: {
        description: 'The heading for the Achievements section.',
      },
    },
    {
      name: 'achievementsDescription',
      label: 'Achievements Description',
      type: 'text',
      admin: {
        description:
          'A brief description or introduction for the Achievements section.',
      },
    },
    {
      name: 'achievements',
      label: 'Achievements',
      type: 'array',
      admin: {
        description: 'A list of significant achievements.',
      },
      fields: [
        {
          name: 'achievement',
          label: 'Achievement',
          type: 'text',
          admin: {
            description: 'A single achievement.',
          },
        },
      ],
    },
  ],
}

export default ExperienceConfig
