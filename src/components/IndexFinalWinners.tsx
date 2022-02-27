import { FC } from 'react'
import { Box, Container } from '@chakra-ui/react'
import { NotionRenderer } from 'react-notion'

import { Content } from '~/src/pages'
import AppSectionTitle from '~/src/components/AppSectionTitle'
import styles from '~/src/styles/FinalWinners.module.scss'

const IndexAwards: FC<Content> = (props: Content) => {
  return (
    <Container maxW="container.xl" pt={8} pb={2}>
      <Box
        as={'section'}
        className={styles.FinalWinners}
        style={{ padding: '0 24px' }}
      >
        <AppSectionTitle enTitle={props.enTitle} jaTitle={props.jaTitle} />
        <Box pt={4}>
          <NotionRenderer blockMap={props.pageData} />
        </Box>
      </Box>
    </Container>
  )
}

export default IndexAwards
