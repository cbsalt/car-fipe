import React from 'react';

import logo from '../../assets/images/market-logo.png';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="" />
      <input type="text" placeholder="O que você busca?" />
      <h3>Carros selecionados</h3>
    </Container>
  );
}
