import { FC } from 'react'
import { Flex } from '@chakra-ui/react'

import styles from '~/src/styles/GhostText.module.scss'

const AppComingSoon: FC = () => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} mt={6}>
      <span className={styles.GhostText}>And More</span>
    </Flex>
  )
}

export default AppComingSoon
