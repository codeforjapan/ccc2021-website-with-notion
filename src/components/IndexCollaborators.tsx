import { FC } from 'react'
import { Box, Container, Flex } from '@chakra-ui/react'

import { Content } from '~/src/pages'
import AppSectionTitle from '~/src/components/AppSectionTitle'
import AppComingSoon from '~/src/components/AppComingSoon'
import AppAndMore from '~/src/components/AppAndMore'
import SponsorLogo from '~/src/components/SponsorLogo'

const IndexCollaborators: FC<Content> = (props: Content) => {
  const bgColor = props.showComingSoon ? 'transparent' : 'white'
  return (
    <Container maxW="container.xl" py={10}>
      <Box as={'section'} bgColor={bgColor} p={6}>
        <AppSectionTitle enTitle={props.enTitle} jaTitle={props.jaTitle} />
        {props.showComingSoon ? (
          <AppComingSoon />
        ) : (
          <Flex direction="row" flexWrap="wrap" justifyContent="space-evenly">
            {
              <SponsorLogo
                image="/images/collab-waffle.png"
                href="https://waffle-waffle.org/"
              />
              /* Insert <SponsorLogo /> here */
            }
          </Flex>
        )}

        {props.showAndMore && <AppAndMore />}
      </Box>
    </Container>
  )
}

export default IndexCollaborators
