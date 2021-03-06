//docusaurus.config.js for Docs only Mode 

/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
  title: 'WIZnet Cloud Documentation System',
  tagline: 'Welcome to new WIZnet Cloud Documentation System !',
//   url: 'https://your-docusaurus-test-site.com',
//   url:'https://wiznetcloudtest.github.io',
//   url:'https://wiznet.github.io/WIZnet_Cloud_Docs_System',
  url:'https://docs.wizcloud.io',
  baseUrl: '/',
//     baseUrl: '/WIZnet_Cloud_Docs_System/',
//   onBrokenLinks: 'throw',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
//  favicon: 'img/favicon.ico',
  favicon: 'img/wizfavicon.ico',
  organizationName: 'WIZnet Co., Ltd.', // Usually your GitHub org/user name.
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
//      hideOnScroll: true,
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
          label: 'WIZnet Cloud',
          position: 'right', // or 'left'
          items: [
            // {
            //   label: 'HOME',
            //   to: '/',
            // },
//            {
//              label: 'Introduction ➤',
//               to: '/docs/intro',
//               to: 'intro',              
//              to: '/',
//            },
//             {
//               label: 'Products',
//               to: '/',
//             },
            {
              label: 'WIZnet Cloud ➤',
              to: 'https://cloud.wiznet.io',
            },
            {
              label: 'Dashboard site ➤',
              to: 'https://dashboard.wizcloud.io',
            },
            {
              label: 'Partner site ➤',
              to: 'https://manufacturer.wizcloud.io',
            },
            {
              label: 'WIZnet Products ➤',
              to: 'https://docs.wiznet.io',
            },
            // ... more items
          ],
        },
         // {to: 'docs/introduction', label: 'INTRODUCTION TO WIZNET DOCUMENTS ➤', position: 'right'},
         // {to: 'docs/download', label: 'Download', position: 'right'},
         {href: 'https://forum.wiznet.io/c/wiznet-cloud/195', label: 'Forum', position: 'right'},
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
          routeBasePath: '/', /////////////////////////////////used in docs only mode
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
        //////////////////////////////////////////////////////////////////////////////////////////// AS OF 26-05-2021 2.0.0-beta.0 this is not working !
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
