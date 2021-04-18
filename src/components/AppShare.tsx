import { FC } from 'react'
import { Button, Flex, Icon, IconButton } from '@chakra-ui/react'
import { Twitter } from '@icon-park/react'

const AppShare: FC = () => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} py={'10px'}>
      <IconButton
        aria-label="Twitter Link"
        backgroundColor={'#1DA1F2'}
        color={'white'}
        isRound
        icon={<Icon as={Twitter} theme="filled" />}
      />
      <Button aria-label="Twitter Link" variant="transparent">
        #ccc_u22でシェア！
      </Button>
    </Flex>
  )
}

export default AppShare
