import styles from'../styles/_main.module.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import {SWRConfig} from 'swr'
import axios from 'axios';
import Layout from '../components/Layout/layout'



function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import ('bootstrap/dist/js/bootstrap.js')
    }, []);

  return <SWRConfig value={{fetcher: (url) => axios.get(url).then(res => res.data)}}>
  <div className={styles.light}>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </div>
  </SWRConfig>
}

export default MyApp
