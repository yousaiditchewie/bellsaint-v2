import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const Gallery = ({ imageList }) => (
  <div className="columns is-multiline">
    {imageList.map(item => (
      <div key={item.altText} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '240px',
                display: 'inline-block'
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
        </section>
      </div>
    ))}
  </div>
);

Gallery.propTypes = {
  imageList: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      altText: PropTypes.string
    })
  )
};

export default Gallery;
