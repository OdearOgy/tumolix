import { Link } from '@tanstack/react-router'
import { useEffect, useRef, useState, type FunctionComponent } from 'react'
import { Cluster } from '../../../components/layouts'
import { APP_ROUTES } from '../routes'
import ColorSchemeToggler from './color-scheme-toggler'
import styles from './index.module.css'
import Logo from './logo'

const Header: FunctionComponent = () => {
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!headerRef.current) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        setScrolled(!entries[0].isIntersecting)
      },
      {
        root: null,
        threshold: 0,
      }
    )

    observer.observe(headerRef.current)

    return () => observer.disconnect()
  }, [])

  const headerCls = `${styles.header} ${scrolled ? styles.scrolled : ''}`

  return (
    <header>
      <div ref={headerRef}></div>
      <Cluster className={headerCls}>
        <Link to={APP_ROUTES.HOME} viewTransition={{ types: ['slide-right'] }}>
          <Logo />
        </Link>
        <ColorSchemeToggler />
      </Cluster>
    </header>
  )
}

export default Header
