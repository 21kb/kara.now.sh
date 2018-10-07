import React, { PureComponent } from 'react';
import styled from 'styled-components';

import rem from '../../utils/rem';

const Tagline = styled.h1`
  font-size: 2.1rem;
  margin: ${rem(45)} 0 ${rem(30)} 0;
`;

export default class Taglines extends PureComponent {
  render() {
    return <Tagline>Placeholder logos for the lazy developer.</Tagline>;
  }
}
