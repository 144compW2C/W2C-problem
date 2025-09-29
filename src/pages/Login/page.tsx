import styles from './style.module.css'
import logo from '../../assets/w2clogo.svg'
import { Button } from '@/stories/Button'

export default function Login() {
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
                            <p>ログイン</p>
                            <div className={styles.input}>
                                <label>メールアドレス</label>
                                <input
                                    type="text"
                                    placeholder="学籍番号@ecc.ac.jp"
                                />
                            </div>
                            <div className={styles.input}>
                                <label>パスワード</label>
                                <input type="password" />
                            </div>
                        </div>
                        <div className={styles.BtnWrap}>
                            <Button label="ログインして進む" />
                            <a href="#">
                                <p>新規登録はこちら &gt;&gt;</p>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
