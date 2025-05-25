import type { FunctionComponent, PropsWithChildren } from 'react'
import type { JustifyContent } from '../types'
import styles from './index.module.css'

const Stack: FunctionComponent<
  PropsWithChildren<{
    className?: string
    space?: string
    align?: JustifyContent
  }>
> = ({ children, className, space, align }) => {
  const stackCls = `${styles.stack} ${className} ${space ?? 'space-y-2'} ${align ?? 'justify-start'}`

  return <div className={stackCls}>{children}</div>
}

export default Stack
