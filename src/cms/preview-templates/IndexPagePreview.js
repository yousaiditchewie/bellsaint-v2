import React from 'react';
import PropTypes from 'prop-types';
import { HTMLContent } from '../../components/Content';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, widgetFor }) => {
  // const data = entry.getIn(['data']).toJS();

  // if (data) {
  return (
    <IndexPageTemplate
      contentComponent={HTMLContent}
      image={entry.getIn(['data', 'image'])}
      content={widgetFor('body')}
    />
  );
  // } else {
  // return <div>Loading...</div>;
  // }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default IndexPagePreview;
