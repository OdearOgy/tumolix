import { Link } from '@tanstack/react-router'
import { Stack } from '../../components/layouts'
import { APP_ROUTES } from '../app/routes'
import HeroSection from './hero-section'
import PopularMovies from './popular-movies'

const Movies = () => {
  return (
    <Stack className="[view-transition-name:movies]">
      <HeroSection />

      <Stack>
        <div className="prose prose-invert">
          <Link to={APP_ROUTES.MOVIES}>
            <h2>Popular Movies</h2>
          </Link>
        </div>
        <PopularMovies />
      </Stack>
    </Stack>
  )
}

export default Movies
