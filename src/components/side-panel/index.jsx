import React, { PureComponent } from 'react';
import styled from 'styled-components';

import rem from '../../utils/rem';
import SidePanelImage from '../../images/side-panel.svg';

const Logo = styled.div`
  background-image: url(${SidePanelImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  box-sizing: border-box;
  display: inline-block;
  height: ${rem(640)};
  margin: 0 auto;
  vertical-align: middle;
  width: ${rem(640)};
`;

const Wrapper = styled.div`
  margin: ${rem(15)} 0 0 0;
  padding: ${rem(50)};
  p {
    font-size: 1.2rem;
  }
`;

export default class SidePanel extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Logo />
      </Wrapper>
    );
  }
}
