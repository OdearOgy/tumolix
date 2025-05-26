import { createRootRoute } from '@tanstack/react-router'
import { ErrorComponent, NotFound } from '../components'
import Layout from './_layout'

function RootComponent() {
  return <Layout />
}

export const Route = createRootRoute({
  component: RootComponent,

  notFoundComponent: NotFound,
  errorComponent: ErrorComponent,
})
