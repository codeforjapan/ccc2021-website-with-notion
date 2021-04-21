import { AppProps } from 'next/app'
import Head from 'next/head'
import theme from '~/theme'
import { ChakraProvider } from '@chakra-ui/react'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const title = 'Civictech Challenge Cup'
  const siteName = title
  const description =
    '「コロナが終わるまで」はもう待てない - 共感しあえる仲間と、ともに挑戦しよう。'
  const baseUrl = 'https://ccc2021.code4japan.org'
  const ogp = `${baseUrl}/ogp.png`

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          name="keyword"
          content="Code for Japan, Civictech, Award, アワード, 審査, 協賛, コンテスト, Civictech Challenge Cup, シビックテック, 学生"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Code for Japan" />
        <meta name="apple-mobile-web-app-title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogp} />
        <meta name="og:image:width" content="1200" />
        <meta name="og:image:height" content="630" />
        <meta name="fb:app_id" content="207490557254496" />
        <meta name="twitter:image" content={ogp} />
        <meta name="twitter:site" content="@codeforJP" />
        <meta name="twitter:creator" content="@codeforJP" />
        <meta property="og:locale" content="ja_JP" />
        <meta name="robots" content="noindex" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Spartan:wght@600;800&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
