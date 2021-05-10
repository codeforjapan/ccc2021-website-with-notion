import { FC } from 'react'
import { Box, Container } from '@chakra-ui/react'
import { NotionRenderer } from 'react-notion'

import AppSectionTitle from '~/src/components/AppSectionTitle'
import { Content } from '~/src/pages'
import AppButtonApplicationForm from '~/src/components/AppButtonApplicationForm'
import styles from '~/src/styles/Guideline.module.scss'

const IndexGuidelines: FC<Content> = (props: Content) => {
  return (
    <Container maxW="container.xl">
      <Box
        as={'section'}
        className={styles.GuideLine}
        style={{ padding: '0 24px' }}
      >
        <AppSectionTitle enTitle={props.enTitle} jaTitle={props.jaTitle} />
        <Box className={styles.GuideLineCard}>
          <NotionRenderer blockMap={props.pageData} />
        </Box>
        <AppButtonApplicationForm />
      </Box>
    </Container>
  )
}

export default IndexGuidelines
