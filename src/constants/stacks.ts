import {
  IconType, // Additional frameworks and libraries
  SiAngular,
  SiAngularHex,
  SiAnsible,
  SiAnsibleHex,
  SiAntdesign,
  SiAntdesignHex,
  SiArangodb,
  SiArangodbHex,
  SiAsana,
  SiAsanaHex,
  SiBitbucket,
  SiBitbucketHex,
  SiC,
  SiCHex,
  SiChef,
  SiChefHex,
  SiCircleci,
  SiCircleciHex,
  SiClojure,
  SiClojureHex,
  SiCockroachlabs,
  SiCockroachlabsHex,
  SiCplusplus,
  SiCplusplusHex,
  SiCss3,
  SiCss3Hex,
  SiDart,
  SiDartHex,
  SiDatadog,
  SiDatadogHex,
  SiDiscord,
  SiDiscordHex,
  SiDocker,
  SiDockerHex,
  SiElasticsearch,
  SiElasticsearchHex,
  SiElixir,
  SiElixirHex,
  SiExpress,
  SiExpressHex,
  SiFigma,
  SiFigmaHex,
  SiFirebase,
  SiFirebaseHex,
  SiGit,
  SiGitHex,
  SiGithub,
  SiGithubHex,
  SiGitlab,
  SiGitlabHex,
  SiGo,
  SiGoHex,
  SiGooglecloud,
  SiGooglecloudHex,
  SiGrafana,
  SiGrafanaHex,
  SiGraphql,
  SiGraphqlHex,
  SiHaskell,
  SiHaskellHex,
  SiHeroku,
  SiHerokuHex,
  SiHtml5,
  SiHtml5Hex,
  SiInfluxdb,
  SiInfluxdbHex,
  SiJavascript,
  SiJavascriptHex,
  SiJenkins,
  SiJenkinsHex,
  SiJira,
  SiJiraHex,
  SiKibana,
  SiKibanaHex,
  SiKotlin,
  SiKotlinHex,
  SiLua,
  SiLuaHex,
  SiMailchimp,
  SiMailchimpHex,
  SiMariadb,
  SiMariadbHex,
  SiMongodb,
  SiMongodbHex,
  SiMui,
  SiMuiHex,
  SiMysql,
  SiMysqlHex,
  SiNeo4j,
  SiNeo4jHex,
  SiNetlify,
  SiNetlifyHex,
  SiNextdotjs,
  SiNextdotjsHex,
  SiNgrok,
  SiNgrokHex,
  SiNodedotjs,
  SiNodedotjsHex,
  SiNotion,
  SiNotionHex,
  SiOpenai,
  SiOpenaiHex, // Additional Databases
  SiOracle,
  SiOracleHex,
  SiPerl,
  SiPerlHex,
  SiPhp,
  SiPhpHex,
  SiPostgresql,
  SiPostgresqlHex,
  SiPostman,
  SiPostmanHex,
  SiPrometheus,
  SiPrometheusHex,
  SiPuppet,
  SiPuppetHex,
  SiPython,
  SiPythonHex,
  SiR,
  SiRHex,
  SiReact,
  SiReactHex,
  SiReactquery,
  SiReactqueryHex,
  SiRedis,
  SiRedisHex,
  SiRedux,
  SiReduxHex,
  SiRuby,
  SiRubyHex,
  SiRust,
  SiRustHex,
  SiScala,
  SiScalaHex,
  SiSentry,
  SiSentryHex,
  SiShadcnui,
  SiShadcnuiHex,
  SiSlack,
  SiSlackHex,
  SiSupabase,
  SiSupabaseHex,
  SiSvelte,
  SiSvelteHex,
  SiSwift,
  SiSwiftHex,
  SiTailwindcss,
  SiTailwindcssHex,
  SiTerraform,
  SiTerraformHex,
  SiTravisci,
  SiTravisciHex,
  SiTrello,
  SiTrelloHex,
  SiTypescript,
  SiTypescriptHex,
  SiVercel,
  SiVercelHex,
  SiVite,
  SiViteHex,
  SiZapier,
  SiZapierHex,
  SiZendesk,
  SiZendeskHex,
} from '@icons-pack/react-simple-icons'

export type TTech = {
  title: string
  Icon: IconType
  color: string
}

export type TStackCategory = {
  type: string
  techs: TTech[]
}

export const STACKS_HEADER = {
  heading: 'Tech Stacks',
  subHeading: 'Peek into my software toolbox and preferred technology stacks',
}

export const STACK_CATEGORIES: TStackCategory[] = [
  {
    type: 'Languages',
    techs: [
      {
        title: 'C',
        Icon: SiC,
        color: SiCHex,
      },
      {
        title: 'C++',
        Icon: SiCplusplus,
        color: SiCplusplusHex,
      },
      {
        title: 'Python',
        Icon: SiPython,
        color: SiPythonHex,
      },
      {
        title: 'HTML',
        Icon: SiHtml5,
        color: SiHtml5Hex,
      },
      {
        title: 'CSS',
        Icon: SiCss3,
        color: SiCss3Hex,
      },
      {
        title: 'JavaScript',
        Icon: SiJavascript,
        color: SiJavascriptHex,
      },
      {
        title: 'TypeScript',
        Icon: SiTypescript,
        color: SiTypescriptHex,
      },
      // Newly Added Languages
      {
        title: 'Rust',
        Icon: SiRust,
        color: SiRustHex,
      },
      {
        title: 'Go',
        Icon: SiGo,
        color: SiGoHex,
      },

      {
        title: 'Kotlin',
        Icon: SiKotlin,
        color: SiKotlinHex,
      },
      {
        title: 'PHP',
        Icon: SiPhp,
        color: SiPhpHex,
      },
      {
        title: 'Swift',
        Icon: SiSwift,
        color: SiSwiftHex,
      },
      {
        title: 'Ruby',
        Icon: SiRuby,
        color: SiRubyHex,
      },
      {
        title: 'Perl',
        Icon: SiPerl,
        color: SiPerlHex,
      },
      {
        title: 'Scala',
        Icon: SiScala,
        color: SiScalaHex,
      },
      {
        title: 'Dart',
        Icon: SiDart,
        color: SiDartHex,
      },
      {
        title: 'Lua',
        Icon: SiLua,
        color: SiLuaHex,
      },
      {
        title: 'Haskell',
        Icon: SiHaskell,
        color: SiHaskellHex,
      },
      {
        title: 'Elixir',
        Icon: SiElixir,
        color: SiElixirHex,
      },
      {
        title: 'Clojure',
        Icon: SiClojure,
        color: SiClojureHex,
      },

      {
        title: 'R',
        Icon: SiR,
        color: SiRHex,
      },
    ],
  },
  {
    type: 'Frameworks & Libraries',
    techs: [
      {
        title: 'React.js',
        Icon: SiReact,
        color: SiReactHex,
      },
      {
        title: 'Redux',
        Icon: SiRedux,
        color: SiReduxHex,
      },
      {
        title: 'React Query',
        Icon: SiReactquery,
        color: SiReactqueryHex,
      },
      {
        title: 'Tailwind CSS',
        Icon: SiTailwindcss,
        color: SiTailwindcssHex,
      },
      {
        title: 'Next.js',
        Icon: SiNextdotjs,
        color: SiNextdotjsHex,
      },
      {
        title: 'Ant Design',
        Icon: SiAntdesign,
        color: SiAntdesignHex,
      },
      {
        title: 'Shadcn/ui',
        Icon: SiShadcnui,
        color: SiShadcnuiHex,
      },
      {
        title: 'Material UI',
        Icon: SiMui,
        color: SiMuiHex,
      },
      {
        title: 'Node.js',
        Icon: SiNodedotjs,
        color: SiNodedotjsHex,
      },
      {
        title: 'Express.js',
        Icon: SiExpress,
        color: SiExpressHex,
      },

      {
        title: 'Angular',
        Icon: SiAngular,
        color: SiAngularHex,
      },

      {
        title: 'Docker',
        Icon: SiDocker,
        color: SiDockerHex,
      },
      {
        title: 'Firebase',
        Icon: SiFirebase,
        color: SiFirebaseHex,
      },
      {
        title: 'GraphQL',
        Icon: SiGraphql,
        color: SiGraphqlHex,
      },
      {
        title: 'Svelte',
        Icon: SiSvelte,
        color: SiSvelteHex,
      },

      {
        title: 'Terraform',
        Icon: SiTerraform,
        color: SiTerraformHex,
      },
      {
        title: 'Rust',
        Icon: SiRust,
        color: SiRustHex,
      },
    ],
  },
  {
    type: 'Databases',
    techs: [
      {
        title: 'Firebase',
        Icon: SiFirebase,
        color: SiFirebaseHex,
      },
      {
        title: 'MongoDB',
        Icon: SiMongodb,
        color: SiMongodbHex,
      },
      {
        title: 'PostgreSQL',
        Icon: SiPostgresql,
        color: SiPostgresqlHex,
      },
      {
        title: 'Supabase',
        Icon: SiSupabase,
        color: SiSupabaseHex,
      },
      {
        title: 'MySQL',
        Icon: SiMysql,
        color: SiMysqlHex,
      },
      {
        title: 'Redis',
        Icon: SiRedis,
        color: SiRedisHex,
      },
      {
        title: 'Oracle',
        Icon: SiOracle,
        color: SiOracleHex,
      },
      {
        title: 'MariaDB',
        Icon: SiMariadb,
        color: SiMariadbHex,
      },
      {
        title: 'CockroachDB',
        Icon: SiCockroachlabs,
        color: SiCockroachlabsHex,
      },

      {
        title: 'ArangoDB',
        Icon: SiArangodb,
        color: SiArangodbHex,
      },
      {
        title: 'Neo4j',
        Icon: SiNeo4j,
        color: SiNeo4jHex,
      },
      {
        title: 'InfluxDB',
        Icon: SiInfluxdb,
        color: SiInfluxdbHex,
      },
      {
        title: 'Elasticsearch',
        Icon: SiElasticsearch,
        color: SiElasticsearchHex,
      },
    ],
  },
  {
    type: 'Tools',
    techs: [
      {
        title: 'Vite.js',
        Icon: SiVite,
        color: SiViteHex,
      },
      {
        title: 'Git',
        Icon: SiGit,
        color: SiGitHex,
      },

      {
        title: 'ChatGPT',
        Icon: SiOpenai,
        color: SiOpenaiHex,
      },
      {
        title: 'Postman',
        Icon: SiPostman,
        color: SiPostmanHex,
      },
      {
        title: 'Docker',
        Icon: SiDocker,
        color: SiDockerHex,
      },
      // Additional tools
      {
        title: 'Jenkins',
        Icon: SiJenkins,
        color: SiJenkinsHex,
      },
      {
        title: 'CircleCI',
        Icon: SiCircleci,
        color: SiCircleciHex,
      },
      {
        title: 'Travis CI',
        Icon: SiTravisci,
        color: SiTravisciHex,
      },
      {
        title: 'Heroku',
        Icon: SiHeroku,
        color: SiHerokuHex,
      },

      {
        title: 'Ansible',
        Icon: SiAnsible,
        color: SiAnsibleHex,
      },
      {
        title: 'Puppet',
        Icon: SiPuppet,
        color: SiPuppetHex,
      },
      {
        title: 'Chef',
        Icon: SiChef,
        color: SiChefHex,
      },
      {
        title: 'Datadog',
        Icon: SiDatadog,
        color: SiDatadogHex,
      },
      {
        title: 'Prometheus',
        Icon: SiPrometheus,
        color: SiPrometheusHex,
      },
      {
        title: 'Grafana',
        Icon: SiGrafana,
        color: SiGrafanaHex,
      },
      {
        title: 'Kibana',
        Icon: SiKibana,
        color: SiKibanaHex,
      },
      {
        title: 'Sentry',
        Icon: SiSentry,
        color: SiSentryHex,
      },
      {
        title: 'Slack',
        Icon: SiSlack,
        color: SiSlackHex,
      },
      {
        title: 'Discord',
        Icon: SiDiscord,
        color: SiDiscordHex,
      },
      {
        title: 'Zapier',
        Icon: SiZapier,
        color: SiZapierHex,
      },
      {
        title: 'Ngrok',
        Icon: SiNgrok,
        color: SiNgrokHex,
      },
    ],
  },
  {
    type: 'Services',
    techs: [
      {
        title: 'Github',
        Icon: SiGithub,
        color: SiGithubHex,
      },
      {
        title: 'BitBucket',
        Icon: SiBitbucket,
        color: SiBitbucketHex,
      },
      {
        title: 'Figma',
        Icon: SiFigma,
        color: SiFigmaHex,
      },
      {
        title: 'Trello',
        Icon: SiTrello,
        color: SiTrelloHex,
      },
      {
        title: 'Vercel',
        Icon: SiVercel,
        color: SiVercelHex,
      },
      {
        title: 'Netlify',
        Icon: SiNetlify,
        color: SiNetlifyHex,
      },

      {
        title: 'Notion',
        Icon: SiNotion,
        color: SiNotionHex,
      },
      // Additional services
      {
        title: 'Heroku',
        Icon: SiHeroku,
        color: SiHerokuHex,
      },

      {
        title: 'Google Cloud',
        Icon: SiGooglecloud,
        color: SiGooglecloudHex,
      },
      {
        title: 'Firebase',
        Icon: SiFirebase,
        color: SiFirebaseHex,
      },
      {
        title: 'Docker Hub',
        Icon: SiDocker,
        color: SiDockerHex,
      },
      {
        title: 'Slack',
        Icon: SiSlack,
        color: SiSlackHex,
      },
      {
        title: 'Discord',
        Icon: SiDiscord,
        color: SiDiscordHex,
      },
      {
        title: 'Jira',
        Icon: SiJira,
        color: SiJiraHex,
      },
      {
        title: 'Asana',
        Icon: SiAsana,
        color: SiAsanaHex,
      },
      {
        title: 'GitLab',
        Icon: SiGitlab,
        color: SiGitlabHex,
      },
      {
        title: 'CircleCI',
        Icon: SiCircleci,
        color: SiCircleciHex,
      },
      {
        title: 'Mailchimp',
        Icon: SiMailchimp,
        color: SiMailchimpHex,
      },
      {
        title: 'Zendesk',
        Icon: SiZendesk,
        color: SiZendeskHex,
      },
      {
        title: 'Zapier',
        Icon: SiZapier,
        color: SiZapierHex,
      },
      {
        title: 'Postman',
        Icon: SiPostman,
        color: SiPostmanHex,
      },
    ],
  },
]
