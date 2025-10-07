import { ActionType } from './reducer'
import { NumberUtils } from '@/utils/number_utils'
import { CreateProblemApi } from '@/models/ApiType/CreateProblem/type'
import { baseURL } from '@/utils/baseURL'
import { TagsVO } from '@/models/entity/client/Tags'
import { StatusVO } from '@/models/entity/client/Status'

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

            /* 問題一覧を入手 */
            const CreateProblemRes = await fetch(
                `${baseURL}/createProblem?${params.toString}`,
                {
                    method: 'GET',
                    cache: 'no-cache',
                },
            )

            const backendResult: CreateProblemApi.GET.BackendResponse =
                await CreateProblemRes.json()

            const convertedList = backendResult.list.map((item) => ({
                id: item.id,
                title: item.title,
                fk_tags: item.fk_tags ?? 0,
                fk_status: item.fk_status ?? 0,
                level: item.level ?? 0,
                difficulty: item.difficulty ?? 0,
                creator_id: item.creator_id ?? 0,
            }))

            /* タグ一覧を入手 */
            const tagsRes = await fetch(`${baseURL}/tags`, {
                method: 'GET',
                cache: 'no-cache',
            })
            const tagsResult: TagsVO.Type[] = await tagsRes.json()

            /* ステータス一覧を入手 */
            const statusRes = await fetch(`${baseURL}/status`, {
                method: 'GET',
                cache: 'no-cache',
            })
            const statusResult: StatusVO.Type[] = await statusRes.json()

            const CreateProblemResult: CreateProblemApi.GET.Response = {
                list: convertedList,
                total: backendResult.total,
                tags: tagsResult,
                status: statusResult,
            }

            dispatch({
                type: 'FIND_CREATE_PROBLEM_SUCCESS',
                payload: {
                    createProblemList: CreateProblemResult.list,
                    createProblemTotal: CreateProblemResult.total,
                    tags: CreateProblemResult.tags,
                    status: CreateProblemResult.status,
                },
            })
        } catch (e) {
            dispatch({ type: 'FIND_CREATE_PROBLEM_FAILURE' })
            throw e
        }
    }
}
