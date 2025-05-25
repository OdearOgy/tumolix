import { createFileRoute } from '@tanstack/react-router'
import { APP_ROUTES } from '../features/app/routes'
import Home from '../features/home'

export const Route = createFileRoute(APP_ROUTES.HOME)({
  component: RouteComponent,
})

function RouteComponent() {
  return <Home />
}
