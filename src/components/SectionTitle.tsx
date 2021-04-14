import { FC } from 'react'
import { Box, Heading } from '@chakra-ui/react'

interface Props {
  enTitle: string
  jaTitle?: string
}

const SectionTitle: FC<Props> = (props: Props) => {
  return (
    <Box textAlign="left">
      <Heading
        color={'brand.indigo'}
        fontFamily={'brand.enTitle'}
        fontSize={{ base: '2.4rem', md: '55px' }}
        fontWeight={'800'}
        letterSpacing={'-0.8px'}
        lineHeight={1.33}
      >
        {props.enTitle}
      </Heading>
      <Heading
        color={'brand.indigo'}
        fontFamily={'brand.jaTitle'}
        fontSize={'20px'}
        fontWeight={'700'}
        letterSpacing={'normal'}
        lineHeight={2.33}
      >
        {props.jaTitle}
      </Heading>
    </Box>
  )
}

export default SectionTitle
