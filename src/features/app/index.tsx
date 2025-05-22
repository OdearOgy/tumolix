import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from '../../__generated__/routeTree.gen'
import ColorSchemeToggler from './color-scheme-toggler'

const router = createRouter({
  routeTree,
})

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ColorSchemeToggler />
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  )
}

export default App
