import { Content } from '~/src/pages'
import { FC } from 'react'
import { NotionRenderer } from 'react-notion'
import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react'
import styles from '~/src/styles/Header.module.scss'

const HeroView: FC<Content> = (props: Content) => {
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
        <Button rounded={100} mr={4} bgColor={'brand.indigo'} color={'white'}>
          エントリー受付中！
        </Button>
      </Flex>
      <Box className={styles.FirstViewContain}>
        <img src="/CCCLogo.svg" className={styles.Logo} />
        <Box className={styles.FirstViewCard}>
          <NotionRenderer blockMap={props.pageData} />
        </Box>
      </Box>
    </Box>
  )
}

export default HeroView
