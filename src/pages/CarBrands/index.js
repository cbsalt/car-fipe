import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, WrapperCards, BrandCard } from './styles';

import api from '../../services/api';

function CarBrands() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    async function LoadBrands() {
      const response = await api.get('carros/marcas');

      const carBrands = response.data;

      setBrands(carBrands);
    }

    LoadBrands();
  }, []);

  return (
    <Container>
      <h2>Marcas de a-z</h2>
      <WrapperCards>
        {brands.map((brand) => (
          <Link
            key={brand.codigo}
            to={{
              pathname: `/models/${brand.codigo}`,
            }}
          >
            <BrandCard>
              <span>{brand.nome}</span>
            </BrandCard>
          </Link>
        ))}
      </WrapperCards>

    </Container>
  );
}

export default CarBrands;
