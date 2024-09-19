import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

import { ClientContextProvider } from "../contexts/ClientContext";
import { JsonRpcContextProvider } from "../contexts/JsonRpcContext";
import { ChainDataContextProvider } from "../contexts/ChainDataContext";
import Metadata from "../components/Metadata";
import Script from "next/script";
import { Telegram } from "@twa-dev/types";
import Head from "next/head";

declare global {
  interface Window {
    Telegram: Telegram;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Script src="https://telegram.org/js/telegram-web-app.js" /> */}
      <Toaster />
      <Metadata />
      <ChainDataContextProvider>
        <ClientContextProvider>
          <JsonRpcContextProvider>
            <Component {...pageProps} />
          </JsonRpcContextProvider>
        </ClientContextProvider>
      </ChainDataContextProvider>
    </>
  );
}

export default MyApp;
