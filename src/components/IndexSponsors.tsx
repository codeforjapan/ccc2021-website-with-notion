import { FC } from 'react'
import { Box, Container, Flex } from '@chakra-ui/react'

import { Content } from '~/src/pages'
import AppSectionTitle from '~/src/components/AppSectionTitle'
import AppComingSoon from '~/src/components/AppComingSoon'
import AppAndMore from '~/src/components/AppAndMore'
import SponsorLogo from '~/src/components/SponsorLogo'
import SponsorLogoSalesforce from '~/src/components/SponsorLogoSalesforce'

const IndexSponsors: FC<Content> = (props: Content) => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box as={'section'} bgColor="white" p={6}>
        <AppSectionTitle enTitle={props.enTitle} jaTitle={props.jaTitle} />
        {props.showComingSoon ? (
          <AppComingSoon />
        ) : (
          <Flex direction="row" flexWrap="wrap" justifyContent="space-evenly">
            <SponsorLogoSalesforce
              href="https://www.salesforce.com/jp/"
              image="/images/sp-salesforce.svg"
              alt="Salesforce"
            />
            <SponsorLogo
              image="/images/sp-udtalk.svg"
              href="https://udtalk.jp/"
              alt="UDトーク"
            />
            <SponsorLogo
              href="https://tryt-group.co.jp/"
              image="/images/sp-tryt.png"
              alt="Tryt"
            />
            <SponsorLogo
              image="/images/sp-plaid.png"
              href="https://plaid.co.jp/"
              alt="plaid"
            />
            <SponsorLogo
              href="https://goodpatch.com/"
              image="/images/sp-goodpatch.png"
              alt="Goodpatch"
            />
            <SponsorLogo
              href="https://www.yahoo.co.jp/"
              image="/images/sp-yahoo!japan.svg"
              alt="Yahoo!Japan"
            />
            <SponsorLogo
              href="https://www.google.co.jp/"
              image="/images/sp-google.svg"
              alt="Google"
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
