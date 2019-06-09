import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Show.scss';

const Show = ({ show }) => (
  <div className="Show">
    <div className="Show-border">
      <div className="Show-left">
        <div className="Show-venue">{show.venue}</div>
        <div className="Show-date">{show.date}</div>
      </div>
      <div className="Show-right">
        <div className="Show-cityState">{show.cityState}</div>
        <div className="Show-buttonsWrapper">
          {show.buttons &&
            show.buttons.map((button, index) => (
              <a
                key={index}
                className="Show-button"
                href={button.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                {button.text.toUpperCase()}
              </a>
            ))}
        </div>
      </div>
    </div>
  </div>
);

Show.propTypes = {
  show: PropTypes.shape({
    venue: PropTypes.string,
    cityState: PropTypes.string,
    date: PropTypes.string,
    buttons: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        url: PropTypes.string
      })
    )
  })
};

export default Show;
