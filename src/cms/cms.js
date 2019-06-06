import CMS from 'netlify-cms';

import LearnPagePreview from './preview-templates/LearnPagePreview';
import ListenPagePreview from './preview-templates/ListenPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('learn', LearnPagePreview);
CMS.registerPreviewTemplate('listen', ListenPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
