import type { CSSProperties } from 'react'

export type Variant = 'primary' | 'danger' | 'neutral' | 'warning'
export type Size = 'large' | 'medium' | 'small'

export type IconProps = {
  className?: string
  style?: CSSProperties
  size?: Size
}
