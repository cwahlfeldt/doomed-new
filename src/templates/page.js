import React, { Component } from "react"
import PropTypes from "prop-types"

class PageTemplate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="page-template">
        this is page
      </section>
    );
  };
}

export default PageTemplate;

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

/*
export const query = graphql`
  query currentPageQuery($id: String = "0b80e4e9-712a-5853-b8bf-0c8b65c8eab4") {
    wordpressPage(id: {eq: $id}) {
      id
      title
      content
      date(formatString: "MMMM DD, YYYY")
      acf {
        page_type
        archive_page {
          __typename
          ... on WordPressAcf_products {
            products {
              post_title
            }
          }
        }
        about_page {
          __typename
          ... on WordPressAcf_call_to_action {
            id
            text
            link
            customize_style
            style {
              foreground_color
              background_color
              background_image
            }
          }
        }
        landing_page {
          __typename
          ... on WordPressAcf_call_to_action {
            id
            text
            link
            customize_style
            style {
              foreground_color
              background_color
              background_image
            }
          }
        }
        dynamic_layouts_page {
          __typename
          ... on WordPressAcf_call_to_action {
            id
            text
            link
            customize_style
            style {
              foreground_color
              background_color
              background_image
            }
          }
        }
      }
    }
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`;
*/
