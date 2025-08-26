import styles from './style.module.css'
import hamburgerIcon from '../../assets/hamburger.svg'
import iconImg from '../../assets/icon.jpg'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleHamburger = () => {
        setIsOpen(!isOpen)
    }
    const pathname = useLocation()
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
                    <img
                        src={iconImg}
                        className={styles.icon}
                        alt="アイコン画像"
                    />
                </div>
            </div>
            <div
                className={`${styles.nav} ${isOpen ? styles.hamburgerOpen : ''}`}
            >
                <nav>
                    <ul>
                        <Link
                            to={'/'}
                            className={
                                location.pathname === '/' ? styles.active : ''
                            }
                        >
                            <li>ホーム</li>
                        </Link>
                        <Link
                            to={'/problem'}
                            className={
                                location.pathname === '/problem'
                                    ? styles.active
                                    : ''
                            }
                        >
                            <li>問題集</li>
                        </Link>
                        <Link
                            to={'/createProblem'}
                            className={
                                location.pathname === '/createProblem'
                                    ? styles.active
                                    : ''
                            }
                        >
                            <li>問題作成</li>
                        </Link>
                        <Link
                            to={'#'}
                            className={
                                location.pathname === '#' ? styles.active : ''
                            }
                        >
                            <li>運営管理</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
