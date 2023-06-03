import React from 'react';
import 'tailwindcss/tailwind.css';



function MyApp({ Component, pageProps }) {
 
  
  return (
    <div className="bg-blue-500 flex justify-center items-center min-h-screen">
  <Component {...pageProps} />
</div>
  )
}

export default MyApp;
