import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ReactGA from 'react-ga';

import Head from '../components/Head';
import Home from '../components/home/index';
import SidePanel from '../components/side-panel/index';

// Init Google Analytics here
// TODO: Find a better place to initialize
ReactGA.initialize('UA-126770080-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const IndexPage = () => (
  <div>
    <Head />
    <Grid fluid>
      <Row>
        <Col lg={6} style={{ float: 'left' }}>
          <Home />
        </Col>
        <Col lg={6}>
          <SidePanel />
        </Col>
      </Row>
    </Grid>
  </div>
);

export default IndexPage;
