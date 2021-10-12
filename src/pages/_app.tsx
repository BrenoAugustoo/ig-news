import { AppProps } from 'next/app'

import { Header } from '../components/Header';
import { Provider } from 'next-auth/client';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Header/>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
