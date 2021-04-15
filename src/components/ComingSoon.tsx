import { FC } from 'react'
import { Flex } from '@chakra-ui/react'
import styles from '~/src/styles/ComingSoon.module.scss'

const ComingSoon: FC = () => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'}>
      <span className={styles.ComingSoon}>Coming Soon</span>
    </Flex>
  )
}

export default ComingSoon
