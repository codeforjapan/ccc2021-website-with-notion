import { Content } from '~/src/pages'
import { FC } from 'react'
import { Box } from '@chakra-ui/react'
import SectionTitle from '~/src/components/SectionTitle'
import { NotionRenderer } from 'react-notion'
import styles from '~/src/styles/Schedule.module.scss'
const Schedule: FC<Content> = (props: Content) => {
  return (
    <Box
      as={'section'}
      className={styles.Schedule}
      style={{ padding: '0 24px' }}
    >
      <SectionTitle enTitle={props['EN Name']} jaTitle={props['JP Name']} />
      <NotionRenderer blockMap={props.pageData} />
    </Box>
  )
}

export default Schedule
