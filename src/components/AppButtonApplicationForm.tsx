import { FC } from 'react'
import { Button, Center } from '@chakra-ui/react'

import styles from '~/src/styles/AppButton.module.scss'

const IndexLinkTo2020: FC = () => {
  return (
    <Center my={3}>
      <Button
        rounded={100}
        disabled
        px={8}
        py={6}
        className={styles.AppRounded}
        _disabled={{
          opacity: 1,
          cursor: 'default'
        }}
        _hover={{}}
      >
        エントリーは終了しました
      </Button>
    </Center>
  )
}

export default IndexLinkTo2020
