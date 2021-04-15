import { Content } from '~/src/pages'
import { FC } from 'react'
import { Box, Container } from '@chakra-ui/react'
import SectionTitle from '~/src/components/SectionTitle'
import { NotionRenderer } from 'react-notion'
import styles from '~/src/styles/PersonalSponsors.module.scss'

const PersonalSponsors: FC<Content> = (props: Content) => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box
        as={'section'}
        className={styles.PersonalSponsors}
        style={{ padding: '0 24px' }}
      >
        <SectionTitle enTitle={props['EN Name']} jaTitle={props['JP Name']} />
        <NotionRenderer blockMap={props.pageData} />
      </Box>
    </Container>
  )
}

export default PersonalSponsors
