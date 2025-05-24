import { Link } from '@tanstack/react-router'
import { Cover, Stack } from '../../components/layouts'
import { APP_ROUTES } from '../app/routes'
import { useHomeMoviesQuery } from './_queries'
import HeroSection from './hero-section'
import MovieList from './list'

const PopularMovies = () => {
  const { data, isError, isPending, isSuccess } = useHomeMoviesQuery('')

  return (
    <MovieList data={data?.results} isError={isError} isPending={isPending} isSuccess={isSuccess} />
  )
}

const Movies = () => {
  return (
    <Stack className="[view-transition-name:movies]">
      <HeroSection />

      <Cover space="mt-30 px-20">
        <Stack>
          <div className="prose dark:prose-invert">
            <Link to={APP_ROUTES.MOVIES}>
              <h2>Popular Movies</h2>
            </Link>
          </div>
          <PopularMovies />
        </Stack>
      </Cover>
    </Stack>
  )
}

export default Movies
