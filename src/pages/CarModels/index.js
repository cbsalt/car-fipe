import React from 'react';

import { Container, WrapperCards, ModelCard } from './styles';

import BMW from '../../assets/images/bmw-car.png';

function CarModels() {
  return (
    <Container>
      <h2>Modelos disponíveis</h2>
      <WrapperCards>
        <ModelCard>
          <img src={BMW} alt="" />
          <div>
            <strong>XR3</strong>
            <p>1.7 LX 16V Gasolina 4P Manual</p>
            <span>R$ 13.000</span>
            <div className="year">
              <small>2001/2001</small>
              <small>161446 km</small>
            </div>
          </div>
        </ModelCard>
      </WrapperCards>
    </Container>
  );
}

export default CarModels;
