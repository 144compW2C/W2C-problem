import { ActionType } from './reducer'

export namespace Action {
    export async function openForm(
        dispatch: React.Dispatch<ActionType>,
        tagName: string,
    ) {
        dispatch({
            type: 'OPEN_FORM',
            payload: {
                tagName,
            },
        })
    }

    export async function findGenreProblem(
        dispatch: React.Dispatch<ActionType>,
        cond: {
            offset: number
            limit: number
        },
    ) {
        dispatch({
            type: 'FIND_GENRE_PROBLEM_REQUEST',
            payload: {
                offset: cond.offset,
                limit: cond.limit,
            },
        })

        try {
        } catch (e) {
            dispatch({ type: 'FIND_GENRE_PROBLEM_FAILURE' })
            throw e
        }
    }
}
