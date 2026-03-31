import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {


  render() {
    return (
      <Html>
        <Head>

        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

	<link href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700|Poppins:300,400,500,600,700|PT+Serif:400,400i&amp;display=swap" rel="stylesheet" type="text/css" />
	<link rel="stylesheet" href="/css/bootstrap.css" type="text/css" />
  <link rel="stylesheet" href='/css/bootstrap.min.css'/>
  <link rel="stylesheet" href="/css/tabdrop.css" />
	<link rel="stylesheet" href="/style.css" type="text/css" />
	<link rel="stylesheet" href="/css/swiper.css" type="text/css" />
	<link rel="stylesheet" href="/css/dark.css" type="text/css" />
	<link rel="stylesheet" href="/css/font-icons.css" type="text/css" />
	<link rel="stylesheet" href="/css/animate.css" type="text/css" />
	<link rel="stylesheet" href="/css/magnific-popup.css" type="text/css" />
  <link rel="stylesheet" href="/css/responsive.css" type="text/css" />
	<link rel="stylesheet" href="/css/custom.css" type="text/css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <link rel="icon" href="/img/favicon.png" type="image/x-icon" />

  
<script async src="https://www.googletagmanager.com/gtag/js?id=G-QKVZ9K1ZRM"></script>
<script>
  {
    `
    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-QKVZ9K1ZRM');
    `
  }  
</script>

        </Head>
        <body className="stretched">
          <Main />
          <NextScript />

	<script src="/js/jquery.js"></script>
  <script src='/js/jquery.min.js'></script>  
  <script src='/js/bootstrap.min.js'></script>   
  <script src="/js/plugins.min.js"></script> 
  <script src="/js/functions.js"></script> 
  <script src="/js/bootstrap-tabdrop.js"></script>
  <script src="/apfscript.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument