import Layout from '../components/Layout/Layout'
import { CookiesProvider } from 'react-cookie';

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <CookiesProvider>  
      <Component {...pageProps} />
    </CookiesProvider>
  </Layout>
  );
}

export default MyApp
