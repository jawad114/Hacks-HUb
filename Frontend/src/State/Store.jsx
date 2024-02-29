// store.js
import { configureStore } from '@reduxjs/toolkit';
import roleReducer from './Reducers/roleSlice';
import emailReducer from './Reducers/emailSlice';
import lastUpdateReducers from './Reducers/lastUpdateReducers';

const Store = configureStore({
  reducer: {
    role: roleReducer,
    email: emailReducer,
    lastUpdate: lastUpdateReducers,
  },
});

export default Store;
