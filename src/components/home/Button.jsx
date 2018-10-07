import React, { PureComponent } from 'react';
import styled from 'styled-components';

import rem from '../../utils/rem';

const Button = styled.button`
  background: #363b49;
  border: none;
  border-radius: 0px;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  outline: 0;
  padding: ${rem(20)} ${rem(35)};
  text-align: center;
`;

export default class DownloadButton extends PureComponent {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.open(
      'https://www.dropbox.com/s/gj4ebz7x8a2yv0c/kara-logos.zip?dl=0',
    );
  }

  render() {
    return <Button onClick={this.handleClick}>Download for free</Button>;
  }
}
