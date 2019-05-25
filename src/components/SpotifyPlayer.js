import React from 'react';

const SpotifyPlayer = ({ spotifyUrl }) => {
  const iframe = `<iframe
      src="https://open.spotify.com/track/1R8pMc6caELFwaDWoecAH3"
      width="300"
      height="80"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
      title="Spotify Player"
    />`;

  console.log('spotify URL: ', spotifyUrl);
  return (
    <div
      className="SpotifyPlayer"
      dangerouslySetInnerHTML={{ __html: iframe }}
    />
  );
};

export default SpotifyPlayer;
