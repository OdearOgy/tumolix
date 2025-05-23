import { Link } from '@tanstack/react-router'
import type { FunctionComponent } from 'react'
import { APP_ROUTES } from '../../features/app/routes'
import { Cluster } from '../layouts'
import styles from './index.module.css'
import Logo from './logo'
import Navigation from './navigation'

const Header: FunctionComponent = () => {
  return (
    <Cluster className={styles.header}>
      <Link to={APP_ROUTES.HOME}>
        <Logo />
      </Link>
      <Navigation />
    </Cluster>
  )
}

export default Header
