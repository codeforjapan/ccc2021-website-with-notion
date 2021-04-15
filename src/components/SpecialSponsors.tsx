import { Content } from '~/src/pages'
import { FC } from 'react'
import { Box, Container } from '@chakra-ui/react'
import SectionTitle from '~/src/components/SectionTitle'
import ComingSoon from '~/src/components/ComingSoon'

const SpecialSponsors: FC<Content> = (props: Content) => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box as={'section'} style={{ padding: '0 24px' }}>
        <SectionTitle enTitle={props['EN Name']} jaTitle={props['JP Name']} />
        {props['Coming Soon'] && <ComingSoon />}
      </Box>
    </Container>
  )
}

export default SpecialSponsors
