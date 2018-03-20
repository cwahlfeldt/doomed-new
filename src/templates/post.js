import React from "react";
import PropTypes from "prop-types";

const PostTemplate = ({ data: { wordpressPost } }) => (
  <section className="w-100 h-100">
    <main
      className="content"
      dangerouslySetInnerHTML={{ __html: wordpressPost.content }}>
    </main>
  </section>
);

export default PostTemplate;

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
};

export const query = graphql`
  query currentProductQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
  }
`;
