import React from 'react';
import PropTypes from 'prop-types';
import { LearnPageTemplate } from '../../templates/learn-page';

const LearnPagePreview = ({ entry, widgetFor }) => (
  <LearnPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

LearnPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default LearnPagePreview;
