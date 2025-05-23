import styles from './index.module.css'
import mobileLogo from '/assets/icon.png'
import logo from '/assets/logo.png'

const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.desktop} src={logo} loading="lazy" />
      <img className={styles.mobile} src={mobileLogo} loading="lazy" />
    </div>
  )
}

export default Logo
