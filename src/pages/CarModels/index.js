import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import {
  Container, WrapperModelsCards, WrapperYearsCards, ModelCard,
} from './styles';

import api from '../../services/api';
import Search from '../../components/Search';

function CarModels({ match }) {
  const [years, setYears] = useState([]);
  const [models, setModels] = useState([]);
  const [modelSelected, setModelSelected] = useState(null);
  const [searchModel, setSearchModel] = useState('');
  const brandId = match.params.id;

  useEffect(() => {
    async function LoadModels() {
      const response = await api.get(`marcas/${brandId}/modelos`);

      const { modelos, anos } = response.data;
      const carModelsFiltered = modelos.filter(
        (carModel) => carModel.nome.toLowerCase().includes(searchModel.toLowerCase()),
      );
      const yearsFiltered = anos.filter(
        (yearModel) => yearModel.nome.includes(searchModel.toLowerCase()),
      );

      setModels(carModelsFiltered);
      setYears(yearsFiltered);
    }

    LoadModels();
  }, [brandId, searchModel]);

  function handleSearch({ target }) {
    setSearchModel(target.value);
  }

  const handleModel = useCallback((model) => {
    setModelSelected(model);
    setSearchModel('');
  }, []);

  return (
    <Container>
      <Search
        title={modelSelected ? 'Ano' : 'Modelo'}
        placeholder={modelSelected ? 'Digite o ano' : 'Digite o modelo'}
        id="Search"
        value={searchModel}
        onChange={handleSearch}
      />
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
            onClick={() => setSearchModel('')}
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

CarModels.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};
