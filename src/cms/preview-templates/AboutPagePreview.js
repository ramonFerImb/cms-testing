import React from "react";
import { AboutPageTemplate } from "../../templates/about-page";

const AboutPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  return (
    <AboutPageTemplate
    // templateKey={data.templateKey}
    // id={data.id}
    // data={data.data}
    // carruselSection={data.carrouselSection}
    // updatesSection={data.updatesSection}
    />
  );
};

export default AboutPagePreview;
