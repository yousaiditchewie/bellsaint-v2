import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Gallery.scss';

const Gallery = ({ imageList }) => (
  <div className="Gallery">
    {imageList.map(item => (
      <div
        key={item.altText.replace(' ', '_')}
        className="Gallery-thumbnail"
        style={{
          backgroundImage: `url(.${item.image.childImageSharp.fluid.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        onClick={handleClick}
      >
        <div className="Gallery-thumbnailFrame" />
      </div>
    ))}
  </div>
);

const handleClick = click => {
  toggleActiveClass(locateThumbnailElement(click.target));
};

const locateThumbnailElement = element => {
  if (!element.classList.contains('Gallery-thumbnail')) {
    return locateThumbnailElement(element.parentElement);
  }

  return element;
};

const toggleActiveClass = element => {
  return element.classList.contains('is-active')
    ? element.classList.remove('is-active')
    : element.classList.add('is-active');
};

Gallery.propTypes = {
  imageList: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      altText: PropTypes.string
    })
  )
};

export default Gallery;
