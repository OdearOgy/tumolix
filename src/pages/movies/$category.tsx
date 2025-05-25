import { createFileRoute, useParams } from '@tanstack/react-router'
import Movies from '../../features/movies'
import { MovieCategory } from '../../features/movies/_queries/models'

const allowedCategories = Object.values(MovieCategory)

export const Route = createFileRoute('/movies/$category')({
  component: RouteComponent,
})

function RouteComponent() {
  const { category } = useParams({ from: '/movies/$category' })

  if (!allowedCategories.includes(category as MovieCategory)) {
    throw new Error(`Invalid category: ${category}`)
  }

  return <Movies category={category as MovieCategory} />
}
