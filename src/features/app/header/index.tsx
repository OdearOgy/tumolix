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
      ([entry]) => {
        setScrolled(!entry.isIntersecting)
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
    <>
      <Cluster className={headerCls}>
        <Link to={APP_ROUTES.HOME} viewTransition>
          <Logo />
        </Link>
        <ColorSchemeToggler />
      </Cluster>
      <div ref={headerRef}></div>
    </>
  )
}

export default Header
