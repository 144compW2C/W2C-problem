import { CreateProblemApi } from '@/models/vo/CreateProblem/type'
import { ActionType } from './reducer'

export namespace Action {
  export async function findCreateProblem(
    dispatch: React.Dispatch<ActionType>,
    cond: {
      offset: number
      limit: number
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
        offset: cond.offset,
        limit: cond.limit,
      })

      const CreateProblemRes = await fetch(
        // バックエンドができたらこのURLを変更
        `http://test.com/create/problems?${params.toString}`,
        {
          method: 'GET',
          cache: 'no-cache',
        },
      )

      const CreateProblemResult: CreateProblemApi.GET.Response =
        await CreateProblemRes.json()

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
