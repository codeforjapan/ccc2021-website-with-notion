import { FC } from 'react'
import { Box, Container, Center } from '@chakra-ui/react'
import { NotionRenderer } from 'react-notion'

import { Content } from '~/src/pages'
import AppButtonRounded from '~/src/components/AppButtonRounded'
import AppSectionTitle from '~/src/components/AppSectionTitle'
import styles from '~/src/styles/PersonalSponsors.module.scss'

const IndexPersonalSponsors: FC<Content> = (props: Content) => {
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
      </Box>
    </Container>
  )
}

export default IndexPersonalSponsors
