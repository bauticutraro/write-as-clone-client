import React from 'react'; // REMOVE?
import App from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import createStore from '../store';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    // Retreiving each page's props
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return {
      pageProps: pageProps
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(createStore)(MyApp);
