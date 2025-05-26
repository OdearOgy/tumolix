import { createRouter } from '@tanstack/react-router'
import { routeTree } from '../../__generated__/routeTree.gen'

export const STALE_TIME = 10 * 60 * 1000

export const router = createRouter({
  routeTree,
  defaultStaleTime: 10 * 60 * 1000,
  scrollRestoration: true,
  defaultPreload: 'intent',
  notFoundMode: 'root',
  defaultViewTransition: { types: ['fade'] },
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
