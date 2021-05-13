import { FC } from 'react'
import { Box, Container } from '@chakra-ui/react'

import { Content } from '~/src/pages'
import AppSectionTitle from '~/src/components/AppSectionTitle'
import AppComingSoon from '~/src/components/AppComingSoon'

const IndexSponsors: FC<Content> = (props: Content) => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box as={'section'} style={{ padding: '0 24px' }}>
        <AppSectionTitle enTitle={props.enTitle} jaTitle={props.jaTitle} />
        {props.showComingSoon && <AppComingSoon />}
      </Box>
    </Container>
  )
}

export default IndexSponsors
