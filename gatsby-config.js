require("dotenv").config({
  path: `.env`,
})

// require .env.development or .env.production
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
    author: "Spiros Stampoulis",
    siteUrl: "http://gatsbyv3master.gtsb.io"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    // {
    //   /* *
    //    * First up is the WordPress source plugin that connects Gatsby
    //    * to your WordPress site.
    //    *
    //    * visit the plugin docs to learn more
    //    * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
    //    *
    //    */
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     // the only required plugin option for WordPress is the GraphQL url.
    //     url: process.env.WPGRAPHQL_URL,
    //   },
    // },
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
