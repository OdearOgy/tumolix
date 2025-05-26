import { useNavigate, useRouterState } from '@tanstack/react-router'
import { useCallback, useState, type FunctionComponent } from 'react'
import type { Genre } from 'tmdb-ts'
import { Button } from '../../../components'
import { Cluster } from '../../../components/layouts'
import { useMovieGenres } from '../_queries'

const Items: FunctionComponent<{
  data: Genre[]
}> = ({ data }) => {
  const navigate = useNavigate()
  const location = useRouterState({ select: (s) => s.location })
  const [ids, setIds] = useState('')

  const handleGenreToggle = useCallback(
    (id: string) => {
      const params = new URLSearchParams(location.search)
      const current = params.get('genres')?.split(',') ?? []
      const genres = current.includes(id) ? current.filter((g) => g !== id) : [...current, id]
      const ids = genres.join(',')

      if (genres.length) {
        params.set('genres', ids)
      } else {
        params.delete('genres')
      }

      setIds(ids)
      navigate({
        to: location.pathname,
        search: Object.fromEntries(params.entries()),
        replace: false,
      })
    },
    [location, navigate]
  )

  return data.map((genre) => (
    <Button
      onClick={() => handleGenreToggle(genre.id?.toString())}
      key={genre.id}
      size="medium"
      pill
      variant={ids.includes(genre.id?.toString()) ? 'warning' : 'neutral'}
    >
      {genre.name}
    </Button>
  ))
}

const GenresList: FunctionComponent = () => {
  const { data, isPending, isError, isSuccess } = useMovieGenres()

  if (isPending) {
    const skeleton = [1, 2, 3, 4, 5]
    return (
      <Cluster className="gap-2 mt-4 p-2">
        {skeleton.map((s) => (
          <Button key={s} className="animate-pulse w-20" pill size="small"></Button>
        ))}
      </Cluster>
    )
  }

  return (
    <Cluster className="gap-2 mt-4 p-2">
      {isError ? (
        <span>Failed to load genres</span>
      ) : isSuccess && data ? (
        <Items data={data} />
      ) : (
        <div>No Filters</div>
      )}
    </Cluster>
  )
}

export default GenresList
