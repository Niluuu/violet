import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const route  = useRouter();

  console.log('route', route);

  return <Component {...pageProps} />
}
