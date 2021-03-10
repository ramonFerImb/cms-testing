import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import { useTranslate } from "../utils/useTranslate";

export const IndexPageTemplate = ({ lang, carrousel, about }) => (
  <div>
    {carrousel.map((item) => (
      <div>
        <span>{item.title}</span>
        <span>{item.subtitle}</span>
        <img src={item.image}></img>
        <button>{item.button}</button>
      </div>
    ))}
    <span>{about.sectionTitle}</span>
    <span>{about.title}</span>
    <span>{about.content}</span>
    <button>{about.button}</button>
  </div>
);

const IndexPage = ({ data }) => {
  const { t, locale } = useTranslate();
  const filteredData = data.allMarkdownRemark.edges.find((edge) => edge.node.frontmatter.lang === locale).node.frontmatter;

  console.log(filteredData);

  return (
    <Layout>
      <IndexPageTemplate {...filteredData} />
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
            carrousel {
              image
              title
              subtitle
              button
            }
            about {
              sectionTitle
              title
              content
              button
            }
          }
        }
      }
    }
  }
`;
