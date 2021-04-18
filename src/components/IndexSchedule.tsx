import { FC } from 'react'
import { Box, Container } from '@chakra-ui/react'
import { NotionRenderer } from 'react-notion'

import { Content } from '~/src/pages'
import AppSectionTitle from '~/src/components/AppSectionTitle'
import styles from '~/src/styles/Schedule.module.scss'

const IndexSchedule: FC<Content> = (props: Content) => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box
        as={'section'}
        className={styles.Schedule}
        style={{ padding: '0 24px' }}
      >
        <AppSectionTitle enTitle={props.enTitle} jaTitle={props.jaTitle} />
        <NotionRenderer blockMap={props.pageData} />
      </Box>
    </Container>
  )
}

export default IndexSchedule
