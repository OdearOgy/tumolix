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
      <div>{JSON.stringify(data.results, null, 4)}</div>
    </Stack>
  ) : (
    'no data found'
  )
}

export default Movies
