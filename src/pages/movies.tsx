import { createFileRoute } from '@tanstack/react-router'
import { Cover } from '../components/layouts'
import { APP_ROUTES } from '../features/app/routes'
import { useMoviesQuery } from '../features/movies/_queries'
import MovieList from '../features/movies/list'

export const Route = createFileRoute(APP_ROUTES.MOVIES)({
  component: RouteComponent,
})

function RouteComponent() {
  const { data, isError, isPending, isSuccess } = useMoviesQuery('')

  return (
    <Cover space="mt-30 px-20">
      <MovieList
        data={data?.results}
        isError={isError}
        isPending={isPending}
        isSuccess={isSuccess}
      />
    </Cover>
  )
}
