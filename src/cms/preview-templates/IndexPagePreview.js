import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  console.log(data);
  return (
    <IndexPageTemplate
      lang={data.lang}
      carrousel={data.carrousel}
      about={data.about}
      productsSection={data.productsSection}
      certificationsSection={data.certificationsSection}
      updatesSection={data.updatesSection}
    />
  );
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
