import styled from 'styled-components';

import rem from '../../utils/rem';

const Button = styled.button`
  background: #363b49;
  border: none;
  border-radius: 0px;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  padding: ${rem(20)} ${rem(35)};
  text-align: center;
`;

export default Button;
