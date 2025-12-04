import { LoginFmt0001VO } from '@/models/entity/client/fmt/LoginFmt0001VO'
import { ActionType } from './reducer'
import { LoginApi } from '@/models/ApiType/Login/type'
import { baseURL } from '@/utils/baseURL'

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
        user: LoginFmt0001VO.Type,
    ) {
        dispatch({ type: 'LOGIN_REQUEST' })

        if (!user.email || !user.password) {
            throw new Error('未入力項目があります')
        }

        try {
            const json: LoginApi.POST.Request = {
                email: user.email,
                password: user.password,
            }

            const res = await fetch(`${baseURL}auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(json),
            })

            const result: LoginApi.POST.Response = await res.json()

            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: {
                    token: result.token,
                },
            })
        } catch (e) {
            dispatch({ type: 'LOGIN_FAILURE' })
            throw e
        }
    }

    export async function ShowPass(dispatch: React.Dispatch<ActionType>) {
        dispatch({ type: 'SHOW_PASS' })
    }
}
