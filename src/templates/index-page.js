import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import { useTranslate } from "../utils/useTranslate";

export const IndexPageTemplate = ({ data }) => <div>{data.lang}</div>;

const IndexPage = ({ data }) => {
  const { t, locale } = useTranslate();
  const filteredData = data.allMarkdownRemark.edges.find((edge) => edge.node.frontmatter.lang === locale).node.frontmatter;

  console.log(filteredData);

  return (
    <Layout>
      <IndexPageTemplate data={filteredData} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    allMarkdownRemark(filter: { frontmatter: { id: { eq: "home" } } }) {
      edges {
        node {
          frontmatter {
            lang
          }
        }
      }
    }
  }
`;
