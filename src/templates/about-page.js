import React from "react";
import { graphql } from "gatsby";
import { useTranslate } from "../utils/useTranslate";
import { Layout, Section, Carrousel, Card } from "./../components";

import classes from "./about.module.scss";

export const AboutPageTemplate = ({ section1, section2, section3, section4, section5, section6, section7, section8, aboutSection }) => {
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
      {section4 && (
        <Section title="apartado 4" className={classes.section4container} type="secondary">
          <div className={classes.galleryContainer}>
            {section4.images.map((gallery, i) => {
              return <img key={i} src={gallery.image} alt="imagen" />;
            })}
          </div>
        </Section>
      )}
      {section5 && (
        <Section title="apartado 5" className={classes.section5container}>
          <p>{section5.content}</p>
        </Section>
      )}
      {section6 && (
        <Section className={classes.section6container}>
          <p>{section6.title}</p>
          <div className={classes.cardsContainer}>
            {section6.cards.map((card, i) => {
              return <Card key={i} type="tertiary" {...card} />;
            })}
          </div>
        </Section>
      )}
      {section7 && (
        <Section className={classes.section7container}>
          <p>{section7.title}</p>
          <div className={classes.cardsContainer}>
            {section7.cards.map((card, i) => {
              return <Card key={i} type="tertiary" {...card} />;
            })}
          </div>
        </Section>
      )}
      {section8 && (
        <Section title="Apartado 8" className={classes.section8container}>
          <p>{section8.content}</p>
          <div className={classes.tableContainer}>
            <table>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
              <tr>
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
              </tr>
              <tr>
                <td>Island Trading</td>
                <td>Helen Bennett</td>
                <td>UK</td>
              </tr>
              <tr>
                <td>Laughing Bacchus Winecellars</td>
                <td>Yoshi Tannamuri</td>
                <td>Canada</td>
              </tr>
              <tr>
                <td>Magazzini Alimentari Riuniti</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
              </tr>
            </table>
          </div>
        </Section>
      )}
    </>
  );
};

const AboutPage = ({ data }) => {
  const { locale } = useTranslate();
  const filteredData = data.allMarkdownRemark.edges.find((edge) => edge.node.frontmatter.lang === locale).node.frontmatter;
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
            section4 {
              images {
                image
              }
            }
            section5 {
              content
            }
            section6 {
              title
              cards {
                image
                subtitle
              }
            }
            section7 {
              title
              cards {
                image
                subtitle
              }
            }
            section8 {
              content
            }
          }
        }
      }
    }
  }
`;
