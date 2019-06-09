import CMS from 'netlify-cms';

import LearnPagePreview from './preview-templates/LearnPagePreview';
import ListenPagePreview from './preview-templates/ListenPagePreview';
import LookPagePreview from './preview-templates/LookPagePreview';
import LivePagePreview from './preview-templates/LivePagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('learn', LearnPagePreview);
CMS.registerPreviewTemplate('listen', ListenPagePreview);
CMS.registerPreviewTemplate('look', LookPagePreview);
CMS.registerPreviewTemplate('live', LivePagePreview);
