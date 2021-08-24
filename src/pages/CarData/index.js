import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Loader from 'react-loader-spinner';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import { TiPlus } from 'react-icons/ti';
import { BsCalendar } from 'react-icons/bs';
import { FaGasPump, FaMoneyBillWaveAlt } from 'react-icons/fa';

import api from '../../services/api';
import notFound from '../../assets/images/not-found.svg';
import * as CartActions from '../../store/modules/cart/actions';

import { Container, WrapperCard } from './styles';

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
        const response = await api.get(
          `marcas/${brandid}/modelos/${modelid}/anos/${year}`,
        );

        setCarDetail(response.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    LoadDetails();
  }, [match.params]);

  function handleAddCar(data) {
    const car = {
      ...data,
      id: uuidv4(),
    };
    dispatch(CartActions.addToCartRequest(car));

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
      <div>
        {loading && (
          <Loader type="ThreeDots" color="#483d8b" height={80} width={80} />
        )}

        {error && (
        <div className="not-found">
          <p>
            <span>Ops!</span>
            <br />
            O modelo que você requisitou não foi encontrado.
            <br />
            Não se preocupe, tente novamente.
          </p>
          <img src={notFound} alt="404 not found" />
          <button type="button">
            <Link to="/">VOLTAR AO INÍCIO</Link>
          </button>
        </div>
        )}
      </div>

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
              <TiPlus size={24} fill="#ffffff" />
            </button>
          </div>
          <strong>{carDetail.Modelo}</strong>
          <div className="description">
            <div>
              <small>Ano</small>
              <span>{carDetail.AnoModelo}</span>
            </div>
            <div>
              <small>
                <BsCalendar style={{ marginRight: '4px' }} />
                Mês de Referência
              </small>
              <span>{carDetail.MesReferencia}</span>
            </div>
            <div>
              <small>
                <FaMoneyBillWaveAlt style={{ marginRight: '4px' }} />
                Valor
              </small>
              <span>{carDetail.Valor}</span>
            </div>
            <div>
              <small>
                <FaGasPump style={{ marginRight: '4px' }} />
                Combustível
              </small>
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
