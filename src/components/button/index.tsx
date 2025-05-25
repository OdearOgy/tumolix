import { Button as AccessibleButton } from '@headlessui/react'
import { ArrowPathIcon } from '@heroicons/react/24/solid'
import type { FunctionComponent, PropsWithChildren, ReactNode } from 'react'
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
    pill?: boolean
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
  pill,
}) => {
  const btnCls = `${styles.btn} ${styles[variant]} ${className} ${pill ? 'rounded-full' : 'rounded'}`

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
            {prefixIcon && <span className={styles.prefix}>{prefixIcon}</span>}
            {children}
          </>
        )}
      </Cluster>
    </AccessibleButton>
  )
}

export default Button
