import styled, { css } from 'styled-components';

import Logo2x from '../../images/logo.svg';
import rem from '../../utils/rem';

const Logo = styled.div`
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  ${p =>
    p.compact
      ? css`
          background-image: url(${Logo2x});
          width: ${rem(100)};
          height: ${rem(30)};
        `
      : css`
          background-image: url(${Logo2x});
          width: ${rem(164)};
          height: ${rem(55)};
        `};
`;

export default Logo;
