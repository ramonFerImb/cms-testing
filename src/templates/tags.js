import React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

class TagRoute extends React.Component {
  render() {
    return <div></div>;
  }
}

export default TagRoute;

// export const tagPageQuery = graphql`
//   query TagPage($tag: String) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(
//       limit: 1000
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: { frontmatter: { tags: { in: [$tag] } } }
//     ) {
//       totalCount
//       edges {
//         node {
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//           }
//         }
//       }
//     }
//   }
// `
