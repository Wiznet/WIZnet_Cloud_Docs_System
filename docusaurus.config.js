//docusaurus.config.js for Docs only Mode 

/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
  title: 'WIZnet Cloud Documentation System',
  tagline: 'Welcome to new WIZnet Cloud Documentation System!',
//   url: 'https://your-docusaurus-test-site.com',
//   url:'https://wiznetcloudtest.github.io',
//   url:'https://wiznet.github.io/WIZnet_Cloud_Docs_System',
  url:'https://doc.wiznet.io',
  baseUrl: '/',
//     baseUrl: '/WIZnet_Cloud_Docs_System/',
//   onBrokenLinks: 'throw',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
//  favicon: 'img/favicon.ico',
  favicon: 'img/wizfavicon.ico',
  organizationName: 'Wiznet', // Usually your GitHub org/user name.
  projectName: 'WIZnet_Cloud_Docs_System', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
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
      hideOnScroll: true,
//      style: 'primary', // primary || dark
//      title: 'Wiznet Cloud Documentation System !!!',
//       logo: {
//         alt: 'My Site Logo',
//         src: 'img/logo.svg',
//       },      
      logo: {
        alt: 'Wiznet Company Logo',
        src: 'img/wiznet_logo.svg',
        srcDark: 'img/wiznet_logo-white.svg',
//         position: 'right'
      },
 items: [
        {
          label: 'Useful Links',
          position: 'right', // or 'left'
          items: [
            // {
            //   label: 'HOME',
            //   to: '/',
            // },
            {
              label: 'Introduction ➤',
//               to: '/docs/intro',
//               to: 'intro',              
              to: '/',
            },
//             {
//               label: 'Products',
//               to: '/',
//             },
            {
              label: 'Cloud Page ➤',
              to: 'https://iot-solutution-landing-page.azurewebsites.net',
            },
            {
              label: 'Products Documentation ➤',
              to: 'https://docs.wiznet.io',
            },
            {
              label: 'Dashboard Page ➤',
              to: 'https://winciotdashboarddev.azurewebsites.net',
            },
            // ... more items
          ],
        },
         // {to: 'docs/introduction', label: 'INTRODUCTION TO WIZNET DOCUMENTS ➤', position: 'right'},
         // {to: 'docs/download', label: 'Download', position: 'right'},
         {href: 'https://forum.wiznet.io/', label: 'Forum', position: 'right'},
         {href: 'https://www.wiznet.io/', label: 'WIZnet', position: 'right'},

//        {to: 'blog', label: 'Blog', position: 'left'},
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
          title: 'Documents',
          items: [
            {
              label: 'Introduction',
//               to: 'docs/introduction',
              to: '/',            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'WIZnet Forum',
              href: 'https://forum.wiznet.io',
            },
            {
              label: 'WIZnet Maker',
              href: 'http://maker.wiznet.io/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            //{
            //  label: 'Blog',
            //  to: 'blog',
            //},
            {
              label: 'GitHub',
              href: 'https://github.com/Wiznet/WIZnet_Cloud_Docs_System',
            },
          //  {
          //    label: 'Twitter',
          //    href: '',
          //  },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} WIZnet Co., Ltd. Built with Docusaurus.`,
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
