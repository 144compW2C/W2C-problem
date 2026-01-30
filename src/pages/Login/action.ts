import { ActionType } from './reducer'
import { LoginApi } from '@/models/ApiType/Login/type'
import { UserCookieFmt0001VO } from '@/models/entity/client/fmt/UserCookieFmt0001VO'
import { baseURL } from '@/utils/baseURL'
import { validateLogin } from '@/utils/validation/login'
import type { NavigateFunction } from 'react-router-dom'

export namespace Action {
    export async function editForm(
        dispatch: React.Dispatch<ActionType>,
        targetName: string,
        value: any,
    ) {
        dispatch({
            type: 'EDIT_FORM',
            payload: {
                targetName,
                value,
            },
        })
    }

    export async function logIn(
        dispatch: React.Dispatch<ActionType>,
        email: string,
        password: string,
        navigate: NavigateFunction,
    ) {
        dispatch({ type: 'LOGIN_REQUEST' })

        try {
            const validationError = validateLogin(email, password)
            if (validationError) {
                dispatch({
                    type: 'ERROR_MES',
                    payload: {
                        error: validationError,
                    },
                })
                throw new Error(validationError)
            }

            const json: LoginApi.POST.Request = {
                email,
                password,
            }

            const res = await fetch(`${baseURL}auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(json),
            })

            const result = await res.json()

            if (!res.ok) {
                const message =
                    typeof result?.error === 'string'
                        ? result.error
                        : 'ログインに失敗しました'
                dispatch({
                    type: 'ERROR_MES',
                    payload: {
                        error: message,
                    },
                })
                dispatch({ type: 'LOGIN_FAILURE' })
                throw new Error(message)
            }

            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: {
                    token: result.token,
                    id: result.id,
                    email: result.email,
                    name: result.name,
                    role: result.role,
                    class_name: result.class_name,
                },
            })

            const maxAge = 60 * 60 * 24 * 7

            document.cookie = `W2CToken=${result.token}; path=/; max-age=${maxAge}`

            const userData: UserCookieFmt0001VO.Type = {
                id: result.id,
                name: result.name,
                email: result.email,
                role: result.role,
                class_name: result.class_name,
            }
            document.cookie = `user=${encodeURIComponent(JSON.stringify(userData))}; path=/; max-age=${maxAge}`

            navigate('/')
        } catch (e) {
            dispatch({ type: 'LOGIN_FAILURE' })
            throw e
        }
    }

    export async function ShowPass(dispatch: React.Dispatch<ActionType>) {
        dispatch({ type: 'SHOW_PASS' })
    }
}
