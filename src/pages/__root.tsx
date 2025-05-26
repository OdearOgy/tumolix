import { createRootRoute } from '@tanstack/react-router'
import Layout from './_layout'
import { RouteComponent as NotFound } from './not-found'

function RootComponent() {
  return <Layout />
}

export const Route = createRootRoute({
  component: RootComponent,

  notFoundComponent: NotFound,
})
