import { FC } from 'react'
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/react'

import { Content } from '~/src/pages'
import AppSectionTitle from '~/src/components/AppSectionTitle'
import styles from '~/src/styles/NewsList.module.scss'

interface Thumbnail {
  name: string
  url: string
  rawUrl: string
}
export interface NewsItem {
  title: string
  summary: string
  date: string
  thumbnail: Thumbnail
  link: string
}

const IndexNewsList: FC<Content> = (props: Content) => {
  const items = props.linkedItems as NewsItem[]

  function OnPublished(date: string) {
    return date ? (
      <Box
        as="time"
        dateTime={date}
        d="block"
        color="gray.500"
        className={styles.NewsListItemDate}
      >
        {date}
      </Box>
    ) : (
      <Box
        as="span"
        d="block"
        color="gray.500"
        className={styles.NewsListItemDate}
      >
        2021-XX-XX
      </Box>
    )
  }

  // columns={{ base: 1, md: 2, lg: 3, xl: 4 }}

  return (
    <Container maxW="container.xl" py={10}>
      <Box as={'section'} style={{ padding: '0 24px' }}>
        <AppSectionTitle enTitle={props.enTitle} jaTitle={props.jaTitle} />
        <SimpleGrid spacing={6} minChildWidth="18em" justifyContent="center">
          {items.map((item, index) => (
            <LinkBox
              key={index}
              className={styles.NewsListItem}
              borderRadius="sm"
              shadow="lg"
              bg="white"
              overflow="hidden"
              maxW={{ base: undefined, md: 'lg' }}
              p={5}
            >
              {OnPublished(item.date)}
              <Heading as="h3">{item.title}</Heading>
              <Text pt={3} pb={5}>
                {item.summary}
              </Text>
              <LinkOverlay isExternal href={item.link}>
                詳細はこちら
              </LinkOverlay>
            </LinkBox>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  )
}

export default IndexNewsList
