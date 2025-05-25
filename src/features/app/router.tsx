import { createRouter } from '@tanstack/react-router'
import { routeTree } from '../../__generated__/routeTree.gen'

export const router = createRouter({
  routeTree,
  defaultStaleTime: 5000,
  scrollRestoration: true,
  defaultPreload: 'intent',
  notFoundMode: 'root',
  // TODO: Add bounce or ginnie transition
  defaultViewTransition: {
    types: ({ fromLocation, toLocation }) => {
      let direction = 'none'

      if (fromLocation) {
        const fromIndex = fromLocation.state.__TSR_index
        const toIndex = toLocation.state.__TSR_index

        direction = toIndex > fromIndex ? 'left' : 'right'
      }

      return [`slide-${direction}`]
    },
  },
})

// unit test?
const _navigate = router.navigate
router.navigate = (opts) => {
  const current = router.state.location
  const currentMatch = router.matchRoute(current)
  const nextMatch = router.matchRoute(opts.to ?? 'unknown')

  if (!currentMatch || !nextMatch) {
    return _navigate(opts)
  }

  if (current.pathname === opts.to) {
    return
  }

  return _navigate(opts)
}

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
