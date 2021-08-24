import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdFavorite } from 'react-icons/md';

import logo from '../../assets/images/car-logo.svg';

import { Container } from './styles';

export default function Header() {
  const cars = useSelector((state) => state.cart.favoriteCars);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="logotipo" />
      </Link>
      <Link to="/favorites">
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
      </Link>
    </Container>
  );
}
