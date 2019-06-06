import React from 'react';
import PropTypes from 'prop-types';
import { ListenPageTemplate } from '../../templates/listen-page';

const ListenPagePreview = ({ entry, widgetFor }) => (
  <ListenPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

ListenPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ListenPagePreview;
