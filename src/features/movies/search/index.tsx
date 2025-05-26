import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useNavigate } from '@tanstack/react-router'
import {
  useCallback,
  useEffect,
  useState,
  type Dispatch,
  type FunctionComponent,
  type SetStateAction,
} from 'react'
import { Input } from '../../../components'
import { useDebounce } from '../../../components/input/use-debounce'

const Search: FunctionComponent<{
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}> = ({ search, setSearch }) => {
  const navigate = useNavigate()
  const [value, setValue] = useState('')
  const debouncedValue = useDebounce(value, 700)

  const handleSubmit = useCallback(
    (q: string) => {
      navigate({
        to: '/movies',
        search: {
          q: q,
        },
        replace: false,
      })

      setSearch(q)
    },
    [navigate, setSearch]
  )

  useEffect(() => {
    if (!search && !debouncedValue) {
      return
    }
    handleSubmit(debouncedValue)
  }, [search, debouncedValue, handleSubmit])

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
