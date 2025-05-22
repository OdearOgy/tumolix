import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from '../../__generated__/routeTree.gen'
import ColorSchemeToggler from './color-scheme-toggler'

const router = createRouter({
  routeTree,
})

const App = () => {
  return (
    <div>
      <ColorSchemeToggler />
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
