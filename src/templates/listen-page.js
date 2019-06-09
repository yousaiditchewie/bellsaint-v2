import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import '../styles/pages/listen.scss';

export const ListenPageTemplate = ({
  content,
  contentComponent,
  appleMusicUrl,
  spotifyUrl,
  soundcloudUrl,
  youtubeUrl
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="Listen">
      <div className="Listen-links">
        <a
          href={appleMusicUrl}
          className="Listen-link Listen-link--appleMusic"
          target="_blank"
          rel="noopener noreferrer"
        >
          APPLE MUSIC
        </a>
        <a
          href={spotifyUrl}
          className="Listen-link Listen-link--spotify"
          target="_blank"
          rel="noopener noreferrer"
        >
          SPOTIFY
        </a>
        <a
          href={youtubeUrl}
          className="Listen-link Listen-link--youtube"
          target="_blank"
          rel="noopener noreferrer"
        >
          YOUTUBE
        </a>
        <a
          href={soundcloudUrl}
          className="Listen-link Listen-link--soundcloud"
          target="_blank"
          rel="noopener noreferrer"
        >
          SOUNDCLOUD
        </a>
      </div>
      <PageContent className="Listen-content" content={content} />
    </section>
  );
};

ListenPageTemplate.propTypes = {
  appleMusicUrl: PropTypes.string.isRequired,
  spotifyUrl: PropTypes.string.isRequired,
  soundcloudUrl: PropTypes.string.isRequired,
  youtubeUrl: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const ListenPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const {
    appleMusicUrl,
    spotifyUrl,
    soundcloudUrl,
    youtubeUrl
  } = post.frontmatter;
  return (
    <Layout>
      <ListenPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
        appleMusicUrl={appleMusicUrl}
        spotifyUrl={spotifyUrl}
        soundcloudUrl={soundcloudUrl}
        youtubeUrl={youtubeUrl}
      />
    </Layout>
  );
};

ListenPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ListenPage;

export const ListenPageQuery = graphql`
  query ListenPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        appleMusicUrl
        spotifyUrl
        soundcloudUrl
        youtubeUrl
      }
    }
  }
`;
