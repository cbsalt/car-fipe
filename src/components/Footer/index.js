import React from 'react';

import { Container } from './styles';

function Footer() {
  return (
    <Container>
      <p>
        Made with
        <span role="img" aria-label="Heart"> 🖤 </span>
        by
        <a
          href="https://github.com/cbsalt"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          Charles
        </a>
      </p>

    </Container>
  );
}

export default Footer;
