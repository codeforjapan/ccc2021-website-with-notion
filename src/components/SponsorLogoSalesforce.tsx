import { FC } from 'react'
import { As, Button } from '@chakra-ui/react'

import styles from '~/src/styles/SponsorLogo.module.scss'

type Props = {
  href: string
  image: string
}

const SponsorLogoSalesforce: FC<Props> = (props: Props) => {
  // 6rem = 96px, 3.75rem = 60px
  const imageHeight = '5.5rem'

  // 30rem = 480px, 18.75rem = 300px
  const imageWidth = '18.75rem'

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
        style={{
          height: imageHeight,
          width: imageWidth,
          marginTop: '1rem',
          marginBottom: '1rem',
          objectFit: 'scale-down'
        }}
      />
    </Button>
  )
}

export default SponsorLogoSalesforce
