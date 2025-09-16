import { CreateProblemFmt001VO } from '@/models/entity/client/fmt/CreateProblemFmt0001'
import { StatusVO } from '@/models/entity/client/Status'
import { TagsVO } from '@/models/entity/client/Tags'

export type ActionType =
    // ==============================================
    | {
          type: 'FIND_CREATE_PROBLEM_REQUEST'
          payload: {
              offset: number
              limit: number
          }
      }
    | {
          type: 'FIND_CREATE_PROBLEM_SUCCESS'
          payload: {
              createProblemList: CreateProblemFmt001VO.Type[]
              createProblemTotal: number
              tags: TagsVO.Type[]
              status: StatusVO.Type[]
          }
      }
    | {
          type: 'FIND_CREATE_PROBLEM_FAILURE'
      }
// ==============================================

export type State = {
    isWaiting: boolean
    offset: number
    limit: number
    createProblemList: CreateProblemFmt001VO.Type[]
    createProblemTotal: number
    tags: TagsVO.Type[]
    status: StatusVO.Type[]
}

export function defaultState(): State {
    return {
        isWaiting: false,
        offset: 0,
        limit: 10,
        createProblemList: [],
        createProblemTotal: 0,
        tags: [],
        status: [],
    }
}

export function reducer(state: State, action: ActionType): State {
    switch (action.type) {
        // ==============================================
        case 'FIND_CREATE_PROBLEM_REQUEST':
            return {
                ...state,
                isWaiting: true,
                offset: action.payload.offset,
                limit: action.payload.limit,
            }
        case 'FIND_CREATE_PROBLEM_SUCCESS':
            return {
                ...state,
                isWaiting: false,
                createProblemList: action.payload.createProblemList,
                createProblemTotal: action.payload.createProblemTotal,
                tags: action.payload.tags,
                status: action.payload.status,
            }
        case 'FIND_CREATE_PROBLEM_FAILURE':
            return {
                ...state,
                isWaiting: false,
            }
        // ==============================================
    }

    // デットロジック(絶対にここまでこないけど念の為にstateをそのまま返却)
    return state
}
