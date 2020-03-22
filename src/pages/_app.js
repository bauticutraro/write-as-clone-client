import React from 'react'; // REMOVE?
import App from 'next/app';
import { Provider } from 'react-redux';

import configureStore, { sagaMiddleware } from '../store';
import sagas from '../sagas';
const { store } = configureStore();
sagaMiddleware.run(sagas);

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;
