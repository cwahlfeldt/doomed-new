import React from 'react';
import Link from 'gatsby-link';

const IndexPage = ({ data: {wordpressPost} }) => (
  <section className={``}>
    <p>{ wordpressPost.title }</p>
  </section>
);

export default IndexPage;

export const query = graphql`
  query mypagequery {
    wordpressPost {
      title
      content
    }
  }
`;
