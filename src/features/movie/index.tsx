import {
  ClockIcon,
  CurrencyDollarIcon,
  GlobeAmericasIcon,
  StarIcon,
} from '@heroicons/react/24/solid'
import { useParams } from '@tanstack/react-router'
import { BackdropSize, PosterSize, type MovieDetails } from 'tmdb-ts'
import { Button, CustomImage } from '../../components'
import { Cluster, Stack } from '../../components/layouts'
import { TMDB_IMAGE_URL_PREFIX } from '../../constants'
import { formatCurrency } from '../../utils/format-currency'
import { formatRuntime } from '../../utils/format-runtime'
import InfoItem from './_components/info-item'
import { useMovieDetailsQuery } from './_queries'
import Cast from './cast'
import styles from './index.module.css'

const Movie = () => {
  const { id } = useParams({ from: '/movie/$id' })
  const { data, isPending, isError } = useMovieDetailsQuery(Number(id) || 0)

  if (isPending) {
    return <div>loading</div>
  }

  if (isError) {
    return <div>error</div>
  }

  const {
    poster_path,
    backdrop_path,
    title,
    release_date,
    vote_average,
    genres,
    runtime,
    overview,
    original_language,
    spoken_languages,
    budget,
    revenue,
  } = data as MovieDetails

  const posterUrl = `${TMDB_IMAGE_URL_PREFIX}/${PosterSize.W780}${poster_path}`
  const backdropUrl = `${TMDB_IMAGE_URL_PREFIX}/${BackdropSize.ORIGINAL}${backdrop_path}`

  const language =
    spoken_languages.find((l) => l.iso_639_1.includes(original_language))?.name ?? 'English'

  return (
    <div className={styles.wrapper}>
      <div className={styles.backdrop}>
        <CustomImage src={backdropUrl} loading="lazy" />
      </div>

      <Cluster className={styles.details} space="gap-10">
        <div className={styles.poster}>
          <CustomImage src={posterUrl} loading="eager" alt={title} />
        </div>

        <div className={styles.info}>
          <Stack space="0" className={styles.content}>
            <h1>{title}</h1>
            <p>Released: {release_date}</p>
            <Cluster>
              {genres?.map((g) => {
                return (
                  <Button className="pointer-events-none" key={g.id} size="small" pill disabled>
                    {g.name}
                  </Button>
                )
              })}
            </Cluster>
            <p>{overview}</p>
          </Stack>

          <Stack space="gap-5" className={styles.content}>
            <Stack className={styles.numbers}>
              <InfoItem icon={<StarIcon />} label={`${vote_average?.toFixed(1)} / 10`} />
              <InfoItem icon={<ClockIcon />} label={formatRuntime(runtime)} />
              <InfoItem icon={<GlobeAmericasIcon />} label={language} />
            </Stack>

            <Stack className={styles.numbers}>
              <InfoItem icon={<CurrencyDollarIcon />} label={`Budget: ${formatCurrency(budget)}`} />
              <InfoItem
                icon={<CurrencyDollarIcon />}
                label={`Box Office: ${formatCurrency(revenue)}`}
              />
            </Stack>
          </Stack>

          <Stack className={styles.content}>
            <Cast id={Number(id)} />
          </Stack>
        </div>
      </Cluster>
    </div>
  )
}
export default Movie
