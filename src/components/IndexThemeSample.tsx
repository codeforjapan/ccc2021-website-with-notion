import { FC } from 'react'
import { Box, Container } from '@chakra-ui/react'

import { Content } from '~/src/pages'
import AppSectionTitle from '~/src/components/AppSectionTitle'

const IndexThemeSample: FC<Content> = (props: Content) => {
  return (
    <Container maxW="container.xl">
      <Box as={'section'} style={{ padding: '0 24px' }}>
        <AppSectionTitle enTitle={props.enTitle} jaTitle={props.jaTitle} />
      </Box>
    </Container>
  )
}

export default IndexThemeSample
