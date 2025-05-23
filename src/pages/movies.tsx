import { createFileRoute } from '@tanstack/react-router'
import { APP_ROUTES } from '../features/app/routes'
import PopularMovies from '../features/movies'

export const Route = createFileRoute(APP_ROUTES.MOVIES)({
  component: RouteComponent,
})

function RouteComponent() {
  return <PopularMovies />
}
