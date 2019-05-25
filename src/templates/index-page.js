import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import HeroImg from '../components/HeroImg';
import SpotifyPlayer from '../components/SpotifyPlayer';

import Layout from '../components/Layout';

// https://open.spotify.com/track/1R8pMc6caELFwaDWoecAH3
export const IndexPageTemplate = ({ image, spotifyUrl }) => (
  <div>
    <HeroImg imageInfo={image} />
    <SpotifyPlayer spotifyUrl={spotifyUrl} />
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  spotifyUrl: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        spofityId={frontmatter.spotifyUrl}
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
      frontmatter {
        title
        spotifyUrl
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
