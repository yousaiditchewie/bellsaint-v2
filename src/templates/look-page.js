import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import '../styles/pages/look.scss';

export const LookPageTemplate = ({
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
      <PageContent className="Listen-content" content={content} />
    </section>
  );
};

LookPageTemplate.propTypes = {
  //   appleMusicUrl: PropTypes.string.isRequired,
  //   spotifyUrl: PropTypes.string.isRequired,
  //   soundcloudUrl: PropTypes.string.isRequired,
  //   youtubeUrl: PropTypes.string.isRequired,
  //   content: PropTypes.string,
  //   contentComponent: PropTypes.func
};

const LookPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const {
    appleMusicUrl,
    spotifyUrl,
    soundcloudUrl,
    youtubeUrl
  } = post.frontmatter;
  console.log(data);
  return (
    <Layout>
      <LookPageTemplate
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

LookPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default LookPage;

export const LookPageQuery = graphql`
  query LookPage($id: String!) {
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
