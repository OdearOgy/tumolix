import type { FunctionComponent } from 'react'
import fallback from '/assets/fallback-image.png'

type ImageProps = {
  src?: string
  alt?: string
  loading?: 'lazy' | 'eager'
  className?: string
}

const CustomImage: FunctionComponent<ImageProps> = ({ src, ...props }) => {
  return (
    <img
      src={src}
      onError={(e) => {
        e.currentTarget.onerror = null
        e.currentTarget.src = fallback
      }}
      {...props}
    />
  )
}

export default CustomImage
