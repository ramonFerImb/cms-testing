import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { useTranslate } from "../utils/useTranslate";
import { Layout, Section, Carrousel, Button, Card } from "./../components";

import classes from "./about.module.scss";

export const AboutPageTemplate = ({ section1, section2, section3, aboutSection }) => {
  return (
    <>
      {aboutSection && (
        <Section className={classes.carrouselContainer}>
          <Carrousel className={classes.carrousel} showArrows={true} showBullets={false}>
            {aboutSection.images.map((carrouselItem, i) => {
              return (
                <div key={i} className={classes.carrouselItem}>
                  <img src={carrouselItem.image} alt="imagen" />
                </div>
              );
            })}
          </Carrousel>
        </Section>
      )}
      {section1 && (
        <Section className={classes.preSectionParraf}>
          <h1>{section1.title}</h1>
          <h2>{section1.subtitle}</h2>
        </Section>
      )}
      {aboutSection && (
        <Section title="Apartado 1">
          <p>{aboutSection.content}</p>
        </Section>
      )}
      {section2 && (
        <Section className={classes.section2Container} type="secondary">
          <div className={classes.cardsContainer}>
            {section2.cards.map((card, i) => {
              return <Card key={i} type="highlighted" {...card} />;
            })}
          </div>
        </Section>
      )}
      {section3 && (
        <Section title="apartado 3" className={classes.section3container}>
          <p>{section3.subtitle}</p>
          <div className={classes.cardsContainer}>
            {section3.cards.map((update, i) => {
              return <Card key={i} type="long" {...update} />;
            })}
          </div>
        </Section>
      )}
    </>
  );
};

const AboutPage = ({ data }) => {
  const { t, locale } = useTranslate();
  const filteredData = data.allMarkdownRemark.edges.find((edge) => edge.node.frontmatter.lang === locale).node.frontmatter;

  // console.log(filteredData);
  return (
    <Layout selected="about">
      <AboutPageTemplate {...filteredData} />
    </Layout>
  );
};
export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage {
    allMarkdownRemark(filter: { frontmatter: { id: { eq: "about" } } }) {
      edges {
        node {
          frontmatter {
            lang
            aboutSection {
              title
              content
              button
              images {
                image
              }
            }
            section1 {
              title
              subtitle
            }
            section2 {
              cards {
                title
                subtitle
              }
            }
            section3 {
              title
              subtitle
              cards {
                image
                subtitle
              }
            }
          }
        }
      }
    }
  }
`;
