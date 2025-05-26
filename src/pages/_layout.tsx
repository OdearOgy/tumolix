import { createFileRoute, Outlet, useRouterState } from '@tanstack/react-router'
import { useState, type FunctionComponent } from 'react'
import { Cover } from '../components/layouts'
import Header from '../features/app/header'
import Search from '../features/movies/search'

const Layout: FunctionComponent = () => {
  const location = useRouterState({ select: (s) => s.location })
  const query = new URLSearchParams(location.search).get('q') ?? ''
  const [search, setSearch] = useState(query)

  return (
    <>
      <Header>
        <Search search={search} setSearch={setSearch} />
      </Header>
      <Cover space="p-0">
        <Outlet />
      </Cover>

      <footer className="opacity-0 h-50"></footer>
    </>
  )
}

export const Route = createFileRoute('/_layout')({
  component: Layout,
})

export default Layout
