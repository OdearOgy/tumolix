import { Link } from '@tanstack/react-router'
import { Button } from '../../components'
import { Cluster, Cover, Stack } from '../../components/layouts'
import { APP_ROUTES } from '../app/routes'
import MovieList from '../movies/list'
import { useHomeMoviesQuery } from './_queries'
import HeroSection from './hero-section'

const List = () => {
  const { data, isError, isPending, isSuccess } = useHomeMoviesQuery()

  return (
    <MovieList data={data?.results} isError={isError} isPending={isPending} isSuccess={isSuccess} />
  )
}

const Movies = () => {
  return (
    <Stack className="[view-transition-name:movies]">
      <HeroSection />
      <Cover space="mt-10 px-5 lg:px-10 xl:px-20">
        <Stack>
          <Link to={APP_ROUTES.MOVIES} className="group relative mb-4">
            <Cluster className="prose dark:prose-invert" align="items-baseline" space="gap-5">
              <h2>Your Next Watch</h2>
              <Button className="opacity-0 group-hover:opacity-100" variant="primary">
                Explore All →
              </Button>
            </Cluster>
          </Link>
          <List />
        </Stack>
      </Cover>
    </Stack>
  )
}

export default Movies
