import type { FunctionComponent } from 'react'
import { ProfileSize, type Cast } from 'tmdb-ts'
import { CustomImage } from '../../../components'
import { Stack } from '../../../components/layouts'
import { TMDB_IMAGE_URL_PREFIX } from '../../../constants'
import styles from './index.module.css'

const Actor: FunctionComponent<{
  data: Cast
}> = ({ data }) => {
  const { profile_path, name, character } = data

  const avatarUrl = `${TMDB_IMAGE_URL_PREFIX}/${ProfileSize.W185}/${profile_path}`

  return (
    <Stack className={styles.actor}>
      <div className={styles.avatar}>
        <CustomImage src={avatarUrl} loading="lazy" />
      </div>

      <Stack className={styles.info}>
        <h4 title={name}>{name}</h4>
        <p>
          as <em>{character}</em>
        </p>
      </Stack>
    </Stack>
  )
}

export default Actor
