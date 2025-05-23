import { Link } from '@tanstack/react-router'
import { APP_ROUTES } from '../../../features/app/routes'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={APP_ROUTES.MOVIES}>Popular movies</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
