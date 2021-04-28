import { FC } from 'react'
import {
  Button,
  ButtonProps,
  BackgroundProps,
  ColorProps
} from '@chakra-ui/react'

import styles from '~/src/styles/AppButton.module.scss'

type Props = ButtonProps & {
  href?: string
  isExternal?: boolean
  isOutlined?: boolean
}

const AppButtonRounded: FC<Props> = (props: Props) => {
  const { isExternal, isOutlined, ...otherProps } = props
  const rel = isExternal ? 'noopener noreferrer' : undefined
  const target = isExternal ? '_blank' : undefined

  const fgColor: ColorProps['color'] = isOutlined ? 'brand.indigo' : 'white'
  const bgColor: BackgroundProps['bgColor'] = isOutlined
    ? 'white'
    : 'brand.indigo'

  const hoverBgColor: BackgroundProps['bgColor'] = isOutlined
    ? 'gray.100'
    : '#170f7bcc' // 80% alpha of brand.indigo
  const activeBgColor: BackgroundProps['bgColor'] = isOutlined
    ? 'gray.300'
    : '#170f7b99' // 60% alpha of brand.indigo

  return (
    <Button
      as="a"
      rounded={100}
      bgColor={bgColor}
      borderColor={'brand.indigo'}
      borderWidth={2}
      color={fgColor}
      _hover={{ bgColor: hoverBgColor }}
      _active={{ bgColor: activeBgColor }}
      px={8}
      py={6}
      className={styles.AppRounded}
      rel={rel}
      target={target}
      {...otherProps}
    >
      {props.children}
    </Button>
  )
}

export default AppButtonRounded
