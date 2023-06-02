import React from 'react';
import 'tailwindcss/tailwind.css';
import Sidebar from './Sidebar';


function MyApp({ Component, pageProps }) {
 
  
  return 
  <Sidebar>
  <Component {...pageProps} />;
  </Sidebar>
}

export default MyApp;
