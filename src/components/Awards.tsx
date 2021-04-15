import { Content } from '~/src/pages'
import { FC } from 'react'
import { Box, Container } from '@chakra-ui/react'
import SectionTitle from '~/src/components/SectionTitle'
import { NotionRenderer } from 'react-notion'
import style from '~/src/styles/Awards.module.scss'

const Awards: FC<Content> = (props: Content) => {
  return (
    <Container maxW="container.xl">
      <Box as={'section'} className={style.Award} style={{ padding: '0 24px' }}>
        <SectionTitle enTitle={props.enTitle} jaTitle={props.jaTitle} />
        <NotionRenderer blockMap={props.pageData} />
      </Box>
    </Container>
  )
}

export default Awards
