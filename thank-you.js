import Head from 'next/head'
import DefaultLayout from '@/layouts/DefaultLayout'
import Container from '@/components/layout/Container'
import ThankYou from '@/components/thankYou'

// const thankYou = () => {
//   return (
//     <Container>
//       <ThankYou />
//     </Container>
//   )
// }
const thankYou = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>AD❤️.me - thank-you</title>
        <meta property="og:title" content="AD❤️.me - thank-you" key="title" />
      </Head>
      <ThankYou />
    </DefaultLayout>
  )
}

export default thankYou
