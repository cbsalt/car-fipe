import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { TiTrash } from 'react-icons/ti';
import { BsCalendar } from 'react-icons/bs';
import { FaGasPump, FaMoneyBillWaveAlt } from 'react-icons/fa';
import { Container, WrapperCard } from './styles';
import Empty from '../../assets/images/empty.svg';

import * as CartActions from '../../store/modules/cart/actions';

function FavoriteCars() {
  const favorites = useSelector((state) => state.cart.favoriteCars.map((carDetail) => ({
    ...carDetail,
  })));

  const dispatch = useDispatch();

  async function handleRemoveCar(id) {
    const modal = withReactContent(Swal);

    modal
      .fire({
        title: 'Você tem certeza que quer remover?',
        text: 'Você não poderá reverter isso!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#32be8f',
        cancelButtonColor: '#f64c75',
        confirmButtonText: 'Sim, exclua!',
      })
      .then((result) => {
        if (result.value) {
          dispatch(CartActions.removeFromCart(id));

          Swal.fire({
            title: 'Excluído!',
            text: 'Seu favorito foi removido.',
            timer: 3000,
            timerProgressBar: true,
            confirmButtonColor: '#32be8f',
            icon: 'success',
          });
        }
      });
  }

  return (
    <Container>
      {favorites.length === 0 && (
      <div className="empty-container">
        <span>Parece que não há nada aqui ainda...</span>
        <img src={Empty} alt="empty" />
        <button type="button">
          <a href="/">VOLTAR AO INÍCIO</a>
        </button>
      </div>
      )}

      {favorites.map((favorite) => (
        <WrapperCard key={favorite.id}>
          <div>
            <h2>
              {favorite.Marca}
            </h2>
            <button
              type="button"
              onClick={() => handleRemoveCar(favorite.id)}
            >
              <TiTrash size={24} fill="#ffffff" />
            </button>
          </div>
          <strong>{favorite.Modelo}</strong>
          <div className="description">
            <div>
              <small>Ano</small>
              <span>{favorite.AnoModelo}</span>
            </div>
            <div>
              <small>
                <BsCalendar style={{ marginRight: '4px' }} />
                Mês de Referência
              </small>
              <span>{favorite.MesReferencia}</span>
            </div>
            <div>
              <small>
                <FaMoneyBillWaveAlt style={{ marginRight: '4px' }} />
                Valor
              </small>
              <span>{favorite.Valor}</span>
            </div>
            <div>
              <small>
                <FaGasPump style={{ marginRight: '4px' }} />
                Combustível
              </small>
              <span>{favorite.Combustivel}</span>
            </div>
            <div>
              <small>Código FIPE</small>
              <span>{favorite.CodigoFipe}</span>
            </div>
          </div>
        </WrapperCard>
      ))}

    </Container>
  );
}

export default FavoriteCars;
