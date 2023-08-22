import type { AppProps } from "next/app";
import Layout from "@/components/Layout/Layout";
import { DM_Sans } from "next/font/google";
import "@/styles/globals.scss";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style jsx global>{`
        html {
          font-family: ${dm_sans.style.fontFamily};
        }
      `}</style>
    </>
  );
}
