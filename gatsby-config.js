//
// gatsby config file

const postCSSCustomProperties = require('postcss-custom-properties');

const wpPlugin = {
  resolve: "gatsby-source-wordpress",
  options: {
    baseUrl: "dev-doomed.pantheonsite.io",
    protocol: "http",
    useACF: true,
    hostingWPCOM: false,
    verboseOutput: true,
    searchAndReplaceContentUrls: {
      sourceUrl: "http://dev-doomed.pantheonsite.io",
      replacementUrl: "http://dev-doomed.pantheonsite.io",
    },
  },
};

const postcss = {
  resolve: `gatsby-plugin-postcss-sass`,
  options: {
    postCssPlugins: [
      postCSSCustomProperties({
        variables: {}
      })
    ],
  },
};

module.exports = {
  siteMetadata: {
    title: 'Doomed',
  },
  plugins: [
    wpPlugin,
    postcss,
    'gatsby-plugin-react-helmet',
  ],
};

