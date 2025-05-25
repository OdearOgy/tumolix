import { createFileRoute } from '@tanstack/react-router'
import { Cover } from '../components/layouts'
import Details from '../features/movies/details'

export const Route = createFileRoute('/movie/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Cover space="mt-30 px-5 lg:px-10 xl:px-20 space-y-10">
      <Details />
    </Cover>
  )
}
