import { FC } from 'react'
import { Box, Container } from '@chakra-ui/react'
import { NotionRenderer } from 'react-notion'

import AppSectionTitle from '~/src/components/AppSectionTitle'
import { Content } from '~/src/pages'
import styles from '~/src/styles/Organizer.module.scss'

const IndexOrganizer: FC<Content> = (props: Content) => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box
        as={'section'}
        className={styles.Organizer}
        style={{ padding: '0 24px' }}
      >
        <AppSectionTitle enTitle={props.enTitle} jaTitle={props.jaTitle} />
        <NotionRenderer blockMap={props.pageData} />
      </Box>
    </Container>
  )
}

export default IndexOrganizer
