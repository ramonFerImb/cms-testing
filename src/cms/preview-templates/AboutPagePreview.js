import React from "react";
import { AboutPageTemplate } from "../../templates/about-page";

const AboutPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  return (
    <AboutPageTemplate
      section1={data.section1}
      section2={data.section2}
      section3={data.section3}
      section4={data.section4}
      section5={data.section5}
      section6={data.section6}
      section7={data.section7}
      section8={data.section8}
    />
  );
};

export default AboutPagePreview;
