import React from 'react';

import { Container, WrapperCard } from './styles';

import BMW from '../../assets/images/bmw-car.png'

function CarData() {
  return (
    <Container>
      <img src={BMW} alt=""/>
        <WrapperCard>
          <h2>BMW{' '}<span>XR3</span></h2>
          <p>1.7 LX 16V Gasolina 4P Manual</p>
        <div className="description">
          <div>
            <small>Ano</small>
            <span>2001/2001</span>
          </div>
          <div>
            <small>KM</small>
            <span>161.446</span>
          </div>
          <div>
            <small>Câmbio</small>
            <span>Manual</span>
          </div>
          <div>
            <small>Carroceria</small>
            <span>Sedã</span>
          </div>
          <div>
            <small>Combustível</small>
            <span>Flex</span>
          </div>
          <div>
            <small>Final de placa</small>
            <span>3</span>
          </div>
          <div>
            <small>Cor</small>
            <span>Cinza</span>
          </div>
        </div>
      </WrapperCard>
    </Container>
  );
}

export default CarData;
