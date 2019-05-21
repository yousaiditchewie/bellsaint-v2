import React from 'react';

const SocialLinks = class extends React.Component {
  render() {
    return (
      <div className='SocialLinks'>
        <span className='SocialLinks-label'>Social</span>
        <a
          className='SocialLinks-link SocialLinks-link--facebook'
          href='https://www.facebook.com/BELLSAINTmusic/'
          target='_blank'
          title='Facebook'
          name='Facebook'
          rel='noopener noreferrer'
        >
          <span className='dot' />
          <span className='for-screen-reader'>Facebook</span>
        </a>
        <a
          className='SocialLinks-link SocialLinks-link--instagram'
          href='https://www.instagram.com/bellsaintmusic'
          target='_blank'
          title='Instagram'
          name='Instagram'
          rel='noopener noreferrer'
        >
          <span className='dot' />
          <span className='for-screen-reader'>Instagram</span>
        </a>
        <a
          className='SocialLinks-link SocialLinks-link--twitter'
          href='https://www.twitter.com/BELLSAINTmusic'
          target='_blank'
          title='Twitter'
          name='Twitter'
          rel='noopener noreferrer'
        >
          <span className='dot' />
          <span className='for-screen-reader'>Twitter</span>
        </a>
      </div>
    );
  }
};

export default SocialLinks;
