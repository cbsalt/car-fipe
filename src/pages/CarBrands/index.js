import React, { useEffect, useState } from 'react';

import { Container, WrapperCards, BrandCard } from './styles';

import api from '../../services/api';

function CarBrands() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function loadCars() {
      const response = await api.get('carros/marcas');

      const brands = response.data;

      setCars(brands);
    }

    loadCars();
  }, []);

  return (
    <Container>
      <h2>Marcas disponíveis</h2>
      <WrapperCards>
        {cars.map((car) => (
          <BrandCard key={car.codigo}>
            <span>{car.nome}</span>
          </BrandCard>
        ))}
      </WrapperCards>

    </Container>
  );
}

export default CarBrands;
