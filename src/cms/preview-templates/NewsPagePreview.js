import React from "react";
import { NewsPageTemplate } from "../../templates/news-page";

const NewsPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();
  return <NewsPageTemplate html={widgetFor("body")} />;
};

export default NewsPagePreview;
