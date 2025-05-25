import {
  useCallback,
  useRef,
  useState,
  type Dispatch,
  type FunctionComponent,
  type SetStateAction,
} from 'react'
import { Input } from '../../../components'
import { SearchIcon } from '../../../components/icons'

const Search: FunctionComponent<{
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}> = ({ search, setSearch }) => {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [s, setS] = useState(search)

  const handleSubmit = useCallback(() => {
    setSearch(s)
    console.log(s)
    formRef.current?.requestSubmit()
  }, [s, setSearch])

  const handleReset = useCallback(() => {
    setSearch('')
    formRef.current?.reset()
  }, [setSearch])

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        handleSubmit()
      }}
      onReset={(e) => {
        e.preventDefault()
        e.stopPropagation()
        handleReset()
      }}
      ref={formRef}
    >
      <Input
        name="search"
        className="size-10"
        value={s}
        onChange={(s) => setS(s.toString())}
        placeholder="Search"
        autoFocus
        prefixIcon={<SearchIcon size="large" />}
      />
    </form>
  )
}

export default Search
