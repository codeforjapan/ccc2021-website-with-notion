import { BlockMapType } from 'react-notion'
import { Box, Container } from '@chakra-ui/react'
import { NotionRenderer } from 'react-notion/dist'
import styles from '~/src/styles/index.module.scss'

import IndexAwards from '~/src/components/IndexAwards'
import IndexExaminationCriteria from '~/src/components/IndexExaminationCriteria'
import IndexGuidelines from '~/src/components/IndexGuidelines'
import IndexHeroView from '~/src/components/IndexHeroView'
import IndexNewsList from '~/src/components/IndexNewsList'
import IndexOrganizer from '~/src/components/IndexOrganizer'
import IndexPersonalSponsors from '~/src/components/IndexPersonalSponsors'
import IndexSchedule from '~/src/components/IndexSchedule'
import IndexSpecialSponsors from '~/src/components/IndexSpecialSponsors'
import IndexSponsors from '~/src/components/IndexSponsors'
import IndexThemeSample from '~/src/components/IndexThemeSample'
import AppSectionTitle from '~/src/components/AppSectionTitle'
import AppFooter from '~/src/components/AppFooter'
import AppShare from '~/src/components/AppShare'

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
  if (!process.env.NEXT_PUBLIC_INDEX_DB_ID) {
    throw new Error('database not specified')
  }
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
            return <AppShare key={content.id} />
          case 'Header':
            return undefined
          case 'HeroView':
            return <IndexHeroView {...content} key={content.id} />
          case 'Theme Samples':
            return <IndexThemeSample {...content} key={content.id} />
          case 'Examination Criteria':
            return <IndexExaminationCriteria {...content} key={content.id} />
          case 'Awards':
            return <IndexAwards {...content} key={content.id} />
          case 'Guidelines':
            return <IndexGuidelines {...content} key={content.id} />
          case 'Schedule':
            return <IndexSchedule {...content} key={content.id} />
          case 'Special Sponsors':
            return <IndexSpecialSponsors {...content} key={content.id} />
          case 'Sponsors':
            return <IndexSponsors {...content} key={content.id} />
          case 'Personal Sponsors':
            return <IndexPersonalSponsors {...content} key={content.id} />
          case 'Organizer':
            return <IndexOrganizer {...content} key={content.id} />
          case 'Footer':
            return <AppFooter key={content.id} />
          case 'NewsList':
            return <IndexNewsList {...content} key={content.id} />
          default:
            return (
              <Container maxW="container.xl" py={10} key={content.id}>
                <Box as={'section'} style={{ padding: '0 24px' }}>
                  <AppSectionTitle
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
