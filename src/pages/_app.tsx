import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Container from '../components/layout/Container';
import Head from '../components/layout/Head';
import { CreditCardProvider } from '../contexts/CreditCardContext';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head title={'Bexs Pay'} />
      <Container>
        <CreditCardProvider>
          <Component {...pageProps} />
        </CreditCardProvider>
      </Container>
    </>
  )

}

export default MyApp
