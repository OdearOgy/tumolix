import styles from './index.module.css'

const Skeleton = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <div className={styles.list + ' animate-pulse'}>
      {list.map((i) => {
        return <div className={`${styles.movie} ${styles.skeleton}`} key={i}></div>
      })}
    </div>
  )
}

export default Skeleton
