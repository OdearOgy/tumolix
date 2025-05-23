import { Button as AccessibleButton } from '@headlessui/react'
import type { FunctionComponent, PropsWithChildren, ReactNode } from 'react'
import { ArrowPathIcon } from '../icons'
import { Cluster } from '../layouts'
import type { Size, Variant } from '../types'
import styles from './index.module.css'

const Button: FunctionComponent<
  PropsWithChildren<{
    className?: string
    disabled?: boolean
    loading?: boolean
    onClick?: () => void
    prefixIcon?: ReactNode
    size?: Size
    variant?: Variant
  }>
> = ({
  children,
  className,
  disabled,
  loading,
  onClick,
  prefixIcon,
  size = 'medium',
  variant = 'neutral',
}) => {
  const btnCls = `${styles.btn} ${styles[variant]} ${className}`

  return (
    <AccessibleButton
      onClick={onClick}
      type="button"
      className={btnCls}
      disabled={disabled}
      data-size={size}
      data-loading={loading}
    >
      <Cluster className={`${styles.body} ${loading ? styles.loading : ''}`}>
        {loading ? (
          <ArrowPathIcon className="animate-spin" />
        ) : (
          <>
            <span className={styles.prefix}>{prefixIcon}</span>
            {children}
          </>
        )}
      </Cluster>
    </AccessibleButton>
  )
}

export default Button
