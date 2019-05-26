import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import HeroImg from '../components/HeroImg';
// import SpotifyPlayer from '../components/SpotifyPlayer';

import Layout from '../components/Layout';
import { HTMLContent } from '../components/Content';

// https://open.spotify.com/track/1R8pMc6caELFwaDWoecAH3
export const IndexPageTemplate = ({ image, spotifyUrl }) => (
  <div>
    <HeroImg imageInfo={image} />
    <HTMLContent className="SpotifyPlayer" content={spotifyUrl} />
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
  const { markdownRemark } = data;
  console.log(markdownRemark.html);
  return (
    <Layout>
      <IndexPageTemplate
        image={markdownRemark.frontmatter.image}
        spofityUrl={markdownRemark.html}
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
