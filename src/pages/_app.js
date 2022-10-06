import styles from'../styles/_main.module.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import Layout from '../components/Layout/layout'



function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import ('bootstrap/dist/js/bootstrap.js')
    }, []);

  return <Layout>
  <Component {...pageProps} />
  </Layout>
  
 
}

export default MyApp
