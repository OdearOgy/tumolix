import type { FunctionComponent } from 'react'
import { PosterSize, type Movie as MovieDto } from 'tmdb-ts'
import { StarIcon } from '../../../components/icons'
import { Cluster, Stack } from '../../../components/layouts'
import { TMDB_IMAGE_URL_PREFIX } from '../../../constants'
import styles from './index.module.css'

// ;<div className="group relative max-w-[300px] rounded-2xl overflow-hidden bg-zinc-900 text-white shadow-lg hover:scale-[1.02] transition-transform duration-300">
//   <img
//     src={posterUrl || 'https://image.tmdb.org/t/p/w500/8ZtHThdJxvImkLP0jeLecZBz69K.jpg'}
//     alt={title}
//     className="w-full h-72 object-cover group-hover:opacity-80 transition-opacity"
//   />
//   <div className="p-4 space-y-2">
//     <h2 className="text-lg font-semibold line-clamp-1">{title}</h2>
//     <div className="text-sm text-zinc-400">{releaseYear}</div>
//     <div className="flex items-center gap-1 text-sm">
//       <StarIcon />
//       <span>{rating?.toFixed(1)} / 10</span>
//     </div>
//   </div>

//   <button
//     onClick={() => setIsFavorite(!isFavorite)}
//     className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-black/80 transition"
//     aria-label="Toggle favorite"
//   >
//     {isFavorite ? <HeartFilledIcon /> : <HeartOutlineIcon />}
//   </button>
// </div>

const Movie: FunctionComponent<{
  data: MovieDto
}> = ({ data }) => {
  const posterUrl = `${TMDB_IMAGE_URL_PREFIX}/${PosterSize.W342}${data.poster_path}`
  const date = new Date(data.release_date).getFullYear()
  return (
    <Stack space="0" className={styles.movie}>
      <div className={styles.poster}>
        <img src={posterUrl} loading="lazy"></img>
      </div>
      <Stack className={styles.content} space="0" align="justify-end">
        <h3>{data.title}</h3>
        <p>{date}</p>
        <Cluster align="items-center" space="gap-1">
          <StarIcon className="text-warning-300 dark:text-warning-800" size="medium" />
          <p>{data.vote_average.toFixed(1) ?? 0} / 10</p>
        </Cluster>
      </Stack>
    </Stack>
  )
}

export default Movie
