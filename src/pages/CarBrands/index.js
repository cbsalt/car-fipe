import React from 'react';

import { Container, WrapperCards, BrandCard } from './styles';

import BMW from '../../assets/images/bmw-logo.png';

function CarBrands() {
  return (
    <Container>
        <h2>Marcas disponíveis</h2>
      <WrapperCards>
        <BrandCard>
          <span>BMW</span>
          <img src={BMW} alt=""/>
        </BrandCard>
        <BrandCard>
          <span>Audi</span>
          <img src="" alt=""/>
        </BrandCard>
        <BrandCard>
          <span>Ford</span>
          <img src="" alt=""/>
        </BrandCard>
        <BrandCard>
          <span>Fiat</span>
          <img src="" alt=""/>
        </BrandCard>
      </WrapperCards>
    </Container>
    );
}

export default CarBrands;
