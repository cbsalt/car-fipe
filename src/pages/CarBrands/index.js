import React, { useEffect, useState } from 'react';

import { Container, WrapperCards, BrandCard } from './styles';

import api from '../../services/api';

function CarBrands() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    async function LoadBrands() {
      const response = await api.get('marcas');

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
          <a
            key={brand.codigo}
            href={`/models/${brand.codigo}`}
          >
            <BrandCard>
              <span>{brand.nome}</span>
            </BrandCard>
          </a>
        ))}
      </WrapperCards>
    </Container>
  );
}

export default CarBrands;
