import { ProblemVO } from '@/models/entity/Problem'

export type ActionType =
    // ==============================================
    | {
          type: 'FIND_CREATE_PROBLEM_DETAIL_REQUEST'
      }
    | {
          type: 'FIND_CREATE_PROBLEM_DETAIL_SUCCESS'
          payload: {
              createProblemDetail: ProblemVO.Type
          }
      }
    | {
          type: 'FIND_CREATE_PROBLEM_DETAIL_FAILURE'
      }
// ==============================================

export type State = {
    isWaiting: boolean
    offset: number
    limit: number
    createProblemDetail: ProblemVO.Type
    createProblemTotal: number
}

export function defaultState(): State {
    return {
        isWaiting: false,
        offset: 0,
        limit: 10,
        createProblemDetail: ProblemVO.create(),
        createProblemTotal: 0,
    }
}

export function reducer(state: State, action: ActionType): State {
    switch (action.type) {
        // ==============================================
        case 'FIND_CREATE_PROBLEM_DETAIL_REQUEST':
            return {
                ...state,
                isWaiting: true,
            }
        case 'FIND_CREATE_PROBLEM_DETAIL_SUCCESS':
            return {
                ...state,
                isWaiting: false,
                createProblemDetail: action.payload.createProblemDetail,
            }
        case 'FIND_CREATE_PROBLEM_DETAIL_FAILURE':
            return {
                ...state,
                isWaiting: false,
            }
        // ==============================================
    }

    // デットロジック(絶対にここまでこないけど念の為にstateをそのまま返却)
    return state
}
