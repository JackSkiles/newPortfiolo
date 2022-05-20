import '../styles/globals.css'
import '../styles/mutable.css';
import '../styles/hero.css';
import '../styles/projects.css';
import '../styles/info.css';
import '../styles/footer.css';
import Layout from '../components/Layout'



function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
