import React from 'react';

import logo from '../../assets/images/market-logo.png';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="" />
      <strong>Carros selecionados</strong>
    </Container>
  );
}
