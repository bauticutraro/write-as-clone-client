import Head from 'next/head';
import GlobalStyles from '../globalStyles';
import { Provider } from 'react-redux';

import configureStore, { sagaMiddleware } from '../store';
import sagas from '../sagas';
import Navbar from '../components/Navbar/Navbar';
import NewNav from '../components/Navbar/NewNav';
import { PersistGate } from 'redux-persist/integration/react';
const { store, persistor } = configureStore();
sagaMiddleware.run(sagas);

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>Write.as — A place for focused writing.</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          href='https://fonts.googleapis.com/css?family=Lora|Open+Sans&display=swap'
          rel='stylesheet'
        />
      </Head>
      <GlobalStyles />
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          {Component.name === 'New' ? <NewNav /> : <Navbar />}
          <Component {...pageProps} />
        </Provider>
      </PersistGate>
    </div>
  );
};

export default MyApp;
