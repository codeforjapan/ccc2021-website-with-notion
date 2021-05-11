import Head from 'next/head'
import {
  Box,
  Container,
  Flex,
  Text,
  Spacer,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  UnorderedList,
  ListItem,
  Button,
  Center
} from '@chakra-ui/react'
import NextLink from 'next/link'
import pageStyles from '~/src/styles/analyticsPage.module.scss'
import headerStyles from '~/src/styles/Header.module.scss'
import appButtonStyles from '~/src/styles/AppButton.module.scss'
import AppFooter from '~/src/components/AppFooter'

const AnalyticsPage = () => {
  const pageTitle = 'Google Analytics について | Civictech Challenge Cup 2021'

  const links = [
    {
      text: 'Google Analytics利用規約',
      href: 'https://marketingplatform.google.com/about/analytics/terms/jp/'
    },
    {
      text: 'Googleのプライバシーポリシー',
      href: 'https://policies.google.com/privacy?hl=ja'
    },
    {
      text: 'Google Analyticsに関する詳細情報',
      href: 'https://support.google.com/analytics/answer/6004245?hl=ja'
    }
  ]
  return (
    <Box className={pageStyles.Page}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="apple-mobile-web-app-title" content={pageTitle} />
        <meta property="og:title" content={pageTitle} />
      </Head>
      <Box className={pageStyles.Header}>
        <Flex
          as="header"
          align="center"
          justify="space-between"
          wrap="wrap"
          bg="transparent"
          color="black"
          height="60px"
        >
          <Flex align="center" ml={5}>
            <LinkBox className={headerStyles.Title}>
              <NextLink href="/" passHref>
                <LinkOverlay>
                  <Text className={headerStyles.TitleLine}>Civictech</Text>
                  <Text className={headerStyles.TitleLine}>Challenge</Text>
                  <Text className={headerStyles.TitleLine}>
                    Cup&nbsp;
                    <span className={headerStyles.TitleLineSmaller}>2021</span>
                  </Text>
                </LinkOverlay>
              </NextLink>
            </LinkBox>
          </Flex>
          <Spacer />
        </Flex>
        <Container maxW="container.xl" py={10}>
          <Box as={'section'} style={{ padding: '0 24px' }}>
            <Heading
              as="h1"
              color={'brand.indigo'}
              fontFamily={'brand.jaTitle'}
              fontSize={'2rem'}
              fontWeight={'700'}
              letterSpacing={'normal'}
              lineHeight={1}
              pb={4}
              pl={0}
            >
              Google Analyticsについて
            </Heading>
            <Text>
              当サイトでは、サービス向上やサイトの改善のためにGoogle
              LLCの提供するアクセス分析のツールであるGoogle
              Analyticsを利用した計測を行っております。
            </Text>
            <Text>
              Google Analyticsでは、当サイトが発行するクッキー (Cookie)
              等を利用して、Webサイトの利用データ（アクセス状況、トラフィック、閲覧環境、IPアドレスなど）を収集しております。クッキーの利用に関してはGoogleのプライバシーポリシーと規約に基づいております。
            </Text>
            <Text>
              取得したデータはWebサイト利用状況を分析しサービスの改善につなげるため、またはサイト運営者へのレポートを作成するため、その他のサービスの提供に関わる目的に限り、これを使用します。（サイト運営者へのレポートでは、クッキーはブラウザ単位で本サイトのユーザー数をカウントするため、IPアドレスはGoogle
              Analyticsの分析機能を通じてアクセス元の地域分布（国、州・都道府県、都市）を把握するために利用されています。）
            </Text>
            <Text>
              Google
              Analyticsの利用規約及びプライバシーポリシーに関する説明については、Google
              Analyticsのサイトをご覧ください。
            </Text>
            <UnorderedList>
              {links.map((link, index) => (
                <ListItem key={index}>
                  <Link href={link.href} isExternal>
                    {link.text}
                  </Link>
                </ListItem>
              ))}
            </UnorderedList>
            <Text>
              Google Analyticsによる情報送信を回避する場合は、Google
              がサポートする
              <Link
                href="https://tools.google.com/dlpage/gaoptout?hl=ja"
                isExternal
              >
                測定を無効にするブラウザ アドオン
              </Link>
              をご利用ください。
            </Text>
          </Box>
        </Container>
        <Center>
          <Button
            rounded={100}
            bgColor="white"
            borderColor={'brand.indigo'}
            borderWidth={2}
            color="brand.indigo"
            _hover={{ bgColor: 'gray.100' }}
            _active={{ bgColor: 'gray.300' }}
            px={6}
            py={3}
            className={appButtonStyles.AppRounded}
          >
            <Link as={NextLink} passHref href="/">
              トップページに戻る
            </Link>
          </Button>
        </Center>
      </Box>

      <AppFooter />
    </Box>
  )
}

export default AnalyticsPage
