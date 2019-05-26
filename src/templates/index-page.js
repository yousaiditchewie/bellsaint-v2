import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import HeroImg from '../components/HeroImg';
// import SpotifyPlayer from '../components/SpotifyPlayer';

import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

// https://open.spotify.com/track/1R8pMc6caELFwaDWoecAH3
export const IndexPageTemplate = ({ image, content, contentComponent }) => {
  const PostContent = contentComponent || Content;
  return (
    <div>
      <HeroImg imageInfo={image} />
      <PostContent className="SpotifyPlayer" content={content} />
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { markdownRemark } = data;
  console.log(markdownRemark.html);
  return (
    <Layout>
      <IndexPageTemplate
        contentComponent={HTMLContent}
        image={markdownRemark.frontmatter.image}
        content={markdownRemark.html}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
