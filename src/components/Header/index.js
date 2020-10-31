import React from 'react';
import { useSelector } from 'react-redux';

import logo from '../../assets/images/car-logo.svg';

import { Container } from './styles';

export default function Header() {
  const cars = useSelector((state) => state.cart.favoriteCars);
  return (
    <Container>
      <a href="/">
        <img src={logo} alt="logotipo" />
      </a>
      <a href="/favorites">
        <h3>
          Carros desejados (
          {cars.length}
          )
        </h3>
      </a>
    </Container>
  );
}
