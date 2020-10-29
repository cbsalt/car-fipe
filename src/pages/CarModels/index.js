import React, { useEffect, useState } from 'react';

import { Container, WrapperCards, ModelCard } from './styles';

import api from '../../services/api';

function CarModels({ match }) {
  const [models, setModels] = useState([]);

  useEffect(() => {
    async function LoadModels() {
      const { id } = match.params;

      const response = await api.get(`carros/marcas/${id}/modelos`);

      const carModels = response.data.modelos;
      console.log(carModels);

      setModels(carModels);
    }

    LoadModels();
  }, []);

  return (
    <Container>
      <h2>Modelos disponíveis</h2>
      <WrapperCards>
        {models.map((model) => (
          <ModelCard key={model.codigo}>
            <div>
              <strong>{model.nome}</strong>
            </div>
          </ModelCard>
        ))}
      </WrapperCards>
    </Container>
  );
}

export default CarModels;
