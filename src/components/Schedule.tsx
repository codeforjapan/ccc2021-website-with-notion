import { Content } from '~/src/pages'
import { FC } from 'react'
import { Box, Container } from '@chakra-ui/react'
import SectionTitle from '~/src/components/SectionTitle'
import { NotionRenderer } from 'react-notion'
import styles from '~/src/styles/Schedule.module.scss'
const Schedule: FC<Content> = (props: Content) => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box
        as={'section'}
        className={styles.Schedule}
        style={{ padding: '0 24px' }}
      >
        <SectionTitle enTitle={props.enTitle} jaTitle={props.jaTitle} />
        <NotionRenderer blockMap={props.pageData} />
      </Box>
    </Container>
  )
}

export default Schedule
