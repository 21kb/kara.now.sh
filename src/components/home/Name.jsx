import styled from 'styled-components';

import rem from '../../utils/rem';

export const Name = styled.h1`
  font-size: 3.6rem;
  margin: ${rem(45)} 0 ${rem(30)} 0;
`;

export const Nom = styled(Name)`
  font-size: 1.8rem;
  span {
    font-weight: bold;
  }
`;
