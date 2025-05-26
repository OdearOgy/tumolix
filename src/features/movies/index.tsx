import type { FunctionComponent } from 'react'
import { Cover } from '../../components/layouts'
import { useMoviesQuery } from './_queries'
import { MovieCategory } from './_queries/models'
import Categories from './category'
import Genres from './genres'
import MovieList from './list'

const Movies: FunctionComponent<{
  category: MovieCategory
}> = ({ category }) => {
  const { data, isError, isPending, isSuccess } = useMoviesQuery(category)

  return (
    <Cover space="mt-30 px-5 lg:px-10 xl:px-20 space-y-10">
      <Categories active={category && category} />
      <Genres />
      <MovieList
        data={data?.results}
        isError={isError}
        isPending={isPending}
        isSuccess={isSuccess}
      />
    </Cover>
  )
}

export default Movies
