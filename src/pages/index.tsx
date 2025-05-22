import { createFileRoute } from '@tanstack/react-router'
import PopularMovies from '../features/movies'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PopularMovies />
}
