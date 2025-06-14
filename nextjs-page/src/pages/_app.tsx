import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { IntlProvider } from "@/contexts/IntlProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <IntlProvider>
      <Component {...pageProps} />
    </IntlProvider>
  );
}
