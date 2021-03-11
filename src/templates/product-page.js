import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export const ProductPageTemplate = ({ title }) => <div className="content"></div>;

const ProductPage = ({ data }) => {
  return <div>Product</div>;
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ProductPage;

// export const productPageQuery = graphql`
//   query ProductPage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       frontmatter {
//         title
//       }
//     }
//   }
// `;
