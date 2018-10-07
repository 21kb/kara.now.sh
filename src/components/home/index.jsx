import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Button from './Button';
import Download from './Download';
import Logo2x from './Logo';
import { Name, Nom } from './Name';
import rem from '../../utils/rem';
import Secondary from './Secondary';
import Tagline from './Tagline';

const Wrapper = styled.div`
  margin: ${rem(15)} 0 0 0;
  padding: ${rem(50)};
  width: 50%;
  p {
    font-size: 1.2rem;
  }
`;

export default class Home extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Logo2x />
        <Name>Kara Logos.</Name>
        <Tagline />
        <Secondary>
          Logos for the times you need a professional logo to work with but
          don't have the real thing yet.
        </Secondary>
        <Button>Download for free</Button>
        <Download>Downloaded 100+ times</Download>
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
