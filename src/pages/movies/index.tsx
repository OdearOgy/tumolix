import { createFileRoute } from '@tanstack/react-router'
import Movies from '../../features/movies'
import { MovieCategory } from '../../features/movies/_queries/models'

export const Route = createFileRoute('/movies/')({
  component: () => <Movies category={MovieCategory.Default} />,
})
