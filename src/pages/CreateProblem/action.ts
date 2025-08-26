import { ActionType } from './reducer'
import { NumberUtils } from '@/utils/number_utils'
import { CreateProblemApi } from '@/models/ApiType/CreateProblem/type'
import { testData } from '@/models/entity/fmt/CreateProblemFmt0001'

export namespace Action {
    export async function findCreateProblem(
        dispatch: React.Dispatch<ActionType>,
        cond: {
            offset: number
            limit: number
            id: number
        },
    ) {
        dispatch({
            type: 'FIND_CREATE_PROBLEM_REQUEST',
            payload: {
                offset: cond.offset,
                limit: cond.limit,
            },
        })

        try {
            const params = new URLSearchParams({
                offset: NumberUtils.formatNumber(cond.offset),
                limit: NumberUtils.formatNumber(cond.limit),
                id: NumberUtils.formatNumber(cond.id),
            })

            /* バックエンドが完成したらコメントアウトを外す */
            // const CreateProblemRes = await fetch(
            //     // バックエンドができたらこのURLを変更
            //     `http://test.com/create/problems?${params.toString}`,
            //     {
            //     method: 'GET',
            //     cache: 'no-cache',
            //     },
            // )

            // const CreateProblemResult: CreateProblemApi.GET.Response =
            // await CreateProblemRes.json()
            /* ここまで */

            /* バックエンドが完成するまでtestDataを使用 */
            const CreateProblemResult: CreateProblemApi.GET.Response = {
                list: testData.slice(cond.offset, cond.limit),
                total: testData.length,
            }
            /* ここのまでがテスト */

            dispatch({
                type: 'FIND_CREATE_PROBLEM_SUCCESS',
                payload: {
                    createProblemList: CreateProblemResult.list,
                    createProblemTotal: CreateProblemResult.total,
                },
            })
        } catch (e) {
            dispatch({ type: 'FIND_CREATE_PROBLEM_FAILURE' })
            throw e
        }
    }
}
