import styles from './style.module.css'
import hamburgerIcon from '../../assets/hamburger.svg'
import iconImg from '../../assets/icon.jpg'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleHamburger = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header>
      <div className={styles.header}>
        <img
          src={hamburgerIcon}
          className={styles.hamburger}
          alt="ハンバーガー"
          width={30}
          height={30}
          onClick={toggleHamburger}
        />
        <div className={styles.figure}>
          <img src={iconImg} className={styles.icon} alt="アイコン画像" />
        </div>
      </div>
      <div className={`${styles.nav} ${isOpen ? styles.hamburgerOpen : ''}`}>
        <nav>
          <ul>
            <li className={styles.active}>ホーム</li>
            <li>問題集</li>
            <li>問題作成</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
