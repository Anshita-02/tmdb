import Context from '@/context/Context'
import NpmContext from '@/context/NpmContext'
import OtvContext from '@/context/Otv'
import PtvContext from '@/context/TvPopular'
import UcContext from '@/context/UcContext'
import '@/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
  
  <Context>
    <NpmContext>
      <UcContext>
        <PtvContext>
          <OtvContext>
          <Component {...pageProps} />
          </OtvContext>
        </PtvContext>
      </UcContext>
    </NpmContext>
  </Context>
  
  )
}
