/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'WIZnet Cloud Documentation System',
  tagline: 'Welcome to new WIZnet Cloud Documentation System!',
//   url: 'https://your-docusaurus-test-site.com',
//   url:'https://wiznetcloudtest.github.io',
    url:'https://wiznet.github.io/WIZnet_Cloud_Docs_System',
//   baseUrl: '/',
//     baseUrl: '/WIZnet_Cloud_Docs_System/',
      baseUrl: '/WIZnet_Cloud_Docs_System/',
//   onBrokenLinks: 'throw',
    onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/wizfavicon.ico',
  organizationName: 'Wiznet', // Usually your GitHub org/user name.
  projectName: 'WIZnet_Cloud_Docs_System', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
      switchConfig: {
        darkIcon: '\u{26c8}',
        lightIcon: '\u{1f324}',
      },
    },    
    navbar: {
      //title: 'Wiznet Cloud Documentation System !!!',
      logo: {
        alt: 'Wiznet Logo',
        src: 'img/wiznet_logo.svg',
        srcDark: 'img/wiznet_logo-white.svg',
      },
//       logo: {
//         alt: 'Wiznet Logo',
//         src: 'img/logo.svg',
//       },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'right',
          label: 'Tutorial',
          items:[
            {
              label : 'drop1',
              to: '/docs/intro',
            },
        ],
       },
        {to: '/blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/Wiznet/WIZnet_Cloud_Docs_System',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documents',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  plugins: ['./PreventTrailingSlash/PreventTrailingSlashPlugin'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
//         sitemap:{
//         trailingSlash: false
//         },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
