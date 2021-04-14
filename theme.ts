import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      indigo: '#170f7b',
      success: '#1EC95F',
      danger: '#F24D24',
      warning: '#E2DF22',
      info: '#249FF2'
    }
  },
  fonts: {
    brand: {
      enTitle: 'Spartan, sans-serif',
      jaTitle: 'Noto Sans JP, sans-serif'
    },
    body: 'Spartan, Noto Sans JP, sans-serif',
    heading: 'Spartan, Noto Sans JP, sans-serif',
    mono: 'Spartan, Noto Sans JP, sans-serif'
  }
})

export default theme
