import React from 'react';
import PropTypes from 'prop-types';
import { LivePageTemplate } from '../../templates/live-page';

const LivePagePreview = ({ entry, widgetFor }) => (
  <LivePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

LivePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default LivePagePreview;
