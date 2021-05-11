import { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import theme from '~/theme'
import * as gtag from '~/src/lib/gtag'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const siteName = 'Civictech Challenge Cup 2021'
  const description =
    '「コロナが終わるまで」はもう待てない - 共感しあえる仲間と、ともに挑戦しよう。'
  const baseUrl = 'https://ccc2021.code4japan.org'
  const ogp = `${baseUrl}/ogp.png`

  const router = useRouter()

  useEffect(() => {
    if (!gtag.GOOGLE_ANALYTICS_ID) return

    const handleRouteChange = (path: string) => gtag.pageview(path)
    const TYPE = 'routeChangeComplete'

    router.events.on(TYPE, handleRouteChange)
    return () => router.events.off(TYPE, handleRouteChange)
  }, [router.events])

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>{siteName}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          name="keyword"
          content="Code for Japan, Civictech, Award, アワード, 審査, 協賛, コンテスト, Civictech Challenge Cup, シビックテック, 学生"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Code for Japan" />
        <meta name="description" content={description} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogp} />
        <meta property="og:locale" content="ja_JP" />
        <meta name="og:image:width" content="1200" />
        <meta name="og:image:height" content="630" />
        <meta name="fb:app_id" content="207490557254496" />
        <meta name="twitter:image" content={ogp} />
        <meta name="twitter:site" content="@codeforJP" />
        <meta name="twitter:creator" content="@codeforJP" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#ffffff" />
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
