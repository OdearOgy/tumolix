import { Stack } from '../../components/layouts'
import HeroSection from './hero-section'
import PopularMovies from './popular-movies'

const Movies = () => {
  return (
    <Stack>
      <HeroSection />
      <PopularMovies />
    </Stack>
  )
}

export default Movies
