import { Link } from '@tanstack/react-router'
import type { FunctionComponent } from 'react'
import { Button } from '../../../components'
import { Cluster } from '../../../components/layouts'
import { MovieCategory } from '../_queries/models'

const movieCategoryLabels: Record<MovieCategory, string> = {
  [MovieCategory.Popular]: 'Popular',
  [MovieCategory.TopRated]: 'Top Rated',
}

const orderedMovieCategories: MovieCategory[] = [MovieCategory.Popular, MovieCategory.TopRated]

const Categories: FunctionComponent<{
  active?: MovieCategory
}> = ({ active }) => {
  return (
    <Cluster space="gap-5 my-0">
      {orderedMovieCategories?.map((c) => {
        const to = `/movies/${c}`

        return (
          <Link to={to} key={c}>
            <Button
              size="large"
              className="capitalize"
              variant={c === active ? 'primary' : 'neutral'}
            >
              {movieCategoryLabels[c]}
            </Button>
          </Link>
        )
      })}
    </Cluster>
  )
}

export default Categories
