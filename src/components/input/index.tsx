import { Input as AccessibleInput, type InputProps } from '@headlessui/react'
import type { FunctionComponent, ReactNode } from 'react'
import { Stack } from '../layouts'
import styles from './index.module.css'

const Input: FunctionComponent<
  {
    hidden?: boolean
    label?: string
    name?: string
    onChange?: (s: string) => void
    placeholder?: string
    value: unknown
    className?: string
    prefixIcon?: ReactNode
  } & Omit<InputProps, 'onChange'>
> = ({ prefixIcon, label, onChange, value, className, ...props }) => {
  return (
    <Stack className={`${styles.field} ${className}`}>
      {label ? <label className={styles.label + ' block'}>{label}</label> : null}
      {prefixIcon && <span className={styles.prefixIcon}>{prefixIcon}</span>}
      <AccessibleInput
        {...props}
        onChange={(e) => onChange?.(e.target.value)}
        className={styles.input}
        value={value?.toString()}
      />
    </Stack>
  )
}

export default Input
