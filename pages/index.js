import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Menu from '../components/Menu'
import Landing from './Landing'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

      </Head>

      <Menu />
      <Landing />
    </div>
  )
}