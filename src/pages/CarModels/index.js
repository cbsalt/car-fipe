import React, { useEffect, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

import api from '../../services/api';
import Search from '../../components/Search';

import {
  Container, WrapperModelsCards, WrapperYearsCards, ModelCard, LoaderWrapper,
} from './styles';

function CarModels({ match }) {
  const [loading, setLoading] = useState(false);

  const [years, setYears] = useState([]);
  const [models, setModels] = useState([]);
  const [modelSelected, setModelSelected] = useState(null);
  const [searchModel, setSearchModel] = useState('');
  const brandId = match.params.id;

  useEffect(() => {
    async function LoadModels() {
      setLoading(true);
      const response = await api.get(`marcas/${brandId}/modelos`);

      const { modelos, anos } = response.data;
      const carModelsFiltered = modelos.filter(
        (carModel) => carModel.nome
          .toLowerCase()
          .includes(searchModel.toLowerCase()),
      );
      const yearsFiltered = anos.filter(
        (yearModel) => yearModel.nome.includes(searchModel.toLowerCase()),
      );

      setLoading(false);
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
        {loading && models.length < 1 && (
          <LoaderWrapper>
            <Loader type="ThreeDots" color="#483d8b" height={80} width={80} />
          </LoaderWrapper>
        )}

        {models.map((model) => (
          <ModelCard
            key={model.codigo}
            onClick={() => handleModel(model.codigo)}
          >
            <div>
              <strong>{model.nome}</strong>
            </div>
          </ModelCard>
        ))}
      </WrapperModelsCards>
      <WrapperYearsCards selected={modelSelected}>
        {years.map((year) => (
          <Link
            key={year.codigo}
            to={
               `/car/${brandId}/${modelSelected}/${year.codigo}`
            }
            onClick={() => setSearchModel('')}
          >
            <ModelCard key={year.codigo}>
              <div>
                <strong>{year.nome}</strong>
              </div>
            </ModelCard>
          </Link>
        ))}
      </WrapperYearsCards>
    </Container>
  );
}

export default CarModels;

CarModels.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};
