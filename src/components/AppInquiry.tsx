import { FC } from 'react'
import { Flex } from '@chakra-ui/react'
import AppButtonRounded from '~/src/components/AppButtonRounded'

const AppShare: FC = () => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} pb={'24px'}>
      <AppButtonRounded
        href="https://docs.google.com/forms/d/e/1FAIpQLSeMSV1KPCzKGHoq1D9W1TbrEO4hWlZMywTxF__xxYYjbKnCrA/viewform?usp=sf_link"
        isOutlined
        isExternal
      >
        お問い合わせ・取材依頼はこちら
      </AppButtonRounded>
    </Flex>
  )
}

export default AppShare
