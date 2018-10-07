import React, { PureComponent } from 'react';
import styled from 'styled-components';

import DownloadButton from './Button';
// Not used for now
// import Download from './Download';
import Logo2x from './Logo';
import { Name, Nom } from './Name';
import rem from '../../utils/rem';
import Secondary from './Secondary';
import Tagline from './Tagline';

const Wrapper = styled.div`
  margin: ${rem(15)} 0 0 0;
  padding: ${rem(50)};
  p {
    font-size: 1.2rem;
  }
`;

export default class Home extends PureComponent {
  render() {
    return (
      <Wrapper>
        <a href="https://21kb.now.sh" target="_blank" rel="noopener noreferrer">
          <Logo2x />
        </a>
        <Name>Kara Logos.</Name>
        <Tagline />
        <Secondary>
          Kara Logos are for the times you need a professional logo to work with
          but don't have the real thing yet.
        </Secondary>
        <DownloadButton />
        {/* <Download>Downloaded 100+ times</Download> */}
        <Nom>
          A project by{' '}
          <span>
            <em>
              <a
                href="https://kimchi.now.sh"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kunall Banerjee
              </a>
            </em>
          </span>
        </Nom>
      </Wrapper>
    );
  }
}
