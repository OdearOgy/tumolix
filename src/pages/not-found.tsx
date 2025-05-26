import { createFileRoute } from '@tanstack/react-router'
import NotFound from '../components/404'

export const Route = createFileRoute('/not-found')({
  component: RouteComponent,
})

export function RouteComponent() {
  return <NotFound />
}
