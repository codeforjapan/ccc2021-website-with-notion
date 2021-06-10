import { FC } from 'react'
import { Box, Container, Flex } from '@chakra-ui/react'

import { Content } from '~/src/pages'
import AppSectionTitle from '~/src/components/AppSectionTitle'
import AppComingSoon from '~/src/components/AppComingSoon'
import AppAndMore from '~/src/components/AppAndMore'
import SponsorLogo from '~/src/components/SponsorLogo'

const IndexCollaborators: FC<Content> = (props: Content) => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box as={'section'} bgColor="white" p={6}>
        <AppSectionTitle enTitle={props.enTitle} jaTitle={props.jaTitle} />
        {props.showComingSoon ? (
          <AppComingSoon />
        ) : (
          <Flex direction="row" flexWrap="wrap" justifyContent="space-evenly">
            <SponsorLogo
              image="/images/collab-jubilo-itawa.min.svg"
              href="https://www.jubilo-iwata.co.jp/hometown/"
              alt="ジュビロ磐田"
            />
            <SponsorLogo
              href="https://www.yokohamafc.com/"
              image="/images/collab-yokohama-fc.svg"
              alt="Yokohama FC"
            />
            <SponsorLogo
              image="/images/collab-matsumoto-yamaga.png"
              href="https://www.yamaga-fc.com/"
              alt="松本山雅FC"
            />
            <SponsorLogo
              image="/images/collab-waffle.png"
              href="https://waffle-waffle.org/"
              alt="waffle"
            />
            <SponsorLogo
              image="/images/collab-codeforyokohama.svg"
              href="https://code4.yokohama/"
              alt="Code for Yokohama"
            />
            {/* Insert <SponsorLogo /> here */}
          </Flex>
        )}

        {props.showAndMore && <AppAndMore />}
      </Box>
    </Container>
  )
}

export default IndexCollaborators
