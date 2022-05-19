import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jack Skiles | Home</title>
        <meta name="keywords" content="jack" />
        <link rel="stylesheet"
        href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"></link>
      </Head>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
