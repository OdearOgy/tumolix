import { useHeroMovie } from '../_queries'
import styles from './index.module.css'
import MovieTrailer from './movie-trailer'

const HeroSection = () => {
  const { data, isError, isPending, isFetching } = useHeroMovie()

  if (isPending || isFetching) return <div className={styles.skeleton} />
  if (isError || !data) return <div className={styles.error}>Error loading trailer</div>

  return <MovieTrailer data={data} />
}

export default HeroSection
