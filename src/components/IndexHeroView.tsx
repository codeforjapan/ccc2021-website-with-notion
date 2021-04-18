import { FC } from 'react'
import { NotionRenderer } from 'react-notion'
import { Box, Flex, Spacer, Text } from '@chakra-ui/react'

import { Content } from '~/src/pages'
import styles from '~/src/styles/Header.module.scss'

const IndexHeroView: FC<Content> = (props: Content) => {
  return (
    <Box className={styles.FirstView}>
      <Flex
        as="header"
        align="center"
        justify="space-between"
        wrap="wrap"
        bg="transparent"
        color="black"
        height="60px"
      >
        <Flex align="center" ml={5}>
          <div className={styles.Title}>
            <Text className={styles.TitleLine}>Civictech</Text>
            <Text className={styles.TitleLine}>Challenge</Text>
            <Text className={styles.TitleLine}>Cup</Text>
          </div>
        </Flex>
        <Spacer />
        {/* <Button
          rounded={100}
          mr={4}
          bgColor={'brand.indigo'}
          color={'white'}
          disabled
          _hover={{ bgColor: 'brand.indigo' }}
        >
          エントリー
        </Button> */}
      </Flex>
      <Box className={styles.FirstViewContain}>
        <img src="/ccc-logo.svg" className={styles.Logo} />
        <Box className={styles.FirstViewCard}>
          <NotionRenderer blockMap={props.pageData} />
        </Box>
      </Box>
    </Box>
  )
}

export default IndexHeroView
