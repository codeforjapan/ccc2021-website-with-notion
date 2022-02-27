import { FC } from 'react'
import { Center } from '@chakra-ui/react'

import AppButtonRounded from '~/src/components/AppButtonRounded'

const IndexLinkTo2020: FC = () => {
  return (
    <Center pt={8}>
      <AppButtonRounded
        fontSize="1rem"
        href="https://ccc2020.code4japan.org"
        isOutlined
        isExternal
      >
        2020年の様子もあわせてチェック！
      </AppButtonRounded>
    </Center>
  )
}

export default IndexLinkTo2020
