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
      name: 'languages',
      label: 'Languages',
      type: 'select',
      hasMany: true,
      options: [
        {
          label: 'C',
          value: 'c',
        },
        {
          label: 'C++',
          value: 'cplusplus',
        },
        {
          label: 'Python',
          value: 'python',
        },
        {
          label: 'HTML',
          value: 'html',
        },
        {
          label: 'CSS',
          value: 'css',
        },
        {
          label: 'JavaScript',
          value: 'javascript',
        },
        {
          label: 'TypeScript',
          value: 'typescript',
        },
        {
          label: 'Rust',
          value: 'rust',
        },
        {
          label: 'Go',
          value: 'go',
        },
        {
          label: 'Kotlin',
          value: 'kotlin',
        },
        {
          label: 'PHP',
          value: 'php',
        },
        {
          label: 'Swift',
          value: 'swift',
        },
        {
          label: 'Ruby',
          value: 'ruby',
        },
        {
          label: 'Perl',
          value: 'perl',
        },
        {
          label: 'Scala',
          value: 'scala',
        },
        {
          label: 'Dart',
          value: 'dart',
        },
        {
          label: 'Lua',
          value: 'lua',
        },
        {
          label: 'Haskell',
          value: 'haskell',
        },
        {
          label: 'Elixir',
          value: 'elixir',
        },
        {
          label: 'Clojure',
          value: 'clojure',
        },
        {
          label: 'R',
          value: 'r',
        },
      ],
    },
    {
      name: 'frameworksAndLibraries',
      label: 'Frameworks And Libraries',
      type: 'select',
      hasMany: true,
      options: [
        {
          label: 'React.js',
          value: 'react',
        },
        {
          label: 'Redux',
          value: 'redux',
        },
        {
          label: 'React Query',
          value: 'react-query',
        },
        {
          label: 'Tailwind CSS',
          value: 'tailwindcss',
        },
        {
          label: 'Next.js',
          value: 'nextjs',
        },
        {
          label: 'Ant Design',
          value: 'ant-design',
        },
        {
          label: 'Shadcn/ui',
          value: 'shadcn-ui',
        },
        {
          label: 'Material UI',
          value: 'material-ui',
        },
        {
          label: 'Node.js',
          value: 'nodejs',
        },
        {
          label: 'Express.js',
          value: 'expressjs',
        },
        {
          label: 'Angular',
          value: 'angular',
        },
        {
          label: 'Docker',
          value: 'docker',
        },
        {
          label: 'Firebase',
          value: 'firebase',
        },
        {
          label: 'GraphQL',
          value: 'graphql',
        },
        {
          label: 'Svelte',
          value: 'svelte',
        },
        {
          label: 'Terraform',
          value: 'terraform',
        },
        {
          label: 'Rust',
          value: 'rust',
        },
      ],
    },
    {
      name: 'databases',
      label: 'Databases',
      type: 'select',
      hasMany: true,
      options: [
        {
          label: 'Firebase',
          value: 'firebase',
        },
        {
          label: 'MongoDB',
          value: 'mongodb',
        },
        {
          label: 'PostgreSQL',
          value: 'postgresql',
        },
        {
          label: 'Supabase',
          value: 'supabase',
        },
        {
          label: 'MySQL',
          value: 'mysql',
        },
        {
          label: 'Redis',
          value: 'redis',
        },
        {
          label: 'Oracle',
          value: 'oracle',
        },
        {
          label: 'MariaDB',
          value: 'mariadb',
        },
        {
          label: 'CockroachDB',
          value: 'cockroachdb',
        },
        {
          label: 'ArangoDB',
          value: 'arangodb',
        },
        {
          label: 'Neo4j',
          value: 'neo4j',
        },
        {
          label: 'InfluxDB',
          value: 'influxdb',
        },
        {
          label: 'Elasticsearch',
          value: 'elasticsearch',
        },
      ],
    },
    {
      name: 'tools',
      label: 'Tools',
      type: 'select',
      hasMany: true,
      options: [
        {
          label: 'Vite.js',
          value: 'vite',
        },
        {
          label: 'Git',
          value: 'git',
        },
        {
          label: 'ChatGPT',
          value: 'chatgpt',
        },
        {
          label: 'Postman',
          value: 'postman',
        },
        {
          label: 'Docker',
          value: 'docker',
        },
        {
          label: 'Jenkins',
          value: 'jenkins',
        },
        {
          label: 'CircleCI',
          value: 'circleci',
        },
        {
          label: 'Travis CI',
          value: 'travisci',
        },
        {
          label: 'Heroku',
          value: 'heroku',
        },
        {
          label: 'Ansible',
          value: 'ansible',
        },
        {
          label: 'Puppet',
          value: 'puppet',
        },
        {
          label: 'Chef',
          value: 'chef',
        },
        {
          label: 'Datadog',
          value: 'datadog',
        },
        {
          label: 'Prometheus',
          value: 'prometheus',
        },
        {
          label: 'Grafana',
          value: 'grafana',
        },
        {
          label: 'Kibana',
          value: 'kibana',
        },
        {
          label: 'Sentry',
          value: 'sentry',
        },
        {
          label: 'Slack',
          value: 'slack',
        },
        {
          label: 'Discord',
          value: 'discord',
        },
        {
          label: 'Zapier',
          value: 'zapier',
        },
        {
          label: 'Ngrok',
          value: 'ngrok',
        },
      ],
    },
    {
      name: 'services',
      label: 'Services',
      type: 'select',
      hasMany: true,
      options: [
        {
          label: 'Github',
          value: 'github',
        },
        {
          label: 'BitBucket',
          value: 'bitbucket',
        },
        {
          label: 'Figma',
          value: 'figma',
        },
        {
          label: 'Trello',
          value: 'trello',
        },
        {
          label: 'Vercel',
          value: 'vercel',
        },
        {
          label: 'Netlify',
          value: 'netlify',
        },
        {
          label: 'Notion',
          value: 'notion',
        },
        {
          label: 'Heroku',
          value: 'heroku',
        },
        {
          label: 'Google Cloud',
          value: 'googlecloud',
        },
        {
          label: 'Firebase',
          value: 'firebase',
        },
        {
          label: 'Docker Hub',
          value: 'dockerhub',
        },
        {
          label: 'Slack',
          value: 'slack',
        },
        {
          label: 'Discord',
          value: 'discord',
        },
        {
          label: 'Jira',
          value: 'jira',
        },
        {
          label: 'Asana',
          value: 'asana',
        },
        {
          label: 'GitLab',
          value: 'gitlab',
        },
        {
          label: 'CircleCI',
          value: 'circleci',
        },
        {
          label: 'Mailchimp',
          value: 'mailchimp',
        },
        {
          label: 'Zendesk',
          value: 'zendesk',
        },
        {
          label: 'Zapier',
          value: 'zapier',
        },
        {
          label: 'Postman',
          value: 'postman',
        },
      ],
    },
  ],
}
export default StacksConfig
