import { FC } from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'

import styles from '~/src/styles/AppButton.module.scss'

type Props = ButtonProps & {
  href?: string
  isExternal?: boolean
}

const AppButtonRounded: FC<Props> = (props: Props) => {
  const rel = props.isExternal ? 'noopener noreferrer' : undefined
  const target = props.isExternal ? '_blank' : undefined

  delete props.isExternal
  return (
    <Button
      as="a"
      rounded={100}
      bgColor={'brand.indigo'}
      borderColor={'brand.indigo'}
      borderWidth={2}
      color={'white'}
      _hover={{ bgColor: '#170f7bcc' }}
      _active={{ bgColor: '#170f7b99' }}
      px={8}
      py={6}
      className={styles.AppRounded}
      rel={rel}
      target={target}
      {...props}
    >
      {props.children}
    </Button>
  )
}

export default AppButtonRounded
