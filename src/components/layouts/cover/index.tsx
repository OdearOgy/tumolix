import { type FunctionComponent, type PropsWithChildren } from 'react'
import styles from './index.module.css'

const Cover: FunctionComponent<
  PropsWithChildren<{
    className?: string
    space?: string
  }>
> = ({ children, className, space }) => {
  return <div className={`${styles.cover} ${className} ${space ?? 'p-5'}`}>{children}</div>
}

export default Cover
