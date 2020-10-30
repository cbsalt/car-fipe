import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';

import { Container, WrapperCard } from './styles';

import error404 from '../../assets/images/404-error.svg';

import api from '../../services/api';

function CarData({ match }) {
  const [carDetail, setCarDetail] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function LoadDetails() {
      const { brandid, modelid, year } = match.params;
      setLoading(true);

      try {
        const response = await api.get(`marcas/${brandid}/modelos/${modelid}/anos/${year}`);

        setCarDetail(response.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    LoadDetails();
  }, []);

  return (
    <Container>
      {loading && <Loader type="Oval" color="#87cefa" height={300} width={300} />}

      {error && <img src={error404} alt="404 not found" />}

      {carDetail && (
        <WrapperCard>
          <div>
            <h2>
              {carDetail.Marca}
            </h2>
            <button type="button">Adicionar aos carros desejados</button>
            <p>{carDetail.Modelo}</p>
          </div>
          <div className="description">
            <div>
              <small>Ano</small>
              <span>{carDetail.AnoModelo}</span>
            </div>
            <div>
              <small>Mês de Referência</small>
              <span>{carDetail.MesReferencia}</span>
            </div>
            <div>
              <small>Valor</small>
              <span>{carDetail.Valor}</span>
            </div>
            <div>
              <small>Combustível</small>
              <span>{carDetail.Combustivel}</span>
            </div>
            <div>
              <small>Código FIPE</small>
              <span>{carDetail.CodigoFipe}</span>
            </div>
          </div>
        </WrapperCard>
      )}
    </Container>
  );
}

export default CarData;
