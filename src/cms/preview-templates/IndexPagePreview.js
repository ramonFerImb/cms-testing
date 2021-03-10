import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  console.log(data);
  return (
    <IndexPageTemplate
      lang={entry.getIn(["data", "lang"])}
      carrousel={entry.getIn(["data", "carrousel"]) || []}
      about={entry.getIn(["data", "about"])}
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
