import { Input } from '../../components'
import { Stack } from '../../components/layouts'
import { useMoviesQuery } from './_queries'

const Movies = () => {
  const { data, isError, isPending, isSuccess } = useMoviesQuery('')

  if (isPending) {
    return 'loading ...'
  }

  if (isError) {
    return 'some random error'
  }

  return isSuccess && data?.results?.length ? (
    <Stack>
      <label className="block">
        {/* <span className="text-neutral-700">Full name</span> */}
        <Input label="hello" />
      </label>

      <div>{JSON.stringify(data.results, null, 4)}</div>
    </Stack>
  ) : (
    'no data found'
  )
}

export default Movies
