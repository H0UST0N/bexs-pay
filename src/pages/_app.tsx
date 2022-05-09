import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Container from '../components/layout/Container';
import Head from '../components/layout/Head';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head title={'Bexs Pay'} />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  )

}

export default MyApp
