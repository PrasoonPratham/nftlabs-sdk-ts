const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  // Site basic config.
  title: "Thirdweb TypeScript SDK",
  tagline: "Documentation and Guides for the Thirdweb TypeScript SDK.",

  // URL Config.
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Favicon.
  favicon: "img/favicon.ico",

  // Github organization.
  organizationName: "nftlabs",
  projectName: "nftlabs-sdk-ts",

  // Presets.
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // TODO: Change this.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        blog: {
          showReadingTime: true,
          // TODO: Change this.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },

        // Custom CSS location.
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  // Configuration for the theme.
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Thirdweb TypeScript SDK",
        logo: {
          alt: "Thirdweb logo",
          src: "img/logo.svg"
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial"
          },
          {
            to: "docs/api/",
            activeBasePath: "docs",
            label: "API",
            position: "left"
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/nftlabs/nftlabs-sdk-ts",
            label: "GitHub",
            position: "right"
          }
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro"
              }
            ]
          },
          {
            title: "Community",
            items: [
              {
                label: "Thirdweb",
                href: "https://thirdweb.com"
              },
              {
                label: "Discord",
                // TODO: Change this.
                href: "https://discordapp.com/invite/docusaurus"
              },
              {
                label: "Twitter",
                href: "https://twitter.com/thirdweb_"
              }
            ]
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog"
              },
              {
                label: "GitHub",
                href: "https://github.com/nftlabs/nftlabs-sdk-ts"
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Thirdweb, Inc. Built with Docusaurus.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    }),

  // Plugins.
  plugins: [
    [
      "docusaurus-plugin-typedoc",

      // Plugin / TypeDoc options
      {
        entryPoints: ["../src/index.ts"],
        tsconfig: "../tsconfig.json",
      },
    ],
  ],
};

module.exports = config;
