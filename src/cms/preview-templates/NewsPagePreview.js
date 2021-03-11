import React from "react";
import { UpdatesPageTemplate } from "../../templates/updates-page";

const NewsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  return <UpdatesPageTemplate carruselSection={data.carruselSection} updatesSection={data.updatesSection} />;
};

export default NewsPagePreview;
