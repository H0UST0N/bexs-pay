import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextHead from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextHead>
        <title>Bexs Pay</title>
      </NextHead>
      <Component {...pageProps} />
    </>
  )

}

export default MyApp
