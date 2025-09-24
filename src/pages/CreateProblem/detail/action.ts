import { NumberUtils } from '@/utils/number_utils'
import { ActionType } from './reducer'
import { CreateProblemDetailApi } from '@/models/ApiType/CreateProblemDetail/type'
import { baseURL } from '@/utils/baseURL'
import { TagsVO } from '@/models/entity/client/Tags'
import { ProblemConverter } from '@/models/entity/converter/Problem'
import { ProblemVO } from '@/models/entity/client/Problem'
import { OptionsVO } from '@/models/entity/client/Options'
import { CreateProblemApi } from '@/models/ApiType/CreateProblem/type'

export namespace Action {
    export async function editForm(
        dispatch: React.Dispatch<ActionType>,
        targetName: string,
        value: any,
        index?: number,
        choiceIdx?: number,
    ) {
        dispatch({
            type: 'EDIT_FORM',
            payload: {
                targetName,
                value,
                index,
                choiceIdx,
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
            const params = NumberUtils.formatNumber(cond.id)
            let convertedProblem: ProblemVO.Type

            // paramsが0の場合は新規作成
            if (params === '0') {
                console.log('新規問題作成')
                convertedProblem = ProblemVO.create()
            } else {
                // 既存問題の取得
                const CreateProblemRes = await fetch(
                    `${baseURL}/problems/${params}`,
                    {
                        method: 'GET',
                        cache: 'no-cache',
                    },
                )

                const CreateProblemResult: CreateProblemDetailApi.GET.BackendResponse =
                    await CreateProblemRes.json()

                /* この場所でバックエンドからもらったデータの型をフロント側ようの型に変更する */
                convertedProblem = ProblemConverter.fromBackendToVo(
                    CreateProblemResult?.data,
                )
            }

            /* タグ一覧を入手 */
            const tagsRes = await fetch(`${baseURL}/tags`, {
                method: 'GET',
                cache: 'no-cache',
            })
            const tagsResult: TagsVO.Type[] = await tagsRes.json()

            /* 問題のオプションを入手 */
            const optionRes = await fetch(
                `${baseURL}/options/${convertedProblem.id}`,
                {
                    method: 'GET',
                    cache: 'no-cache',
                },
            )
            const optionResult: OptionsVO.Type = await optionRes.json()

            const CreateProblemDetailResult: CreateProblemDetailApi.GET.Response =
                {
                    item: convertedProblem,
                    tags: tagsResult,
                    option: optionResult,
                }
            dispatch({
                type: 'FIND_CREATE_PROBLEM_DETAIL_SUCCESS',
                payload: {
                    createProblemDetail: CreateProblemDetailResult.item,
                    tags: CreateProblemDetailResult.tags,
                    option: CreateProblemDetailResult.option,
                },
            })
        } catch (e) {
            dispatch({ type: 'FIND_CREATE_PROBLEM_DETAIL_FAILURE' })
            throw e
        }
    }

    export async function saveCreateProblemDetail(
        dispatch: React.Dispatch<ActionType>,
        createProblemDetail: ProblemVO.Type,
        // option: OptionsVO.Type
    ) {
        dispatch({ type: 'SAVE_CREATE_PROBLEM_DETAIL_REQUEST' })

        try {
            const json: CreateProblemApi.POST.Request = {
                createProblemDetail,
                // option
            }

            const res = await fetch(`${baseURL}/createProblem`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(json),
            })

            const result: CreateProblemApi.POST.Response = await res.json()
        } catch (e) {
            dispatch({ type: 'SAVE_CREATE_PROBLEM_DETAIL_FAILURE' })
            throw e
        }
    }

    export function convertStringsToArray(
        dispatch: React.Dispatch<ActionType>,
        cond: {
            content: string
            option_name: string
            model_answer: string
        },
    ) {
        let optionContent: string[][] = []
        let optionName: string[] = []
        let modelAnswer: number[] = []

        try {
            // JSON文字列を配列に変換
            optionContent = JSON.parse(cond.content) as string[][]
            optionName = JSON.parse(cond.option_name) as string[]
            modelAnswer = JSON.parse(cond.model_answer) as number[]
        } catch (error) {
            console.error('JSON parse error:', error)
            // パースに失敗した場合は空配列を使用
            optionContent = []
            optionName = []
            modelAnswer = []
        }

        dispatch({
            type: 'CONVERT_STRINGS_TO_ARRAY',
            payload: {
                optionContent,
                optionName,
                modelAnswer,
            },
        })
    }

    export function addChoices(
        dispatch: React.Dispatch<ActionType>,
        cond: {
            conIdx: number
        },
    ) {
        dispatch({
            type: 'ADD_CHOICES',
            payload: {
                conIdx: cond.conIdx,
            },
        })
    }
    export function deleteChoices(
        dispatch: React.Dispatch<ActionType>,
        cond: {
            conIdx: number
            choIdx: number
        },
    ) {
        dispatch({
            type: 'DELETE_CHOICES',
            payload: {
                conIdx: cond.conIdx,
                choIdx: cond.choIdx,
            },
        })
    }
    export function addSelectProblem(dispatch: React.Dispatch<ActionType>) {
        dispatch({ type: 'ADD_SELECT_PROBLEM' })
    }
    export function deleteSelectProblem(
        dispatch: React.Dispatch<ActionType>,
        cond: {
            conIdx: number
        },
    ) {
        dispatch({
            type: 'DELETE_SELECT_PROBLEM',
            payload: {
                conIdx: cond.conIdx,
            },
        })
    }

    export function nextPage(dispatch: React.Dispatch<ActionType>) {
        dispatch({ type: 'NEXT_PAGE' })
    }
    export function backPage(dispatch: React.Dispatch<ActionType>) {
        dispatch({ type: 'BACK_PAGE' })
    }
}
