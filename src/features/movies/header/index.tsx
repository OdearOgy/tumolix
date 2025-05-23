import { Link } from '@tanstack/react-router'
import type { FunctionComponent } from 'react'
import { Cluster } from '../../../components/layouts'
import { APP_ROUTES } from '../../app/routes'
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
