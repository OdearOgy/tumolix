import type { FunctionComponent } from 'react'
import { Cluster, Cover } from '../../components/layouts'
import Spiral from '../../components/spiral'
import { useMoviesQuery } from './_queries'
import { MovieCategory } from './_queries/models'
import Categories from './category'
import Genres from './genres'
import MovieList from './list'
import useInfiniteScroll from './use-infinite-scroll'

const Movies: FunctionComponent<{
  category: MovieCategory
}> = ({ category }) => {
  const { data, isPending, isSuccess, isFetchingNextPage, fetchNextPage, hasNextPage } =
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
      <MovieList data={movies} isPending={isPending} isSuccess={isSuccess} />
      {isFetchingNextPage && (
        <Cluster justify="justify-center">
          <Spiral />
        </Cluster>
      )}
    </Cover>
  )
}

export default Movies
