import ExaminationCriteria from '~/src/components/ExaminationCriteria'
import SectionTitle from '~/src/components/SectionTitle'
import HeroView from '~/src/components/HeroView'
import ThemeSample from '~/src/components/ThemeSample'
import Awards from '~/src/components/Awards'
import Guidelines from '~/src/components/Guidelines'
import Schedule from '~/src/components/Schedule'
import SpecialSponsors from '~/src/components/SpecialSponsors'
import Sponsors from '~/src/components/Sponsors'
import PersonalSponsors from '~/src/components/PersonalSponsors'
import Organizer from '~/src/components/Organizer'
import Footer from '~/src/components/Footer'
import NewsList from '~/src/components/NewsList'

import { BlockMapType } from 'react-notion'
import { Box, Container } from '@chakra-ui/react'
import { NotionRenderer } from 'react-notion/dist'
import styles from '~/src/styles/index.module.scss'
import Share from '~/src/components/Share'

type ContentType =
  | 'Header'
  | 'HeroView'
  | 'Share'
  | 'Theme Samples'
  | 'Examination Criteria'
  | 'Awards'
  | 'Guidelines'
  | 'Schedule'
  | 'Special Sponsors'
  | 'Sponsors'
  | 'Personal Sponsors'
  | 'Organizer'
  | 'Footer'
  | 'NewsList'
  | string

export interface Content {
  // Auto-generated ID
  id: string

  // Data from `Contents` table
  enTitle: string
  jaTitle?: string
  type: ContentType
  Sponsors?: string[]
  isComingSoon?: boolean
  isHidden?: boolean
  itemDatabaseId?: string

  // Data of the page of each item
  pageData: BlockMapType

  // Data from the other table that an item linked to
  linkedItems?: unknown[]
}

interface Props {
  contents: Content[]
}

function getNotionData(type: string, id: string) {
  return fetch(`https://notion-api.splitbee.io/v1/${type}/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const getStaticProps = async () => {
  const indexContentsResponse = await getNotionData(
    'table',
    process.env.NEXT_PUBLIC_INDEX_DB_ID || ''
  )

  const indexContents: Content[] = await indexContentsResponse.json()
  const contentsPromises = indexContents
    .filter((c) => !c.isHidden)
    .map(async (content) => {
      const pageDataResponse = await getNotionData('page', content.id)
      const pageData = (await pageDataResponse.json()) as BlockMapType

      if (content.itemDatabaseId) {
        const itemsResponse = await getNotionData(
          'table',
          content.itemDatabaseId
        )
        const linkedItems = await itemsResponse.json()
        return {
          ...content,
          pageData,
          linkedItems
        }
      }
      return {
        ...content,
        pageData
      }
    })
  const contents = await Promise.all(contentsPromises)

  return {
    props: {
      contents
    },
    revalidate: 1
  }
}

const IndexPage = ({ contents }: Props) => {
  return (
    <Box className={styles.Index}>
      {contents.map((content) => {
        switch (content.type) {
          case 'Share':
            return <Share key={content.id} />
          case 'Header':
            return undefined
          case 'HeroView':
            return <HeroView {...content} key={content.id} />
          case 'Theme Samples':
            return <ThemeSample {...content} key={content.id} />
          case 'Examination Criteria':
            return <ExaminationCriteria {...content} key={content.id} />
          case 'Awards':
            return <Awards {...content} key={content.id} />
          case 'Guidelines':
            return <Guidelines {...content} key={content.id} />
          case 'Schedule':
            return <Schedule {...content} key={content.id} />
          case 'Special Sponsors':
            return <SpecialSponsors {...content} key={content.id} />
          case 'Sponsors':
            return <Sponsors {...content} key={content.id} />
          case 'Personal Sponsors':
            return <PersonalSponsors {...content} key={content.id} />
          case 'Organizer':
            return <Organizer {...content} key={content.id} />
          case 'Footer':
            return <Footer key={content.id} />
          case 'NewsList':
            return <NewsList {...content} key={content.id} />
          default:
            return (
              <Container maxW="container.xl" py={10} key={content.id}>
                <Box as={'section'} style={{ padding: '0 24px' }}>
                  <SectionTitle
                    enTitle={content.enTitle}
                    jaTitle={content.jaTitle}
                  />
                  <NotionRenderer blockMap={content.pageData} />
                </Box>
              </Container>
            )
        }
      })}
    </Box>
  )
}

export default IndexPage
