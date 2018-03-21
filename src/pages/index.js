import React from 'react'
import Link from 'gatsby-link'
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const pageQuery = gql`
  query pageQuery {
     posts {
      edges {
        node {
          id
          title
          uri
          content
        }
      }
    }
  }
`;

const IndexPage = ({ data: {wordpressPost} }) => (
  <div>
  <Query query={pageQuery}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :(</div>;

      return (
        <div>
          <p>{ data.posts.edges[0].node.title }</p>
        </div>
      )
    }}
  </Query>
    <p>{ wordpressPost.title }</p>
  </div>
)

export default IndexPage

export const query = graphql`
  query mypagequery {
    wordpressPost {
      title
      content
    }
  }
`;
