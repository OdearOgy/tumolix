import type { FunctionComponent, PropsWithChildren } from 'react'
import styles from './index.module.css'

const Stack: FunctionComponent<
  PropsWithChildren<{
    className?: string
    space?: string
  }>
> = ({ children, className, space }) => {
  return <div className={`${styles.stack} ${className} ${space ?? 'gap-2'}`}>{children}</div>
}

export default Stack
