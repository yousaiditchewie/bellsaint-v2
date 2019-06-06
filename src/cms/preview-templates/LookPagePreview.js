import React from 'react';
import PropTypes from 'prop-types';
import { LookPageTemplate } from '../../templates/look-page';

const LookPagePreview = ({ entry, widgetFor }) => (
  <LookPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

LookPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default LookPagePreview;
