import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '../assets/tachyons/css/tachyons.min.css';

import Nav from '../components/Nav'
import './index.css'

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({ uri: 'http://dev-doomed.pantheonsite.io/graphql' });

const TemplateWrapper = ({ children }) => (
  <ApolloProvider client={client}>
    <section className="template-wrap">
      <Helmet>
        <title>Doomed</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Helmet>
      <Nav />
      <main>
        { children() }
      </main>
    </section>
  </ApolloProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
