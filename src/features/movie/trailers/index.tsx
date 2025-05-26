import type { FunctionComponent } from 'react'
import ExternalLink from '../../../components/external-link'
import { Cluster, Stack } from '../../../components/layouts'
import Spiral from '../../../components/spiral'
import { TMDB_WEBSITE_URL_PREFIX } from '../../../constants'
import { useMovieTrailersQuery } from '../_queries'
import Trailer from './trailer'

const Trailers: FunctionComponent<{
  id: number
}> = ({ id }) => {
  const { data, isPending, isSuccess } = useMovieTrailersQuery(id)

  if (isPending) {
    return <Spiral />
  }

  const tmdbVideosUrl = `${TMDB_WEBSITE_URL_PREFIX}/movie/${id}/videos`

  return (
    <Stack>
      <h2 className="text-2xl prose dark:prose-invert">
        <ExternalLink href={tmdbVideosUrl}>View all</ExternalLink>
      </h2>
      <Cluster space="gap-10">
        {isSuccess && data ? (
          data.map?.((t) => {
            return <Trailer key={t.key} data={t} />
          })
        ) : (
          <span> No Trailers</span>
        )}
      </Cluster>
    </Stack>
  )
}

export default Trailers
