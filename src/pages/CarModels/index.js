import React, { useEffect, useCallback, useState } from 'react';

import {
  Container, WrapperModelsCards, WrapperYearsCards, ModelCard,
} from './styles';

import api from '../../services/api';

function CarModels({ match }) {
  const [years, setYears] = useState([]);
  const [models, setModels] = useState([]);
  const [modelSelected, setModelSelected] = useState(null);
  const brandId = match.params.id;

  useEffect(() => {
    async function LoadModels() {
      const response = await api.get(`marcas/${brandId}/modelos`);
      const { modelos, anos } = response.data;

      setModels(modelos);
      setYears(anos);
    }

    LoadModels();
  }, []);

  const handleModel = useCallback((model) => {
    setModelSelected(model);
  }, []);

  return (
    <Container>
      <h2>Modelos disponíveis</h2>
      <WrapperModelsCards selected={modelSelected}>
        {models.map((model) => (
          <ModelCard key={model.codigo} onClick={() => handleModel(model.codigo)}>
            <div>
              <strong>{model.nome}</strong>
            </div>
          </ModelCard>
        ))}
      </WrapperModelsCards>

      <WrapperYearsCards selected={modelSelected}>
        {years.map((year) => (
          <a
            key={year.codigo}
            href={
               `/car/${brandId}/${modelSelected}/${year.codigo}`
            }
          >
            <ModelCard key={year.codigo}>
              <div>
                <strong>{year.nome}</strong>
              </div>
            </ModelCard>
          </a>
        ))}
      </WrapperYearsCards>

    </Container>
  );
}

export default CarModels;
