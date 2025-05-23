import { Stack } from '../../components/layouts'
import HeroSection from './hero-section'

const Movies = () => {
  // const { data, isError, isPending, isSuccess } = useMoviesQuery('')

  // if (isPending) {
  //   return 'loading ...'
  // }

  // if (isError) {
  //   return 'some random error'
  // }

  return (
    <Stack>
      <HeroSection />

      {/* {isSuccess && data?.results?.length ? (
        <Stack>
          <div>{JSON.stringify(data.results, null, 4)}</div>
        </Stack>
      ) : (
        'no data found'
      )} */}
    </Stack>
  )
}

export default Movies
