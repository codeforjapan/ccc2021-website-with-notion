import { FC } from 'react'
import { Box, Container, Center, Heading, Text } from '@chakra-ui/react'
import { NotionRenderer } from 'react-notion'

import { Content } from '~/src/pages'
import AppButtonRounded from '~/src/components/AppButtonRounded'
import AppSectionTitle from '~/src/components/AppSectionTitle'
import styles from '~/src/styles/PersonalSponsors.module.scss'

export interface PersonalSponsor {
  name: string
  isHidden: boolean
}

const IndexPersonalSponsors: FC<Content> = (props: Content) => {
  const sponsors = (props.linkedItems as PersonalSponsor[]).filter(
    (i) => !i.isHidden
  )

  return (
    <Container maxW="container.xl" py={10}>
      <Box
        as={'section'}
        className={styles.PersonalSponsors}
        style={{ padding: '0 24px' }}
      >
        <AppSectionTitle enTitle={props.enTitle} jaTitle={props.jaTitle} />
        <NotionRenderer blockMap={props.pageData} />
        <Center mb={3}>
          <AppButtonRounded
            href="https://docs.google.com/forms/d/e/1FAIpQLScjicJDZltfvyksLvvY9tq0NpoqN8BDqlcGuXXZrCHIY3hxDA/viewform?usp=sf_link"
            isOutlined
            isExternal
          >
            個人協賛のお申し込みはこちら
          </AppButtonRounded>
        </Center>
        <Heading
          color={'brand.indigo'}
          fontFamily={'brand.jaTitle'}
          fontSize={'1.5rem'}
          fontWeight={'700'}
          letterSpacing={'normal'}
          lineHeight={1}
          pb={4}
          pl={'0.2rem'}
        >
          ご協賛いただいた皆様{' '}
          <Text as="span" fontSize="1.2rem">
            {props.additionalText || ''}
          </Text>
        </Heading>
        <Box>
          {sponsors.map((item, index) => (
            <Text
              d="inline-block"
              key={index}
              className={styles.PersonalSponsorsName}
            >
              {item.name}
              <Text as="span" className={styles.PersonalSponsorsSama}>
                様
              </Text>
            </Text>
          ))}
        </Box>
      </Box>
    </Container>
  )
}

export default IndexPersonalSponsors
