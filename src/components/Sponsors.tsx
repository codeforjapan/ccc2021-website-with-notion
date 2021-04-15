import { Content } from '~/src/pages'
import { FC } from 'react'
import { Box, Container } from '@chakra-ui/react'
import SectionTitle from '~/src/components/SectionTitle'

const Sponsors: FC<Content> = (props: Content) => {
  return (
    <Container maxW="container.xl">
      <Box as={'section'} style={{ padding: '0 24px' }}>
        <SectionTitle enTitle={props['EN Name']} jaTitle={props['JP Name']} />
      </Box>
    </Container>
  )
}

export default Sponsors
