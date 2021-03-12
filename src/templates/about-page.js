import React from "react";
import { graphql } from "gatsby";
import { useTranslate } from "../utils/useTranslate";
import { Layout, Section, Carrousel, Card, Button } from "./../components";

import classes from "./about.module.scss";

export const AboutPageTemplate = ({ section1, section2, section3, section4, section5, section6, section7, section8, aboutSection }) => {
  return (
    <>
      {aboutSection && (
        <>
          <Section className={classes.carrouselContainer}>
            <Carrousel className={classes.carrousel} showArrows={true} showBullets={true}>
              {aboutSection.images &&
                aboutSection.images.map((carrouselItem, i) => {
                  return (
                    <div key={i} className={classes.carrouselItem}>
                      <img src={carrouselItem.image} />
                      <div className={classes.containerData}>
                        <span className={classes.title}>{carrouselItem.title}</span>
                        <span className={classes.subtitle}>{carrouselItem.subtitle}</span>
                        <Button type="secondary">{carrouselItem.button}</Button>
                      </div>
                    </div>
                  );
                })}
            </Carrousel>
          </Section>
          <Section className={classes.preSectionParraf}>
            <h1>{aboutSection.title}</h1>
            <h2>{aboutSection.content}</h2>
          </Section>
        </>
      )}
      {section1 && (
        <Section title={section1.title}>
          <p>{section1.content}</p>
        </Section>
      )}
      {section2 && (
        <Section className={classes.section2Container} type="secondary">
          <div className={classes.cardsContainer}>
            {section2.cards &&
              section2.cards.map((card, i) => {
                return <Card key={i} type="highlighted" {...card} />;
              })}
          </div>
        </Section>
      )}
      {section3 && (
        <Section title={section3.title} className={classes.section3container}>
          <p>{section3.subtitle}</p>
          <div className={classes.cardsContainer}>
            {section3.cards &&
              section3.cards.map((update, i) => {
                return <Card key={i} type="long" {...update} />;
              })}
          </div>
        </Section>
      )}
      {section4 && (
        <Section title={section4.title} className={classes.section4container} type="secondary">
          <div className={classes.galleryContainer}>
            {section4.images &&
              section4.images.map((gallery, i) => {
                return <img key={i} src={gallery.image} alt="imagen" />;
              })}
          </div>
        </Section>
      )}
      {section5 && (
        <Section title={section5.title} title="apartado 5" className={classes.section5container}>
          <p>{section5.content}</p>
        </Section>
      )}
      {section6 && (
        <Section title={section6.title} className={classes.section6container}>
          <p>{section6.title}</p>
          <div className={classes.cardsContainer}>
            {section6.cards &&
              section6.cards.map((card, i) => {
                return <Card key={i} type="tertiary" {...card} />;
              })}
          </div>
        </Section>
      )}
      {section7 && (
        <Section title={section7.title} className={classes.section7container}>
          <p>{section7.title}</p>
          <div className={classes.cardsContainer}>
            {section7.cards &&
              section7.cards.map((card, i) => {
                return <Card key={i} type="tertiary" {...card} />;
              })}
          </div>
        </Section>
      )}
      {section8 && (
        <Section title={section8.title} className={classes.section8container}>
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
              subtitle
              images {
                image
                title
                subtitle
                button
              }
            }
            section1 {
              title
              content
            }
            section2 {
              title
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
              title
              images {
                image
              }
            }
            section5 {
              title
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
              title
              content
            }
          }
        }
      }
    }
  }
`;
