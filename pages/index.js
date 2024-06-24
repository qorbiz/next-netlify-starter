import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>QORBIZ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="QORBIZ" />
        <p className="description">
          Contact us: <code>contact@qorbiz.com</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
