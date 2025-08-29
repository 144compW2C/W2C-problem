import { OptionsVO } from '@/models/entity/Options'
import { State } from '../reducer'
import { ActionType } from './reducer'

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

    export async function CreateProblemAnswer(
        dispatch: React.Dispatch<ActionType>,
        cond: {
            answer: State
        },
    ) {
        dispatch({
            type: 'CREATE_PROBLEM_ANSWER',
            payload: {
                answer: cond.answer,
            },
        })
    }
    export function backPage(dispatch: React.Dispatch<ActionType>) {
        dispatch({ type: 'BACK_PAGE' })
    }
}
