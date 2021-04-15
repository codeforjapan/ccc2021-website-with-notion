import { Content } from '~/src/pages'
import { FC } from 'react'
import { Box, Container } from '@chakra-ui/react'
import SectionTitle from '~/src/components/SectionTitle'
import { NotionRenderer } from 'react-notion'
import styles from '~/src/styles/Organizer.module.scss'

const Organizer: FC<Content> = (props: Content) => {
  return (
    <Container maxW="container.xl">
      <Box
        as={'section'}
        className={styles.Organizer}
        style={{ padding: '0 24px' }}
      >
        <SectionTitle enTitle={props['EN Name']} jaTitle={props['JP Name']} />
        <NotionRenderer blockMap={props.pageData} />
      </Box>
    </Container>
  )
}

export default Organizer
