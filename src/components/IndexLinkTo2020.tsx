import { FC } from 'react'
import { Center } from '@chakra-ui/react'

import AppButtonRounded from '~/src/components/AppButtonRounded'

const IndexLinkTo2020: FC = () => {
  return (
    <Center my={3}>
      <AppButtonRounded
        fontSize="1rem"
        href="https://ccc2020.code4japan.org"
        isOutlined
      >
        2020年版はコチラ！
      </AppButtonRounded>
    </Center>
  )
}

export default IndexLinkTo2020
