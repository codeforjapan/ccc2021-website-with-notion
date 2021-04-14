import { Content } from '~/src/pages'
import { FC } from 'react'
import { Box } from '@chakra-ui/react'
import SectionTitle from '~/src/components/SectionTitle'

const Sponsors: FC<Content> = (props: Content) => {
  return (
    <Box as={'section'} style={{ padding: '0 24px' }}>
      <SectionTitle enTitle={props['EN Name']} jaTitle={props['JP Name']} />
    </Box>
  )
}

export default Sponsors
