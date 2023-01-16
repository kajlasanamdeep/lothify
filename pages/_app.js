import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { useState } from 'react';



function MyApp({ Component, pageProps }) {
  const [show,setShow] = useState(false);
  const [cart,setCart] = useState([]);

  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <Header show={show} cart={cart} setCart={setCart} setShow={setShow} />
      <Component setShow={setShow} setCart={setCart} {...pageProps} />
      <Footer />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous" />
    </>
  )
}

export default MyApp
