import { FC } from 'react'
import { As, Button } from '@chakra-ui/react'

import styles from '~/src/styles/SponsorLogo.module.scss'

type Props = {
  href: string
  image: string
  alt: string
  larger?: boolean
  imageMarginTop?: number // By pixel
}

const SponsorLogo: FC<Props> = (props: Props) => {
  const { larger, imageMarginTop } = props

  // 6rem = 96px, 3.75rem = 60px
  const imageHeight = larger ? '6rem' : '3.75rem'

  // 30rem = 480px, 18.75rem = 300px
  const imageWidth = larger ? '30rem' : '18.75rem'

  const mTopPixel = imageMarginTop || 30 // Default: 1.875rem = 30px
  const marginTop = `${mTopPixel / 16}rem`

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const anchorProps: { as: As<any>; [key: string]: unknown } = props.href
    ? {
        as: 'a',
        rel: 'noopener noreferrer',
        target: '_blank',
        href: props.href
      }
    : { as: 'div' }

  return (
    <Button
      d="flex"
      h="100%"
      bgColor="white"
      rounded={0}
      _hover={{ bgColor: 'gray.100' }}
      _active={{ bgColor: 'gray.200' }}
      _focus={{ boxShadow: 'rgba(112, 112, 112, 0.6) 0px 0px 0px 2px' }}
      p={0}
      m="0.75rem"
      className={styles.SponsorLogo}
      {...anchorProps}
    >
      <img
        src={props.image}
        alt={props.alt}
        style={{
          height: imageHeight,
          width: imageWidth,
          marginTop: marginTop,
          marginBottom: '1.875rem',
          objectFit: 'scale-down'
        }}
      />
    </Button>
  )
}

export default SponsorLogo
