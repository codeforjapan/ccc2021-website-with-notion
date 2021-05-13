import { FC } from 'react'
import { Flex } from '@chakra-ui/react'

import styles from '~/src/styles/GhostText.module.scss'

const AppComingSoon: FC = () => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'}>
      <span className={styles.GhostText}>And More</span>
    </Flex>
  )
}

export default AppComingSoon
