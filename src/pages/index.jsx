import Anime from 'react-anime';
import React, { Component } from 'react';

import Container from '../components/Container';
import Content from '../components/Content';
import { Head } from '../utils/index';

export default class Index extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Download assets from S3 bucket
  }

  render() {
    return (
      <Container className="application">
        <Head />
        <Anime
          easing="easeOutElastic"
          duration={3000}
          direction="alternate"
          loop
          delay={(el, index) => index * 240}
          // translateX="13rem"
          scale={[0.75, 0.9]}
        >
          <h1>Logo</h1>
        </Anime>
        <Content>
          <h3 style={{ fontSize: '3.6rem', margin: '5.5rem 0 0 0' }}>Placeholder logos for the lazy developer.</h3>
          <p style={{ fontSize: '2.4rem', fontWeight: 400, margin: '11rem 0 1.8rem 0' }}>
Logos for the times you need a professional logo to work with but don&apos;t
            {' '}
have the real thing yet.
          </p>
          <button
            style={{
              border: 'none', borderRadius: '1px', background: '#313048', color: '#fff', cursor: 'pointer', fontSize: '1.8rem', padding: '1.5rem 1.8rem', outline: 'none',
            }}
            type="button"
            onClick={this.handleClick}
          >
Download for free

          </button>
          <p style={{ fontSize: '2.4rem', margin: '4.8rem 0 0 0' }}>
A project by
            {' '}
            <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Kunall Banerjee</span>
          </p>
        </Content>
      </Container>
    );
  }
}
