import React from 'react'; // REMOVE?
import App from 'next/app';
import { Provider } from 'react-redux';

import configureStore, { sagaMiddleware } from '../store';
import sagas from '../sagas';
import Navbar from '../components/Navbar/Navbar';
const { store } = configureStore();
sagaMiddleware.run(sagas);

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Navbar />

        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;
