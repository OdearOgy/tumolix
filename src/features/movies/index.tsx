import { Link } from '@tanstack/react-router'
import type { FunctionComponent } from 'react'
import { Button } from '../../components'
import { Cluster, Cover } from '../../components/layouts'
import { useMoviesQuery } from './_queries'
import { MovieCategory } from './_queries/models'
import MovieList from './list'

const movieCategoryLabels: Record<MovieCategory, string> = {
  [MovieCategory.Default]: 'Popular',
  [MovieCategory.TopRated]: 'Top Rated',
  [MovieCategory.Upcoming]: 'Upcoming',
}

const orderedMovieCategories: MovieCategory[] = [
  MovieCategory.Default,
  MovieCategory.Upcoming,
  MovieCategory.TopRated,
]

const CategoryFilters: FunctionComponent<{
  category: MovieCategory
}> = ({ category }) => {
  return (
    <Cluster space="gap-5 space-y-5">
      {orderedMovieCategories?.map((c) => {
        const to = c === MovieCategory.Default ? '/movies' : `/movies/${c}`

        return (
          <Link
            to={to}
            viewTransition={{
              types: () => {
                return ['warp']
              },
            }}
          >
            <Button className="capitalize" variant={c === category ? 'warning' : 'neutral'}>
              {movieCategoryLabels[c]}
            </Button>
          </Link>
        )
      })}
    </Cluster>
  )
}

const Movies: FunctionComponent<{
  category: MovieCategory
}> = ({ category }) => {
  const { data, isError, isPending, isSuccess } = useMoviesQuery(category)
  return (
    <Cover space="mt-30 px-5 lg:px-10 xl:px-20">
      <CategoryFilters category={category} />
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
