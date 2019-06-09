import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Show from '../components/Show';
import '../styles/pages/live.scss';

export const LivePageTemplate = ({ shows }) => {
  return (
    <section className="Live">
      <div className="Live-shows">
        {shows.map(show => (
          <Show
            key={show.date.replace(',', '').replace(' ', '_')}
            show={show}
          />
        ))}
      </div>
    </section>
  );
};

LivePageTemplate.propTypes = {
  shows: PropTypes.array
};

const LivePage = ({ data }) => {
  const { shows } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <LivePageTemplate shows={shows} />
    </Layout>
  );
};

LivePage.propTypes = {
  data: PropTypes.object.isRequired
};

export default LivePage;

export const LivePageQuery = graphql`
  query LivePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        shows {
          venue
          cityState
          date
          buttons {
            text
            url
          }
        }
      }
    }
  }
`;
