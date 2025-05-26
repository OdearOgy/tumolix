import type { FunctionComponent } from 'react'
import { Cover } from '../../components/layouts'
import { useMoviesQuery } from './_queries'
import { MovieCategory } from './_queries/models'
import Categories from './category'
import Genres from './genres'
import MovieList from './list'
import useInfiniteScroll from './use-infinite-scroll'

const Movies: FunctionComponent<{
  category: MovieCategory
}> = ({ category }) => {
  const { data, isError, isPending, isSuccess, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useMoviesQuery(category)

  useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  })

  const movies = data?.pages.flatMap((page) => page.results) ?? []

  return (
    <Cover space="mt-30 px-5 lg:px-10 xl:px-20 space-y-10">
      <Categories active={category && category} />
      <Genres />
      <MovieList data={movies} isError={isError} isPending={isPending} isSuccess={isSuccess} />
      {isFetchingNextPage && <p className="text-center mt-4">Loading...</p>}
    </Cover>
  )
}

export default Movies
