import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Gallery.scss';

const GalleryThumbnail = ({ item, idx }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = click => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`Gallery-image ${isActive ? 'is-active' : ''}`}
      onClick={handleClick}
    >
      <div
        id={`gallery-image-${idx + 1}`}
        key={idx}
        className={`Gallery-thumbnail ${isActive ? 'is-active' : ''}`}
        style={{
          backgroundImage: `url(.${item.image.childImageSharp.fluid.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="Gallery-thumbnailFrame" />
      </div>
    </div>
  );
};

const Gallery = ({ imageList }) => (
  <div className="Gallery">
    {imageList.map((item, idx) => (
      <GalleryThumbnail key={idx} item={item} idx={idx} />
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
