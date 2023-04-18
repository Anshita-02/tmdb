import Context from '@/context/Context'
import '@/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
  <Context>
  <Component {...pageProps} />
  </Context>
  )
}
