import { Content } from '~/src/pages'
import { FC } from 'react'
import { Box, Container } from '@chakra-ui/react'
import SectionTitle from '~/src/components/SectionTitle'
import { NotionRenderer } from 'react-notion'
import styles from '~/src/styles/Guideline.module.scss'

const Guidelines: FC<Content> = (props: Content) => {
  return (
    <Container maxW="container.xl">
      <Box
        as={'section'}
        className={styles.GuideLine}
        style={{ padding: '0 24px' }}
      >
        <SectionTitle enTitle={props.enTitle} jaTitle={props.jaTitle} />
        <Box className={styles.GuideLineCard}>
          <NotionRenderer blockMap={props.pageData} />
        </Box>
      </Box>
    </Container>
  )
}

export default Guidelines
