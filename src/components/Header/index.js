import React from 'react';
import { useSelector } from 'react-redux';
import { MdFavorite } from 'react-icons/md';

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
        <div>
          <h3>
            FAVORITOS
          </h3>
          <div className="count">
            <MdFavorite size={32} fill="#ffffff" />
            <span>
              {cars.length}
            </span>
          </div>
        </div>
      </a>
    </Container>
  );
}
