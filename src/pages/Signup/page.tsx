import styles from './style.module.css'
import logo from '../../assets/w2cLogo.svg'
import eyeIcon from '../../assets/eye.svg'
import eyeOffIcon from '../../assets/eyeOff.svg'
import { Button } from '@/stories/Button'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false)

    const togglePassword = () => {
        setShowPassword((prev) => !prev)
    }

    return (
        <>
            <div className={styles.loginBg}>
                <h1>
                    <img src={logo} alt="W2Cロゴ" />
                </h1>
                <p className={styles.errorMes}>
                    学校のメールアドレスを入力してください
                </p>
                <div className={styles.loginForm}>
                    <form action="">
                        <div className={styles.inputWrap}>
                            <p>新規登録</p>
                            <div className={styles.input}>
                                <label>学校メールアドレス</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="学籍番号@ecc.ac.jp"
                                    autoComplete="email"
                                    required
                                />
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="password">
                                    パスワード{' '}
                                    <span>※半角英数字のみ・8文字以上</span>
                                </label>
                                <div className={styles.passwordField}>
                                    <input
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        name="password"
                                        id="password"
                                        autoComplete="current-password"
                                        required
                                    />
                                    <img
                                        src={
                                            showPassword ? eyeOffIcon : eyeIcon
                                        }
                                        alt="パスワード表示切り替え"
                                        onClick={togglePassword}
                                        className={styles.eyeIcon}
                                    />
                                </div>
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="password">
                                    パスワード{' '}
                                    <span>
                                        ※確認のためにもう一度入力してください
                                    </span>
                                </label>
                                <div className={styles.passwordField}>
                                    <input
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        name="password"
                                        id="password"
                                        autoComplete="current-password"
                                        required
                                    />
                                    <img
                                        src={
                                            showPassword ? eyeOffIcon : eyeIcon
                                        }
                                        alt="パスワード表示切り替え"
                                        onClick={togglePassword}
                                        className={styles.eyeIcon}
                                    />
                                </div>
                            </div>
                            <div className={styles.input}>
                                <label>名前</label>
                                <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    placeholder="例）ウェブ 二郎"
                                    autoComplete="email"
                                    required
                                />
                            </div>
                            <div className={styles.input}>
                                <label>クラス</label>
                                <input
                                    type="text"
                                    name="text"
                                    id="text"
                                    placeholder="例）WD1A"
                                    required
                                />
                            </div>
                        </div>
                        <div className={styles.BtnWrap}>
                            <Button label="登録する" />
                            <Link to={'/login'}>
                                <p>ログイン画面に戻る &gt;&gt;</p>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
