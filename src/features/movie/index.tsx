import {
  ClockIcon,
  CurrencyDollarIcon,
  GlobeAmericasIcon,
  StarIcon,
} from '@heroicons/react/24/solid'
import { useParams } from '@tanstack/react-router'
import type { FunctionComponent } from 'react'
import { BackdropSize, PosterSize, type Genre, type MovieDetails } from 'tmdb-ts'
import { Button, CustomImage, DefaultLoader } from '../../components'
import { Cluster, Stack } from '../../components/layouts'
import { TMDB_IMAGE_URL_PREFIX } from '../../constants'
import { formatCurrency } from '../../utils/format-currency'
import { formatRuntime } from '../../utils/format-runtime'
import InfoItem from './_components/info-item'
import { useMovieDetailsQuery } from './_queries'
import Cast from './cast'
import styles from './index.module.css'
import Videos from './videos'

const Genres: FunctionComponent<{
  data: Genre[]
}> = ({ data }) => {
  return (
    <Cluster>
      {data?.map((g) => {
        return (
          <Button className="pointer-events-none" key={g.id} size="small" pill disabled>
            {g.name}
          </Button>
        )
      })}
    </Cluster>
  )
}

const MovieInfo: FunctionComponent<{
  data: MovieDetails
}> = ({ data }) => {
  const { id, vote_average, runtime, budget, revenue, spoken_languages, original_language } = data

  const language =
    spoken_languages.find((l) => l.iso_639_1.includes(original_language))?.name ?? 'English'

  return (
    <Stack space="gap-5" className={styles.content}>
      <Stack className={styles.container}>
        <InfoItem icon={<StarIcon />} label={`${vote_average?.toFixed(1)} / 10`} />
        <InfoItem icon={<ClockIcon />} label={formatRuntime(runtime)} />
        <InfoItem icon={<GlobeAmericasIcon />} label={language} />
      </Stack>

      <Stack className={styles.container}>
        <InfoItem icon={<CurrencyDollarIcon />} label={`Budget: ${formatCurrency(budget)}`} />
        <InfoItem icon={<CurrencyDollarIcon />} label={`Box Office: ${formatCurrency(revenue)}`} />
      </Stack>
      <Cast id={id} />
    </Stack>
  )
}

const Movie = () => {
  const { id } = useParams({ from: '/movie/$id' })
  const { data, isPending, isSuccess } = useMovieDetailsQuery(Number(id) || 0)

  if (isPending) {
    return <DefaultLoader />
  }
  if (!isSuccess) {
    return
  }
  const { poster_path, backdrop_path, title, release_date, genres, overview } = data as MovieDetails

  const posterUrl = `${TMDB_IMAGE_URL_PREFIX}/${PosterSize.W780}${poster_path}`
  const backdropUrl = `${TMDB_IMAGE_URL_PREFIX}/${BackdropSize.ORIGINAL}${backdrop_path}`

  return (
    <div className={styles.wrapper}>
      <div className={styles.backdrop}>
        <CustomImage src={backdropUrl} loading="lazy" />
      </div>

      <Stack space="gap-20">
        <Cluster className={styles.details} space="gap-10">
          <div className={styles.poster}>
            <CustomImage src={posterUrl} loading="eager" alt={title} />
          </div>

          <div className={styles.info}>
            <Stack space="0" className={styles.container}>
              <h1>{title}</h1>
              <p>Released: {release_date}</p>
              <Genres data={genres} />
              <p>{overview}</p>
            </Stack>
            <MovieInfo data={data} />
          </div>
        </Cluster>

        <Videos id={Number(id)} />
      </Stack>
    </div>
  )
}
export default Movie
