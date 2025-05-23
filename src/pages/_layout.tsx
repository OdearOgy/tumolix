import { createFileRoute, Outlet } from '@tanstack/react-router'
import { type FunctionComponent } from 'react'
import { Header } from '../components'
import { Cover } from '../components/layouts'

const Layout: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Cover space="p-0">
        <Outlet />
      </Cover>
    </>
  )
}

export const Route = createFileRoute('/_layout')({
  component: Layout,
})

export default Layout
