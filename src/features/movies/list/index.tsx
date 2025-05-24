import type { FunctionComponent } from 'react'
import type { Movie as MovieDto } from 'tmdb-ts'
import { Cluster } from '../../../components/layouts'
import Movie from './movie'

const PopularMovies: FunctionComponent<{
  data?: MovieDto[]
  isError: boolean
  isPending: boolean
  isSuccess: boolean
}> = ({ data, isPending, isError, isSuccess }) => {
  if (isPending) {
    return 'loading ...'
  }

  if (isError) {
    return 'some random error'
  }
  return isSuccess && data?.length ? (
    <Cluster className="gap-10">
      {data?.map((movie) => {
        return <Movie key={movie.id} data={movie} />
      })}
    </Cluster>
  ) : (
    'no data found'
  )
}

export default PopularMovies
