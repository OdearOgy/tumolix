import type { FunctionComponent } from 'react'
import DefaultLoader from '../../../components/default-loader'
import ExternalLink from '../../../components/external-link'
import { Cluster, Stack } from '../../../components/layouts'
import { TMDB_WEBSITE_URL_PREFIX } from '../../../constants'
import { useMovieCastQuery } from '../_queries'
import Actor from './actor'
import styles from './index.module.css'

const Cast: FunctionComponent<{
  id: number
}> = ({ id }) => {
  const { data, isFetching, isSuccess } = useMovieCastQuery(id)

  if (isFetching) {
    return <DefaultLoader />
  }

  const tmdbCastUrl = `${TMDB_WEBSITE_URL_PREFIX}/movie/${id}/cast`

  return data && isSuccess ? (
    <Stack space="0" className={styles.cast}>
      <Cluster space="0" align="items-end">
        {data?.map((a) => {
          return <Actor key={a.id} data={a} />
        })}
      </Cluster>
      <ExternalLink href={tmdbCastUrl}>View Full Cast</ExternalLink>
    </Stack>
  ) : (
    'No Cast'
  )
}

export default Cast
