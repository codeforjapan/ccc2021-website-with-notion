import { FC } from 'react'
import { Center } from '@chakra-ui/react'

import AppButtonRounded from '~/src/components/AppButtonRounded'

const IndexLinkTo2020: FC = () => {
  return (
    <Center my={3}>
      <AppButtonRounded
        fontSize={{ base: '0.9rem', sm: '1.2rem' }}
        href="https://docs.google.com/forms/d/e/1FAIpQLSc9524kaYGFonFmKmOEvgSbZMcuNqSXVP3KS9kDkbdrv-OtTQ/viewform?usp=sf_link"
        isExternal
        mr={1}
      >
        エントリーはコチラ！
      </AppButtonRounded>
    </Center>
  )
}

export default IndexLinkTo2020
