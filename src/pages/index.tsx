import Head from 'next/head'
import { BlockMapType } from 'react-notion'
import { Box, Container } from '@chakra-ui/react'
import { NotionRenderer } from 'react-notion/dist'
import styles from '~/src/styles/index.module.scss'

import IndexAwards from '~/src/components/IndexAwards'
import IndexExaminationCriteria from '~/src/components/IndexExaminationCriteria'
import IndexGuidelines from '~/src/components/IndexGuidelines'
import IndexHeroView from '~/src/components/IndexHeroView'
import IndexLinkTo2020 from '~/src/components/IndexLinkTo2020'
import IndexNewsList from '~/src/components/IndexNewsList'
import IndexOrganizer from '~/src/components/IndexOrganizer'
import IndexPersonalSponsors from '~/src/components/IndexPersonalSponsors'
import IndexSchedule from '~/src/components/IndexSchedule'
import IndexSpecialSponsors from '~/src/components/IndexSpecialSponsors'
import IndexSponsors from '~/src/components/IndexSponsors'
import IndexThemeSample from '~/src/components/IndexThemeSample'
import AppSectionTitle from '~/src/components/AppSectionTitle'
import AppFooter from '~/src/components/AppFooter'
import AppInquiry from '~/src/components/AppInquiry'
import AppShare from '~/src/components/AppShare'

const contentTypes = [
  'Header',
  'HeroView',
  'Share',
  'Theme Samples',
  'Examination Criteria',
  'Awards',
  'Guidelines',
  'Schedule',
  'Special Sponsors',
  'Sponsors',
  'Personal Sponsors',
  'Organizer',
  'Footer',
  'NewsList',
  'LinkTo2020',
  'Inquiry'
] as const

type ContentType = typeof contentTypes[number]

function isContentType(target: string): target is ContentType {
  return (contentTypes as readonly string[]).includes(target)
}

type Status = 'showComingSoon' | 'showAndMore'

export interface Content {
  // Auto-generated ID
  id: string

  // Data from `Contents` table
  enTitle: string
  jaTitle?: string
  type: ContentType | string
  Sponsors?: string[]
  isComingSoon?: boolean
  isHidden?: boolean
  itemDatabaseId?: string
  additionalText?: string
  status?: Status

  // Flag calculated by status
  showComingSoon?: boolean
  showAndMore?: boolean

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

      let showComingSoon = false
      let showAndMore = false

      if (content.status) {
        showComingSoon = content.status === 'showComingSoon'
        showAndMore = content.status === 'showAndMore'
      }

      return {
        ...content,
        pageData,
        showComingSoon,
        showAndMore
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
  const pageTitle = 'Civictech Challenge Cup 2021'

  const guidelines = contents.find((c) => c.type === 'Guidelines')
  const showApplicationButton = guidelines ? !guidelines.isHidden : false

  return (
    <Box className={styles.Index}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="apple-mobile-web-app-title" content={pageTitle} />
        <meta property="og:title" content={pageTitle} />
      </Head>
      {contents.map((content) => {
        if (!isContentType(content.type)) {
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

        switch (content.type) {
          case 'Share':
            return <AppShare key={content.id} />
          case 'Header':
            return undefined
          case 'HeroView':
            return (
              <IndexHeroView
                {...content}
                key={content.id}
                showApplicationButton={showApplicationButton}
              />
            )
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
          case 'LinkTo2020':
            return <IndexLinkTo2020 key={content.id} />
          case 'Inquiry':
            return <AppInquiry key={content.id} />
          default:
            // eslint-disable-next-line no-case-declarations
            const _throwError: never = content.type
            // The line above will throw a TS error when a new ContentType is
            // added to the declaration but the corresponding implementation
            // is not added to this switch statement.
            return _throwError
        }
      })}
    </Box>
  )
}

export default IndexPage
