import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, About, Contact, Projects, Skills } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <Skills />
    <About />
    <Contact />
  </Layout>
);
