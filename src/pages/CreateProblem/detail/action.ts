import { NumberUtils } from '@/utils/number_utils'
import { ActionType } from './reducer'
import { ProblemVO, testData } from '@/models/entity/Problem'
import { CreateProblemDetailApi } from '@/models/ApiType/CreateProblemDetail/type'
import { tagsTestDate } from '@/models/entity/Tags'

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
    export async function findCreateProblemDetail(
        dispatch: React.Dispatch<ActionType>,
        cond: {
            id: number
        },
    ) {
        dispatch({
            type: 'FIND_CREATE_PROBLEM_DETAIL_REQUEST',
        })

        try {
            const params = new URLSearchParams({
                id: NumberUtils.formatNumber(cond.id),
            })

            /* バックエンドが完成したらコメントアウトを外す */
            // const CreateProblemRes = await fetch(
            //     // バックエンドができたらこのURLを変更
            //     `http://test.com/problems?${params.toString}`,
            //     {
            //     method: 'GET',
            //     cache: 'no-cache',
            //     },
            // )

            // const CreateProblemResult: CreateProblemApi.GET.Response =
            // await CreateProblemRes.json()
            /* ここまで */
            let detail = ProblemVO.create()
            const tags = tagsTestDate

            testData.forEach((element) => {
                if (element.id === cond.id) {
                    detail = element
                }
            })

            const CreateProblemResult: CreateProblemDetailApi.GET.Response = {
                item: detail,
                tags,
            }

            dispatch({
                type: 'FIND_CREATE_PROBLEM_DETAIL_SUCCESS',
                payload: {
                    createProblemDetail: CreateProblemResult.item,
                    tags,
                },
            })
        } catch (e) {
            dispatch({ type: 'FIND_CREATE_PROBLEM_DETAIL_FAILURE' })
            throw e
        }
    }
}
