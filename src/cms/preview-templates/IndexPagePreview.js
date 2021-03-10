import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = (props, { entry, getAsset }) => {
  const carrousel = entry.getIn(["data", "carrousel"]).toJS();
  const about = entry.getIn(["data", "about"]).toJS();
  const lang = entry.getIn(["data", "lang"]).toJS();
  console.log(props);

  return <div>This is a test</div>;
  // return <IndexPageTemplate lang={lang} carrousel={carrousel || []} carrousel={about} />;
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
