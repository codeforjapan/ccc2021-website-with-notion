import { Content } from '~/src/pages'
import { FC } from 'react'
import {
  Box,
  Container,
  HStack,
  Heading,
  Text,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/react'
import SectionTitle from '~/src/components/SectionTitle'
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

const NewsList: FC<Content> = (props: Content) => {
  const items = props.linkedItems as NewsItem[]

  return (
    <Container maxW="container.xl" py={10}>
      <Box as={'section'} style={{ padding: '0 24px' }}>
        <SectionTitle enTitle={props.enTitle} jaTitle={props.jaTitle} />
        <HStack spacing={8} justify="center">
          {items.map((item, index) => (
            <LinkBox
              key={index}
              className={styles.NewsListItem}
              borderRadius="sm"
              shadow="lg"
              bg="white"
              overflow="hidden"
              maxW="lg"
              minW="18vw"
              p={5}
            >
              <Box
                as="time"
                dateTime=""
                d="block"
                color="gray.500"
                className={styles.NewsListItemDate}
              >
                {item.date || '2021-XX-XX'}
              </Box>
              <Heading as="h3">{item.title}</Heading>
              <Text pt={3} pb={5}>
                {item.summary}
              </Text>
              <LinkOverlay isExternal href={item.link}>
                詳細はこちら
              </LinkOverlay>
            </LinkBox>
          ))}
        </HStack>
      </Box>
    </Container>
  )
}

export default NewsList
