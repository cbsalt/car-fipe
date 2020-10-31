import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { Container, WrapperCard } from './styles';

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
      {favorites.map((favorite) => (
        <WrapperCard key={favorite.CodigoFipe}>
          <div>
            <h2>
              {favorite.Marca}
            </h2>
            <button
              type="button"
              onClick={() => handleRemoveCar(favorite.id)}
            >
              Remover dos carros desejados
            </button>
            <p>{favorite.Modelo}</p>
          </div>
          <div className="description">
            <div>
              <small>Ano</small>
              <span>{favorite.AnoModelo}</span>
            </div>
            <div>
              <small>Mês de Referência</small>
              <span>{favorite.MesReferencia}</span>
            </div>
            <div>
              <small>Valor</small>
              <span>{favorite.Valor}</span>
            </div>
            <div>
              <small>Combustível</small>
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
