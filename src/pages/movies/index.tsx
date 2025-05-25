import { createFileRoute } from '@tanstack/react-router'
import Movies from '../../features/movies'

export const Route = createFileRoute('/movies/')({
  component: () => <Movies />,
})
