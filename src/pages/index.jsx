import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Head from '../components/Head';
import Home from '../components/home/index';
import SidePanel from '../components/side-panel/index';

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
