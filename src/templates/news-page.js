import React from "react";
import { Carrousel, Layout, Section, Card } from "./../components";
import { useTranslate } from "../utils/useTranslate";

import classes from "./news.module.scss";

export const NewsPageTemplate = ({ html }) => (
  <div className={classes.container}>
    <Carrousel showArrows showBullets>
      {[
        <div>
          <img src="/img/Imagen-1.png"></img>
        </div>,
        <div>
          <img src="/img/Imagen-1.png"></img>
        </div>,
      ]}
    </Carrousel>
    <div className={classes.containerInfo}>
      <div className={classes.html} dangerouslySetInnerHTML={{ __html: html }}></div>
      <div className={classes.imagesContainer}>
        <div className={classes.title}>Detalles del producto</div>
        <div className={classes.imagesRow}>
          <img src="/img/Imagen-1.png"></img>
          <img src="/img/Imagen-1.png"></img>
          <img src="/img/Imagen-1.png"></img>
          <img src="/img/Imagen-1.png"></img>
        </div>
        <div className={classes.info}>
          <div className={classes.images}>
            <img src="/img/Imagen-1.png"></img>
            <div className={classes.imagesPair}>
              <img src="/img/Imagen-1.png"></img>
              <img src="/img/Imagen-1.png"></img>
            </div>
          </div>
          <div className={classes.text}>
            <div className={classes.title}>Fotos de galería de producto</div>
            <div className={classes.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint Occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
        <Section className={classes.sectionRelated} title="Noticias relacionadas">
          <div>
            <Card className={classes.card} type="long" image="/img/Imagen-1.png" subtitle="Título de una noticia en cajita más pequeña"></Card>
            <Card className={classes.card} type="long" image="/img/Imagen-1.png" subtitle="Título de una noticia en cajita más pequeña"></Card>
            <Card className={classes.card} type="long" image="/img/Imagen-1.png" subtitle="Título de una noticia en cajita más pequeña"></Card>
            <Card className={classes.card} type="long" image="/img/Imagen-1.png" subtitle="Título de una noticia en cajita más pequeña"></Card>
            <Card className={classes.card} type="long" image="/img/Imagen-1.png" subtitle="Título de una noticia en cajita más pequeña"></Card>
          </div>
        </Section>
      </div>
    </div>
  </div>
);

const NewsPage = ({ data }) => {
  const { locale } = useTranslate();
  const node = data.allMarkdownRemark.edges.find((edge) => edge.node.frontmatter.lang === locale)?.node;
  return (
    <Layout selected="updates">
      <NewsPageTemplate {...node} />
    </Layout>
  );
};

export default NewsPage;

export const pageQuery = graphql`
  query NewsPageTemplate {
    allMarkdownRemark(filter: { frontmatter: { id: { eq: "new" } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            lang
          }
        }
      }
    }
  }
`;
