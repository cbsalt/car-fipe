import React from 'react';

import logo from '../../assets/images/car-logo.svg';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <a href="/">
        <img src={logo} alt="logotipo" />
      </a>
      <h3>Carros desejados</h3>
    </Container>
  );
}
