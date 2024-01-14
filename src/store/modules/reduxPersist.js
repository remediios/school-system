import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'SCHOOL-SYSTEM',
      storage,
      whitelist: ['example'], // check rootReducer object keys
    },
    reducers,
  );
  return persistedReducers;
};
