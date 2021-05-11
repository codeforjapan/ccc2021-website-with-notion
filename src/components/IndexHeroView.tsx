import { FC } from 'react'
import { NotionRenderer } from 'react-notion'
import { Box, Flex, Spacer, Text } from '@chakra-ui/react'

import { Content } from '~/src/pages'
import AppButtonApplicationForm from '~/src/components/AppButtonApplicationForm'
import styles from '~/src/styles/Header.module.scss'

type Props = Content & {
  showApplicationButton: boolean
}

const IndexHeroView: FC<Props> = (props: Props) => {
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
            <Text className={styles.TitleLine}>
              Cup&nbsp;<span className={styles.TitleLineSmaller}>2021</span>
            </Text>
          </div>
        </Flex>
        <Spacer />
        {props.showApplicationButton && <AppButtonApplicationForm />}
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
