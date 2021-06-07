import { FC } from 'react'
import { Box, Container, Flex } from '@chakra-ui/react'

import { Content } from '~/src/pages'
import AppSectionTitle from '~/src/components/AppSectionTitle'
import AppComingSoon from '~/src/components/AppComingSoon'
import AppAndMore from '~/src/components/AppAndMore'
import SponsorLogo from '~/src/components/SponsorLogo'

const IndexSponsors: FC<Content> = (props: Content) => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box as={'section'} bgColor="white" p={6}>
        <AppSectionTitle enTitle={props.enTitle} jaTitle={props.jaTitle} />
        {props.showComingSoon ? (
          <AppComingSoon />
        ) : (
          <Flex direction="row" flexWrap="wrap" justifyContent="space-evenly">
            <SponsorLogo
              image="/images/sp-udtalk.svg"
              href="https://udtalk.jp/"
            />
            <SponsorLogo
              image="/images/sp-plaid.png"
              href="https://plaid.co.jp/"
              alt="plaid"
            />
            {/* Insert <SponsorLogo /> here */}
          </Flex>
        )}

        {props.showAndMore && <AppAndMore />}
      </Box>
    </Container>
  )
}

export default IndexSponsors
