import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import Header from '../src/components/Layouts/Header/Header'
import { Provider } from 'react-redux'
const inter = Inter({ subsets: ['latin'] })
import { store } from '../src/store/store'
export default function App({ Component, pageProps }: AppProps) {
  // const store = setupStore()
  return(
  <>
     <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
   <Provider store={store}>
    <Header>
       <Component {...pageProps} />
    </Header>
    </Provider>
   </>
  )
}
