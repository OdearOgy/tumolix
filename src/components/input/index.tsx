import { Input as AccessibleInput } from '@headlessui/react'
import type { FunctionComponent } from 'react'
import { Stack } from '../layouts'
import styles from './index.module.css'

const Input: FunctionComponent<{
  hidden?: boolean
  label?: string
  name: string
  onChange?: (s: string) => void
  placeholder?: string
  value: unknown
}> = ({ hidden, label, name, onChange, placeholder, value }) => {
  return (
    <Stack className={styles.field}>
      {label ? <label className={styles.label + ' block'}>{label}</label> : null}

      <AccessibleInput
        name={name}
        onChange={(e) => onChange?.(e.target.value)}
        className={styles.input}
        value={value?.toString()}
        placeholder={placeholder}
        hidden={hidden}
      />
      {/* {errors ? <span className={styles.helpText}>{errors.join(', ')}</span> : null} */}
    </Stack>
  )
}

export default Input
