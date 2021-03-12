import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import IndexPagePreview from "./preview-templates/IndexPagePreview";
import UpdatesPagePreview from "./preview-templates/UpdatesPagePreview";
import AboutPagePreview from "./preview-templates/AboutPagePreview";
import NewsPagePreview from "./preview-templates/NewsPagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("updates", UpdatesPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("news", NewsPagePreview);
// CMS.registerPreviewTemplate("updates", UpdatesPagePreview);
// CMS.registerPreviewTemplate('about', AboutPagePreview)
// CMS.registerPreviewTemplate('products', ProductPagePreview)
// CMS.registerPreviewTemplate('blog', BlogPostPreview)
