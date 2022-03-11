import { configureStore } from '@reduxjs/toolkit';
import { artworksReducer } from './slices/artworksSlice';
import { createLogger } from 'redux-logger';

const logger = createLogger({ collapsed: true });

export const store = configureStore({
  reducer: {
    artworks: artworksReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware();
    if (process.env.NODE_ENV === 'development') {
      middlewares.push(logger);
    }
    return middlewares;
  },
  devTools: process.env.NODE_ENV === 'development',
});
