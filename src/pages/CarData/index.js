import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

import api from '../../services/api';

import { Container, WrapperCard } from './styles';

import error404 from '../../assets/images/404-error.svg';

import * as CartActions from '../../store/modules/cart/actions';

function CarData({ match }) {
  const [carDetail, setCarDetail] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    async function LoadDetails() {
      const { brandid, modelid, year } = match.params;
      setLoading(true);

      try {
        const response = await api.get(`marcas/${brandid}/modelos/${modelid}/anos/${year}`);

        setCarDetail(response.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    LoadDetails();
  }, []);

  function handleAddCar(data) {
    dispatch(CartActions.addToCartRequest(data));

    let timerInterval;
    Swal.fire({
      title: 'Adicionado com sucesso',
      timer: 3000,
      timerProgressBar: true,
      confirmButtonColor: '#32be8f',

      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer');
      }
    });
  }

  return (
    <Container>
      {loading && <Loader type="ThreeDots" color="#483d8b" height={80} width={80} />}

      {error && <img src={error404} alt="404 not found" />}

      {carDetail && (
        <WrapperCard>
          <div>
            <h2>
              {carDetail.Marca}
            </h2>
            <button
              type="button"
              onClick={() => handleAddCar(carDetail)}
            >
              Adicionar aos carros desejados
            </button>
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

CarData.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};
