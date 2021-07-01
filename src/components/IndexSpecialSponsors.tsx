import { FC } from 'react'
import { Box, Container, Flex } from '@chakra-ui/react'

import { Content } from '~/src/pages'
import AppSectionTitle from '~/src/components/AppSectionTitle'
import AppAndMore from './AppAndMore'
import SponsorLogo from './SponsorLogo'

const IndexSpecialSponsors: FC<Content> = (props: Content) => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box as={'section'} bgColor="white" p={6}>
        <AppSectionTitle enTitle={props.enTitle} jaTitle={props.jaTitle} />
        <Flex direction="row" flexWrap="wrap" justifyContent="space-evenly">
          <SponsorLogo
            image="/images/sp-aws.png"
            href="https://aws.amazon.com/jp/"
            alt="aws"
            larger
          />
          <SponsorLogo
            image="/images/sp-creatures.svg"
            href="https://www.creatures.co.jp/"
            alt="Creatures"
            larger
          />
          {/* Insert <SponsorLogo /> here */}
        </Flex>
        <AppAndMore />
      </Box>
    </Container>
  )
}

export default IndexSpecialSponsors
