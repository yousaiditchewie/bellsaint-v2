import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import '../styles/pages/learn.scss';

export const LearnPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="Learn">
      <PageContent className="Learn-content" content={content} />
    </section>
  );
};

LearnPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const LearnPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <LearnPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

LearnPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default LearnPage;

export const learnPageQuery = graphql`
  query LearnPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
