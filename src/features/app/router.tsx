import { createRouter } from '@tanstack/react-router'
import { routeTree } from '../../__generated__/routeTree.gen'

export const router = createRouter({
  routeTree,
  defaultStaleTime: 5000,
  scrollRestoration: true,
  defaultPreload: 'intent',
  notFoundMode: 'root',
  // TODO: Add bounce or ginnie transition
  // defaultViewTransition: { types: ['slide-left'] },
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
