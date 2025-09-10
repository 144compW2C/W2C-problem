import styles from './style.module.css'
import hamburgerIcon from '../../assets/hamburger.svg'
import iconImg from '../../assets/icon.jpg'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

type Type = {
    void: () => void
    state: boolean
}

export default function Header(props: Type) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleHamburger = () => {
        setIsOpen(!isOpen)
    }
    const location = useLocation()
    return (
        <header className={styles.headerWrap}>
            <div className={styles.header}>
                <div>
                    <img
                        src={hamburgerIcon}
                        className={styles.hamburger}
                        alt="ハンバーガー"
                        width={30}
                        height={30}
                        onClick={props.void}
                    />
                    <div className={styles.figure}>
                        <img
                            src={iconImg}
                            className={styles.icon}
                            alt="アイコン画像"
                        />
                    </div>
                </div>
            </div>
            <div
                className={`${styles.nav} ${props.state ? styles.hamburgerOpen : ''}`}
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
                                location.pathname.startsWith('/problem')
                                    ? styles.active
                                    : ''
                            }
                        >
                            <li>問題集</li>
                        </Link>
                        <Link
                            to={'/createProblem'}
                            className={
                                location.pathname.startsWith('/createProblem')
                                    ? styles.active
                                    : ''
                            }
                        >
                            <li>問題作成</li>
                        </Link>
                        <Link
                            to={'/admin'}
                            className={
                                location.pathname.startsWith('/admin')
                                    ? styles.active
                                    : ''
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
