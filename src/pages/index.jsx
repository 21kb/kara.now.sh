import Anime from 'react-anime';
import React, { Component } from 'react';

import Container from '../components/Container';
import Content from '../components/Content';
import { Head } from '../utils/index';
import logo from '../../public/static/logo.svg';

export default class Index extends Component {
  constructor() {
    super();
    this.downloadURL = 'https://www.dropbox.com/s/400ddzewdff8mfx/kara-logos.sketch?dl=0';
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Lame 🤢
    window.open(this.downloadURL, '_blank');
  }

  render() {
    return (
      <Container>
        <Head />
        <div style={{ display: 'table', transform: 'skew(-5deg, -5deg)' }}>
          <a href="/">
            <Anime
              easing="easeOutElastic"
              duration={1500}
              direction="alternate"
              loop
              scale={[0.75, 0.9]}
            >
              <img src={logo} alt="" />
            </Anime>
          </a>
          <h3 style={{ transform: 'skew(5deg, 5deg)' }}>Brought to you by 21kb studios!</h3>
        </div>
        <Content>
          <h3 style={{ fontSize: '3.6rem', margin: '5.5rem 0 0 0' }}>Placeholder logos for the lazy developer.</h3>
          <p style={{ fontSize: '2.4rem', fontWeight: 400, margin: '7rem 0 3.6rem 0' }}>
Minimal logos made with minimal effort. Constantly updated.
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
            <a href="https://kimchi.now.sh" target="_blank" rel="noopener noreferrer"><span style={{ fontWeight: 'bold', fontStyle: 'italic', textDecoration: 'underline' }}>Kunall Banerjee</span></a>
          </p>
        </Content>
      </Container>
    );
  }
}
