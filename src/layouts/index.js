import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import '../assets/tachyons/css/tachyons.min.css';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './index.css';
import '../assets/index.css';

const TemplateWrapper = ({ children }) => (
  <section className="template-wrap">
    <Helmet>
      <title>Doomed</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      <link href="https://fonts.googleapis.com/css?family=UnifrakturCook:700" rel="stylesheet" />
    </Helmet>
    <Nav />
    <main>
      { children() }
    </main>
    <Footer />
  </section>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
