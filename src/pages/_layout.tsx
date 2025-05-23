import { createFileRoute, Outlet } from '@tanstack/react-router'
import { type FunctionComponent } from 'react'
import { Header } from '../components'
import { Cover, Stack } from '../components/layouts'

const Layout: FunctionComponent = () => {
  return (
    <Stack className="gap-2">
      <Header />
      <Cover>
        <Outlet />
      </Cover>
    </Stack>
  )
}

export const Route = createFileRoute('/_layout')({
  component: Layout,
})

export default Layout
