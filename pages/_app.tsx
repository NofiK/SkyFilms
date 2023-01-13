import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "@next/font/google";
import Header from "../src/components/Layouts/Header/Header";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// const roboto = Roboto({
//   weight: '700',
//   subsets: ['latin'],
// })
import { store } from "../src/store/store";
import {Layout} from "../src/components/Layouts/Layout";
export default function App({ Component, pageProps }: AppProps) {
  // const store = setupStore()
  return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
  );
}
