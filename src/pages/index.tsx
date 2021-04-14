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
import { BlockMapType } from 'react-notion'
import { Box } from '@chakra-ui/react'
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
  | string

export interface Content {
  id: string
  Type: ContentType
  Sponsors?: string[]
  'Coming Soon'?: boolean
  'JP Name'?: string
  'EN Name': string
  pageData: BlockMapType
}

interface Props {
  contents: Content[]
}

export const getStaticProps = async () => {
  const res = await fetch(
    'https://notion-api.splitbee.io/v1/table/' +
      process.env.NEXT_PUBLIC_INDEX_DB_ID,
    // process.env.APIURL ? process.env.APIURL : 'https://strapi.palettte.dev/graphql',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )

  const SiteSettingsJson: Content[] = await res.json()
  const ContentsPromise = SiteSettingsJson.map((content) => {
    return fetch('https://notion-api.splitbee.io/v1/page/' + content.id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        return {
          ...content,
          pageData: json
        }
      })
  })
  const Contents = await Promise.all(ContentsPromise)
  return {
    props: {
      contents: Contents
    },
    revalidate: 1
  }
}

const IndexPage = ({ contents }: Props) => {
  return (
    <Box className={styles.Index}>
      {contents.map((content) => {
        switch (content.Type) {
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
          default:
            return (
              <section key={content.id}>
                <SectionTitle
                  enTitle={content['EN Name']}
                  jaTitle={content['JP Name']}
                />
                <NotionRenderer blockMap={content.pageData} />
              </section>
            )
        }
      })}
    </Box>
  )
}

export default IndexPage
