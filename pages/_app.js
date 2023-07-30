import '@styles/globals.css';
import '@fortawesome/fontawesome-svg-core';
import { wrapper } from '@Store';
import { Provider } from 'react-redux';
function MyApp({ Component, pageProps }) {
  const { store } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
