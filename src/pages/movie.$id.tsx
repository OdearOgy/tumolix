import { createFileRoute } from '@tanstack/react-router'
import { Cover } from '../components/layouts'
import Movie from '../features/movie'

export const Route = createFileRoute('/movie/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Cover space="mt-30 px-5 lg:px-10 xl:px-20 space-y-10">
      <Movie />
    </Cover>
  )
}
