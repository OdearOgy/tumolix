import { useState, type FunctionComponent } from 'react'
import type { Video } from 'tmdb-ts'
import { Stack } from '../../../components/layouts'
import Spiral from '../../../components/spiral'
import { YOUTUBE_EMBED_PREFIX } from '../../../constants'
import styles from './index.module.css'

const Trailer: FunctionComponent<{
  data: Video
}> = ({ data }) => {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const url = `${YOUTUBE_EMBED_PREFIX}/${data?.key}?playlist=${data?.key}&controls=1`

  return (
    <Stack space="0" className={styles.trailer}>
      <div className={`${styles.loader} ${videoLoaded ? styles.loaded : ''}`}>
        <Spiral className="text-current" />
      </div>

      {data.key && (
        <iframe
          src={url}
          className={`${styles.video}`}
          title={data.name}
          allow="encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
          loading="lazy"
          onLoad={() => setVideoLoaded(true)}
        />
      )}
    </Stack>
  )
}
export default Trailer
