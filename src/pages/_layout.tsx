import { createFileRoute, Outlet } from '@tanstack/react-router'
import { type FunctionComponent } from 'react'
import { Header } from '../components'
import { Cluster, Cover } from '../components/layouts'

const Layout: FunctionComponent = () => {
  return (
    <Cluster>
      <Header />
      <Cover className="p-1">
        <Outlet />
      </Cover>
    </Cluster>
  )
}

export const Route = createFileRoute('/_layout')({
  component: Layout,
})

export default Layout
