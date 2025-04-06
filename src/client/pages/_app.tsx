// import Layout from '../components/Layout/Layout';

// import type { NextComponentType } from 'next';

// import "primereact/resources/primereact.css";
// // import "primereact/resources/themes/lara-light-indigo/theme.css";
// import '../styles/global.css';
// import '../styles/theme.css';

// function App({
//   Component,
//   pageProps,
// }: {
//   Component: NextComponentType;
//   pageProps: Record<string, unknown>;
// }): JSX.Element {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   );
// }

// export default App;


import React from "react";
import { useRouter } from 'next/router';
import Layout from "../components/Layout/Layout";
import { Provider } from "react-redux";
import store from "../store";

import "../styles/global.css";
import "../styles/theme.css";
// import "react-loading-skeleton/dist/skeleton.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  console.log('rouer ::: ', router);
    return (
        <Provider store={store} >
          {router.pathname === '/'
            ?
            <Component {...pageProps} />
            :
            <Layout>
                <Component {...pageProps} />
            </Layout>
          }   
        </Provider>
    );
}

export default App;

