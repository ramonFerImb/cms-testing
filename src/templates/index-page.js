import React from "react";
import { graphql } from "gatsby";

import { useTranslate } from "../utils/useTranslate";
import { Layout, Section, Carrousel, Button, Card } from "./../components";

import classes from "./index.module.scss";

export const IndexPageTemplate = ({ lang, carrousel, about, productsSection, certificationsSection, updatesSection }) => (
  <>
    {carrousel && (
      <Section className={classes.carrouselContainer}>
        <Carrousel showArrows={true} showBullets={true}>
          {carrousel.map((carrouselItem, i) => {
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
    )}
    {about && (
      <Section title={about.sectionTitle} className={classes.aboutUsContainer}>
        <div className={classes.aboutCard}>
          <div className={classes.aboutContent}>
            <div className={classes.title}>{about.title}</div>
            <div className={classes.content}>{about.description}</div>
            <Button type="primary">{about.button}</Button>
          </div>
          <img src={about.image} />
        </div>
      </Section>
    )}
    {productsSection && (
      <Section className={classes.productsContainer} title={productsSection.sectionTitle} type="secondary">
        <div className={classes.cardsContainer}>
          {productsSection.products.map((product) => {
            return <Card type="secondary" {...product} />;
          })}
        </div>
      </Section>
    )}
    {certificationsSection && (
      <Section className={classes.certificationContainer} image={certificationsSection.bgImage} title={certificationsSection.sectionTitle}>
        <div className={classes.cardsContainer}>
          {certificationsSection.certifications.map((certification, i) => {
            return <Card key={i} type="tertiary" {...certification} />;
          })}
        </div>
      </Section>
    )}
    {updatesSection && (
      <Section title={updatesSection.sectionTitle} className={classes.newsContainer} type="secondary">
        <div className={classes.containerCards}>
          {updatesSection.updates.map((update) => {
            const props = { ...update };
            props.button = {
              text: update.button,
              action: () => {},
            };
            return <Card className={classes.card} type="primary" {...props} />;
          })}
        </div>
      </Section>
    )}
  </>
);

const IndexPage = ({ data }) => {
  const { t, locale } = useTranslate();
  const filteredData = data.allMarkdownRemark.edges.find((edge) => edge.node.frontmatter.lang === locale).node.frontmatter;

  // console.log(filteredData);

  return (
    <Layout selected="home">
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
              image
              sectionTitle
              title
              description
              button
            }
            productsSection {
              sectionTitle
              products {
                image
                title
                subtitle
              }
            }
            certificationsSection {
              sectionTitle
              certifications {
                image
                title
                subtitle
              }
            }
            updatesSection {
              sectionTitle
              updates {
                image
                title
                date
                button
                subtitle
              }
            }
          }
        }
      }
    }
  }
`;
