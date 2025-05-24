import { createFileRoute, Outlet } from '@tanstack/react-router'
import { type FunctionComponent } from 'react'
import { Cover } from '../components/layouts'
import Header from '../features/app/header'

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
