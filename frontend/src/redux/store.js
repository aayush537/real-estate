import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';


// const persistConfig = {
//   key: 'root',
//   storage,
//   version: 1,
// };



export const store = configureStore({
  reducer:{
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


