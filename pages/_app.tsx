import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import Header from '../src/components/Layouts/Header/Header'
const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return(
  <>
     <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
    <Header>
       <Component {...pageProps} />
    </Header>
   
   </>
  )
}
