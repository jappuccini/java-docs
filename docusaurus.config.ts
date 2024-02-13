import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Programmieren mit Java',
  tagline: '',
  favicon: 'img/favicon.ico',
  url: process.env.URL || 'https://jappuccini.github.io',
  baseUrl: process.env.BASE_URL || '/java-docs/',
  organizationName: 'jappuccini',
  projectName: 'java-docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/jappuccini/java-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./node_modules/reveal.js/dist/reveal.css'),
            require.resolve('./node_modules/reveal.js/dist/theme/black.css'),
            require.resolve(
              './node_modules/reveal.js/plugin/highlight/monokai.css',
            ),
            require.resolve('./src/css/custom.css'),
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    mermaid: {
      theme: {
        light: 'default',
        dark: 'dark',
      },
    },
    navbar: {
      title: 'Startseite',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'documentation/introduction',
          position: 'left',
          label: 'Dokumentation',
        },
        {
          type: 'doc',
          docId: 'exercises/coding/coding',
          position: 'left',
          label: 'Übungsaufgaben',
        },
        {
          type: 'doc',
          docId: 'exam-exercises/exam-exercises-java1/exam-exercises-java1',
          position: 'left',
          label: 'Klausuraufgaben',
        },
        {
          type: 'doc',
          docId: 'additional-material/daniel/sample-exam-java1',
          position: 'left',
          label: 'Zusatzmaterial',
        },
        {
          href: 'https://github.com/jappuccini/java-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Daniel Appenmaier & Steffen Merk Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
