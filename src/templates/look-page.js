import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';
import '../styles/pages/look.scss';

export const LookPageTemplate = ({ gallery }) => {
  return (
    <section className="Look">
      <Gallery imageList={gallery} />
    </section>
  );
};

LookPageTemplate.propTypes = {
  gallery: PropTypes.array
};

const LookPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <LookPageTemplate gallery={post.frontmatter.gallery} />
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
      frontmatter {
        gallery {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          altText
        }
      }
    }
  }
`;
