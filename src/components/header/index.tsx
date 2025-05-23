import { Link } from '@tanstack/react-router'
import type { FunctionComponent } from 'react'
import { APP_ROUTES } from '../../features/app/routes'
import { Cluster } from '../layouts'
import ColorSchemeToggler from './color-scheme-toggler'
import styles from './index.module.css'
import Logo from './logo'

const Header: FunctionComponent = () => {
  return (
    <Cluster className={styles.header}>
      <Link to={APP_ROUTES.HOME} viewTransition>
        <Logo />
      </Link>
      <ColorSchemeToggler />
    </Cluster>
  )
}

export default Header
