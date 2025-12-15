import styles from './style.module.css'
import logo from '../../assets/w2cLogo.svg'
import eyeIcon from '../../assets/eye.svg'
import eyeOffIcon from '../../assets/eyeOff.svg'
import { Button } from '@/stories/Button'
import { useEffect, useReducer } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { defaultState, reducer } from './reducer'
import { Action } from './action'

export default function Login() {
    const [state, dispatch] = useReducer(reducer, undefined, defaultState)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const { email } = location.state || {}
        Action.editForm(dispatch, 'login.email', email)
    }, [])

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
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="学籍番号@ecc.ac.jp"
                                    autoComplete="email"
                                    required
                                    onChange={(e) => {
                                        Action.editForm(
                                            dispatch,
                                            'login.email',
                                            e.target.value,
                                        )
                                    }}
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
                                            state.showPassword
                                                ? 'text'
                                                : 'password'
                                        }
                                        name="password"
                                        id="password"
                                        autoComplete="current-password"
                                        required
                                        onChange={(e) => {
                                            Action.editForm(
                                                dispatch,
                                                'login.password',
                                                e.target.value,
                                            )
                                        }}
                                    />
                                    <img
                                        src={
                                            state.showPassword
                                                ? eyeOffIcon
                                                : eyeIcon
                                        }
                                        alt="パスワード表示切り替え"
                                        onClick={() =>
                                            Action.ShowPass(dispatch)
                                        }
                                        className={styles.eyeIcon}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.BtnWrap}>
                            <Button
                                label="ログインして進む"
                                onClick={() =>
                                    Action.logIn(
                                        dispatch,
                                        state.email,
                                        state.password,
                                        navigate,
                                    )
                                }
                            />
                            <Link to={'/signup'}>
                                <p>新規登録はこちら &gt;&gt;</p>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
