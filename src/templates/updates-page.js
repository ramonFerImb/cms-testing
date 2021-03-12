import React from "react";
import { graphql } from "gatsby";

import { useTranslate } from "../utils/useTranslate";
import { Layout, Section, Carrousel, Button, Card } from "./../components";

import classes from "./updates.module.scss";

export const UpdatesPageTemplate = ({ carruselSection, updatesSection }) => (
  <>
    {carruselSection && (
      <Section className={classes.carrouselContainer}>
        <Card title="Noticia destacada" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit." type="secondary">
          <Carrousel className={classes.carrousel} showArrows={true} showBullets={false}>
            {carruselSection.images.map((carrouselItem, i) => {
              return (
                <div key={i} className={classes.carrouselItem}>
                  <img src={carrouselItem.image} />
                </div>
              );
            })}
          </Carrousel>
        </Card>
      </Section>
    )}
    {updatesSection && (
      <>
        <Section className={classes.preSectionParraf} solidBg="solid">
          <h1>Título de la página de noticias</h1>
          <h2>Subtitulo Título de la página de noticias</h2>
          <p>{updatesSection.data}</p>
        </Section>
        <Section title={updatesSection.sectionTitle} solidBg="solid">
          {updatesSection.updates.map((update) => {
            const props = { ...update };
            props.button = {
              text: update.button,
              action: () => {
                console.log(update);
              },
            };
            return <Card className={classes.card} type="long" {...props} />;
          })}
        </Section>
      </>
    )}
  </>
);

const UpdatePage = ({ data }) => {
  const { t, locale } = useTranslate();
  const filteredData = data.allMarkdownRemark.edges.find((edge) => edge.node.frontmatter.lang === locale).node.frontmatter;

  return (
    <Layout selected="updates">
      <UpdatesPageTemplate {...filteredData} />
    </Layout>
  );
};

export default UpdatePage;

export const pageQuery = graphql`
  query UpdatesPageTemplate {
    allMarkdownRemark(filter: { frontmatter: { id: { eq: "updates" } } }) {
      edges {
        node {
          frontmatter {
            title
            lang
            carruselSection {
              title
              subtitle
              images {
                image
              }
            }
            updatesSection {
              data
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
