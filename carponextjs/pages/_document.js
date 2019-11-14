import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
 static async getInitialProps(ctx) {
   const initialProps = await Document.getInitialProps(ctx)
   return { ...initialProps }
 }

 render() {
   return (
     <html>
       <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" />
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <link rel="shortcut icon" type="image/png" href="./images/favicon.png" />
        <link rel="stylesheet" href="/css/owl.carousel.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
        
       </Head>
       <body>
         <Main />
         <NextScript />
       </body>
     </html>
   )
 }
}