  import Head from 'next/head'
  import Image from 'next/image'
  import Banner from '../components/Home/Banner'
  import Commited from '../components/Home/Commited' 
  

  export default function Home() {
    return (
      <>
        <Head>
          <title>Aurobindo Pharma Products | Trusted Global Pharmaceutical Range</title>
          <meta name="description" content="Explore Aurobindo Pharma’s wide range of high-quality pharmaceutical products trusted worldwide for reliability, innovation, and global healthcare excellence." /> 
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://products.aurobindo.com/" /> 
        </Head>
        
    <Banner></Banner>
    <Commited></Commited>
      </>
    )
  }
