import { FC } from 'react'
import { Box, Container } from '@chakra-ui/react'
import YouTube from 'react-youtube'

import styles from '~/src/styles/FinalReviewVideo.module.scss'

const IndexAwards: FC = () => {
  return (
    <Container maxW="container.xl">
      <Box
        as={'section'}
        className={styles.FinalReviewVideo}
        style={{ padding: '0 24px' }}
      >
        <Box textAlign="center" pb={2} fontSize="1.1rem">
          最終審査会の様子はこちらからご覧いただけます
        </Box>
        <YouTube
          videoId="PB4Wg-y1JrI"
          className={styles.FinalReviewVideoItem}
          containerClassName={styles.FinalReviewVideoOuter}
          opts={{ height: '', width: '' }}
        />
      </Box>
    </Container>
  )
}

export default IndexAwards
