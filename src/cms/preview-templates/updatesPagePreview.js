import React from "react";
import { UpdatesPageTemplate } from "../../templates/updates-page";

const UpdatesPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  console.log(data);
  return (
    <UpdatesPageTemplate
      templateKey={data.templateKey}
      id={data.id}
      data={data.data}
      carruselSection={data.carrouselSection}
      updatesSection={data.updatesSection}
    />
  );
};

export default UpdatesPagePreview;
