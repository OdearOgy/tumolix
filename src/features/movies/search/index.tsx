import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useNavigate, useRouterState } from '@tanstack/react-router'
import { useCallback, useEffect, useState, type FunctionComponent } from 'react'
import { Input } from '../../../components'
import { useDebounce } from '../../../components/input/use-debounce'

const Search: FunctionComponent = () => {
  const navigate = useNavigate()
  const location = useRouterState({ select: (s) => s.location })
  const search = new URLSearchParams(location.search).get('q') ?? ''
  const [value, setValue] = useState(search ?? '')

  const debouncedValue = useDebounce(value, 200)

  const handleSubmit = useCallback(
    (search: string) => {
      navigate({
        to: '/movies',
        search: {
          q: search,
        },
        replace: false,
      })
    },
    [navigate]
  )

  useEffect(() => {
    if (!search && !debouncedValue) {
      return
    }
    // handleSubmit(debouncedValue)
    // if (location.pathname !== '/movies') return

    handleSubmit(debouncedValue)
  }, [search, debouncedValue, location, handleSubmit])

  // useEffect(() => {
  //   if (location.pathname !== '/movies') {
  //     setValue('')
  //   }
  // }, [location])

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmit(value)
      }}
    >
      <Input
        name="q"
        className="size-10"
        value={value}
        onChange={setValue}
        placeholder="Search"
        prefixIcon={<MagnifyingGlassIcon className="size-6" />}
      />
    </form>
  )
}

export default Search
