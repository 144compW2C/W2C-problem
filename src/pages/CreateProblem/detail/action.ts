import { NumberUtils } from '@/utils/number_utils'
import { ActionType } from './reducer'
import { ProblemVO, testData } from '@/models/entity/Problem'
import { CreateProblemDetailApi } from '@/models/ApiType/CreateProblemDetail/type'
import { tagsTestDate } from '@/models/entity/Tags'
import { OptionsVO, optionTestDate } from '@/models/entity/Options'

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
            testData.forEach((element) => {
                if (element.id === cond.id) {
                    detail = element
                }
            })

            let option = OptionsVO.create()
            optionTestDate.forEach((element) => {
                if (detail.id === element.fk_problem) {
                    option = element
                }
            })

            const tags = tagsTestDate

            const CreateProblemResult: CreateProblemDetailApi.GET.Response = {
                item: detail,
                tags,
                option,
            }

            dispatch({
                type: 'FIND_CREATE_PROBLEM_DETAIL_SUCCESS',
                payload: {
                    createProblemDetail: CreateProblemResult.item,
                    tags: CreateProblemResult.tags,
                    option: CreateProblemResult.option,
                },
            })
        } catch (e) {
            dispatch({ type: 'FIND_CREATE_PROBLEM_DETAIL_FAILURE' })
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

    export function nextPage(dispatch: React.Dispatch<ActionType>) {
        dispatch({ type: 'NEXT_PAGE' })
    }
    export function backPage(dispatch: React.Dispatch<ActionType>) {
        dispatch({ type: 'BACK_PAGE' })
    }
}
