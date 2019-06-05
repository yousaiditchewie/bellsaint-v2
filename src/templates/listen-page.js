import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import '../styles/pages/learn.scss';

export const ListenPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <section className="Learn">
              <PageContent className="content" content={content} />
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

ListenPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const ListenPage = ({ data }) => {
  const { markdownRemark: post } = data;
  console.log(data);
  return (
    <Layout>
      <ListenPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
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
