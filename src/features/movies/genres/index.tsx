import type { FunctionComponent } from 'react'
import { Button } from '../../../components'
import { Cluster } from '../../../components/layouts'
import { useMovieGenres } from '../_queries'

const Genres: FunctionComponent = () => {
  const { data, isPending, isError } = useMovieGenres()

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

  // console.log(selectedGenres)

  return (
    <Cluster className="gap-2 mt-4 p-2">
      {isError ? (
        <span>Failed to load genres</span>
      ) : (
        data?.map((genre) => (
          // <Link
          //   search={(prev) => ({
          //     ...prev,
          //     // genres: selectedGenres.join(','),
          //   })}
          // >
          <Button key={genre.id} size="medium" pill>
            {genre.name}
          </Button>
          // </Link>
        ))
      )}
    </Cluster>
  )
}

export default Genres
