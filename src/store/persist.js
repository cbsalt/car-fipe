import storage from 'redux-persist/lib/storage';

import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const dataPersist = persistReducer({
    storage,
    whitelist: ['cart'],
    key: '@cely-FIPE',
  },
  reducers);
  return dataPersist;
};
