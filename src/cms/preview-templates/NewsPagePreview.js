import React from "react";
import { UpdatesPageTemplate } from "../../templates/updates-page";

const NewsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  return (
    <UpdatesPageTemplate
    // lang={data.lang}
    // carrousel={data.carrousel}
    // about={data.about}
    // productsSection={data.productsSection}
    // certificationsSection={data.certificationsSection}
    // updatesSection={data.updatesSection}
    />
  );
};

export default NewsPagePreview;
