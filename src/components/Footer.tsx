import { FC } from 'react'
import { Box, Flex, Spacer, Link } from '@chakra-ui/react'
import styles from '~/src/styles/Footer.module.scss'

const Footer: FC = () => {
  return (
    <Box className={styles.FirstView}>
      <Flex
        as="footer"
        align="center"
        justify="center"
        wrap="wrap"
        bg="transparent"
        color="black"
        height="60px"
      >
        <Link
          className={styles.PrivacyPolicy}
          href="https://www.code4japan.org/privacy-policy"
          isExternal
          rel="noopener"
        >
          Privacy Policy
        </Link>
        {/* <a
          className="Privacy-Policy"
          href="https://www.code4japan.org/privacy-policy"
        >
          Privacy Policy
        </a> */}
        <Spacer width="50px" flex="0 0 50px" />
        <span className={styles.CodeForJapan}>
          &copy;&nbsp;2021&nbsp;Code&nbsp;for&nbsp;Japan
        </span>
      </Flex>
    </Box>
  )
}

export default Footer
