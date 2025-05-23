import { createFileRoute } from '@tanstack/react-router'
import { APP_ROUTES } from '../features/app/routes'
import Movies from '../features/movies'

export const Route = createFileRoute(APP_ROUTES.HOME)({
  component: RouteComponent,
})

function RouteComponent() {
  return <Movies />
}
