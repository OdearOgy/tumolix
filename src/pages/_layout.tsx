import { createFileRoute, Outlet } from '@tanstack/react-router'
import { type FunctionComponent } from 'react'
import { Cover } from '../components'

const Layout: FunctionComponent = () => {
  return (
    <Cover className="p-1">
      <Outlet />
    </Cover>
  )
}

export const Route = createFileRoute('/_layout')({
  component: Layout,
})

export default Layout
