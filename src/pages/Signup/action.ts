import { SignupApi } from '@/models/ApiType/Signup/type'
import { ActionType } from './reducer'
import { baseURL } from '@/utils/baseURL'
import { useNavigate } from 'react-router-dom'

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

    export async function signUp(
        dispatch: React.Dispatch<ActionType>,
        cond: {
            name: string
            email: string
            password: string
            conPassword: string
            role: string
            class_name: string
        },
    ) {
        const navigate = useNavigate()
        dispatch({ type: 'SIGNUP_REQUEST' })

        try {
            if (
                !cond.email ||
                !cond.password ||
                !cond.conPassword ||
                !cond.name ||
                !cond.class_name
            ) {
                throw new Error('未入力項目があります')
            }
            if (cond.password !== cond.conPassword) {
                throw new Error('パスワードが一致しません')
            }

            const json: SignupApi.POST.Request = {
                name: cond.name,
                email: cond.email,
                password: cond.password,
                role: cond.role,
                class_name: cond.class_name,
            }

            const res = await fetch(`${baseURL}auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(json),
            })

            const result: SignupApi.POST.Response = await res.json()

            dispatch({
                type: 'SIGNUP_SUCCESS',
                payload: {
                    name: result.name,
                    email: result.email,
                },
            })
            navigate('/login', {
                state: { name: result.name, email: result.email },
            })
        } catch (e) {
            dispatch({ type: 'SIGNUP_FAILURE' })
            console.log('失敗')
            throw e
        }
    }

    export async function ShowPass(dispatch: React.Dispatch<ActionType>) {
        dispatch({ type: 'SHOW_PASS' })
    }
}
