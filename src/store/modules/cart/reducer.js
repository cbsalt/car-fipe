import produce from 'immer';

export default function cart(state = { favoriteCars: [] }, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@cart/ADD_SUCCESS':
        draft.favoriteCars.push(action.payload.data);
        break;

      case '@cart/REMOVE':
        {
          const favoriteIndex = draft.favoriteCars.findIndex(
            (fav) => fav.id === action.id,
          );
          if (favoriteIndex >= 0) {
            draft.favoriteCars.splice(favoriteIndex, 1);
          }
        }
        break;
      default:
    }
  });
}
