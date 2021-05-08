import { FC } from 'react'
import { Box, Flex, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

import styles from '~/src/styles/Footer.module.scss'

const AppFooter: FC = () => {
  return (
    <Box className={styles.Footer}>
      <Flex
        as="footer"
        align="center"
        justify="center"
        wrap="wrap"
        bg="transparent"
        color="black"
        height="3.75rem"
      >
        <Link href="https://www.code4japan.org/privacy-policy" isExternal>
          Privacy Policy
        </Link>
        ・
        <Link as={NextLink} href="/analytics" passHref>
          Google Analyticsについて
        </Link>
        ・
        <span>
          &copy;&nbsp;2021&nbsp;
          <Link
            href="https://www.code4japan.org/"
            isExternal
            pl={1}
            textAlign="right"
          >
            Code&nbsp;for&nbsp;Japan
          </Link>
        </span>
      </Flex>
    </Box>
  )
}

export default AppFooter
