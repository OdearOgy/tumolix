import type { FunctionComponent, PropsWithChildren } from 'react'
import type { AlignItems, JustifyContent } from '../types'
import styles from './index.module.css'

const Cluster: FunctionComponent<
  PropsWithChildren<{
    className?: string
    onClick?: () => void
    align?: AlignItems
    justify?: JustifyContent
    space?: string
  }>
> = ({ children, className, onClick, justify, align, space }) => {
  const clusterCls = `${styles.cluster} ${className}
      ${align ?? 'items-start'}
      ${justify ?? 'justify-start'}
      ${space ?? 'gap-2'}
    `

  return (
    <div onClick={onClick} className={clusterCls}>
      {children}
    </div>
  )
}

export default Cluster
